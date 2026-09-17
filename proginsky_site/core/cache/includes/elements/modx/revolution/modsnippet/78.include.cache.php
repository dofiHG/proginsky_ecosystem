<?php
$fields = $hook->getValues();

$apiKey = trim((string)$modx->getOption('token', $scriptProperties));
$removeHashFromSourceUrl = true;

if (!function_exists('crmhook_request')) {
    function crmhook_request($method, $url, $payload = null, $headers = array(), $timeout = 6)
    {
        $ch = curl_init();

        $options = array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 3,
            CURLOPT_TIMEOUT => $timeout,
            CURLOPT_HTTPHEADER => array_merge(
                array(
                    'Content-Type: application/json',
                    'Accept: application/json'
                ),
                $headers
            )
        );

        $method = strtoupper((string)$method);

        if ($method === 'POST') {
            $options[CURLOPT_POST] = true;
        } elseif ($method !== 'GET') {
            $options[CURLOPT_CUSTOMREQUEST] = $method;
        }

        if ($payload !== null) {
            $options[CURLOPT_POSTFIELDS] = json_encode(
                $payload,
                JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES
            );
        }

        curl_setopt_array($ch, $options);

        $response = curl_exec($ch);
        $error = curl_error($ch);
        $httpCode = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);

        curl_close($ch);

        $json = null;

        if ($response !== false && $response !== '') {
            $decoded = json_decode($response, true);

            if (json_last_error() === JSON_ERROR_NONE) {
                $json = $decoded;
            }
        }

        return array(
            'http_code' => $httpCode,
            'response' => (string)$response,
            'error' => $error,
            'json' => $json
        );
    }
}

if (!function_exists('crmhook_preview')) {
    function crmhook_preview($value, $limit = 700)
    {
        $value = (string)$value;

        if (function_exists('mb_substr')) {
            return mb_substr($value, 0, $limit, 'UTF-8');
        }

        return substr($value, 0, $limit);
    }
}

if (!function_exists('crmhook_normalize_phone')) {
    function crmhook_normalize_phone($phone)
    {
        $phone = preg_replace('/\D+/', '', (string)$phone);

        if (strlen($phone) === 11 && $phone[0] === '8') {
            $phone = '7' . substr($phone, 1);
        }

        if (strlen($phone) === 10 && $phone[0] === '9') {
            $phone = '7' . $phone;
        }

        return $phone;
    }
}

if (!function_exists('crmhook_normalize_email')) {
    function crmhook_normalize_email($email)
    {
        $email = trim((string)$email);

        if (function_exists('mb_strtolower')) {
            return mb_strtolower($email, 'UTF-8');
        }

        return strtolower($email);
    }
}

if (!function_exists('crmhook_extract_id')) {
    function crmhook_extract_id($data)
    {
        if (!is_array($data)) {
            return 0;
        }

        foreach (array('id', 'userId', 'user_id') as $key) {
            if (!empty($data[$key]) && is_numeric($data[$key])) {
                return (int)$data[$key];
            }
        }

        foreach ($data as $value) {
            if (is_array($value)) {
                $id = crmhook_extract_id($value);

                if ($id > 0) {
                    return $id;
                }
            }
        }

        return 0;
    }
}

if (!function_exists('crmhook_extract_email')) {
    function crmhook_extract_email($user)
    {
        if (!is_array($user)) {
            return '';
        }

        foreach (array('email', 'mail', 'Email') as $key) {
            if (!empty($user[$key])) {
                $email = crmhook_normalize_email($user[$key]);

                if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    return $email;
                }
            }
        }

        foreach (array('emails', 'contacts') as $containerKey) {
            if (empty($user[$containerKey]) || !is_array($user[$containerKey])) {
                continue;
            }

            foreach ($user[$containerKey] as $item) {
                if (is_string($item)) {
                    $email = crmhook_normalize_email($item);

                    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                        return $email;
                    }
                }

                if (is_array($item)) {
                    foreach (array('email', 'mail', 'value') as $key) {
                        if (!empty($item[$key])) {
                            $email = crmhook_normalize_email($item[$key]);

                            if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
                                return $email;
                            }
                        }
                    }
                }
            }
        }

        return '';
    }
}

if (!function_exists('crmhook_collect_users')) {
    function crmhook_collect_users($data, &$users = array())
    {
        if (!is_array($data)) {
            return;
        }

        if (
            isset($data['id'])
            && (
                array_key_exists('name', $data)
                || array_key_exists('email', $data)
                || array_key_exists('phone', $data)
                || array_key_exists('emails', $data)
            )
        ) {
            $users[] = $data;
        }

        foreach ($data as $value) {
            if (is_array($value)) {
                crmhook_collect_users($value, $users);
            }
        }
    }
}

if (!function_exists('crmhook_is_deleted')) {
    function crmhook_is_deleted($user)
    {
        if (!is_array($user)) {
            return true;
        }

        foreach (
            array(
                'deleted',
                'isDeleted',
                'is_deleted',
                'removed',
                'isRemoved',
                'is_removed',
                'archived',
                'isArchived',
                'is_archived'
            )
            as $key
        ) {
            if (!array_key_exists($key, $user)) {
                continue;
            }

            $value = $user[$key];

            if (
                $value === true
                || $value === 1
                || $value === '1'
                || $value === 'true'
            ) {
                return true;
            }
        }

        foreach (
            array(
                'deletedAt',
                'deleted_at',
                'removedAt',
                'removed_at',
                'archivedAt',
                'archived_at'
            )
            as $key
        ) {
            if (!empty($user[$key])) {
                return true;
            }
        }

        return false;
    }
}

if (!function_exists('crmhook_get_user')) {
    function crmhook_get_user($userId, $accessToken)
    {
        if ((int)$userId <= 0) {
            return null;
        }

        $result = crmhook_request(
            'GET',
            'https://api.moyklass.com/v1/company/users/' . (int)$userId,
            null,
            array(
                'x-access-token: ' . $accessToken
            ),
            4
        );

        if (
            !empty($result['error'])
            || $result['http_code'] < 200
            || $result['http_code'] >= 300
            || !is_array($result['json'])
        ) {
            return null;
        }

        return $result['json'];
    }
}

if (!function_exists('crmhook_find_user_by_email')) {
    function crmhook_find_user_by_email($email, $accessToken)
    {
        $result = crmhook_request(
            'GET',
            'https://api.moyklass.com/v1/company/users?email=' . urlencode($email),
            null,
            array(
                'x-access-token: ' . $accessToken
            ),
            4
        );

        if (
            !empty($result['error'])
            || $result['http_code'] < 200
            || $result['http_code'] >= 300
            || !is_array($result['json'])
        ) {
            return 0;
        }

        $users = array();

        crmhook_collect_users(
            $result['json'],
            $users
        );

        foreach ($users as $user) {
            $userEmail = crmhook_extract_email($user);

            if ($userEmail !== $email) {
                continue;
            }

            $userId = crmhook_extract_id($user);

            if ($userId <= 0) {
                continue;
            }

            $details = crmhook_get_user(
                $userId,
                $accessToken
            );

            if (!is_array($details)) {
                continue;
            }

            if (crmhook_is_deleted($details)) {
                continue;
            }

            if (crmhook_extract_email($details) !== $email) {
                continue;
            }

            return $userId;
        }

        return 0;
    }
}

if (!function_exists('crmhook_get_source_url')) {
    function crmhook_get_source_url($modx, $fields)
    {
        foreach (
            array(
                'page_url',
                'source_url',
                'current_url',
                'url'
            )
            as $key
        ) {
            if (!empty($fields[$key])) {
                return trim((string)$fields[$key]);
            }
        }

        if (!empty($_SERVER['HTTP_REFERER'])) {
            return trim((string)$_SERVER['HTTP_REFERER']);
        }

        if (
            !empty($modx->resource)
            && $modx->resource instanceof modResource
        ) {
            return $modx->makeUrl(
                $modx->resource->get('id'),
                '',
                '',
                'full'
            );
        }

        return '';
    }
}

if (!function_exists('crmhook_set_value')) {
    function crmhook_set_value($hook, $modx, $key, $value)
    {
        $value = (string)$value;

        if ($hook && method_exists($hook, 'setValue')) {
            $hook->setValue($key, $value);
        }

        $modx->setPlaceholder($key, $value);
        $modx->setPlaceholder('fi.' . $key, $value);
    }
}

$name = trim((string)($fields['name'] ?? ''));
$email = crmhook_normalize_email($fields['email'] ?? '');
$phone = crmhook_normalize_phone($fields['phone'] ?? '');

if ($apiKey === '') {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'CRMHook STOP: empty MoyKlass API key'
    );

    return true;
}

if ($name === '' || $phone === '') {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'CRMHook STOP: empty name or phone'
    );

    return true;
}

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'CRMHook STOP: invalid email=' . $email
    );

    return true;
}

$sourceUrl = crmhook_get_source_url(
    $modx,
    $fields
);

if ($removeHashFromSourceUrl && $sourceUrl !== '') {
    $hashPosition = strpos(
        $sourceUrl,
        '#'
    );

    if ($hashPosition !== false) {
        $sourceUrl = substr(
            $sourceUrl,
            0,
            $hashPosition
        );
    }
}

$webinarTitle = trim(
    (string)($fields['webinar_title'] ?? '')
);

if ($webinarTitle === '') {
    $webinarTitle = trim(
        (string)($fields['course_name'] ?? '')
    );
}

$webinarId = trim(
    (string)($fields['webinar_id'] ?? '')
);

$comment = $sourceUrl;

if ($webinarTitle !== '') {
    $comment .= "\nВебинар: " . $webinarTitle;
}

if ($webinarId !== '') {
    $comment .= "\nWebinar ID: " . $webinarId;
}

crmhook_set_value(
    $hook,
    $modx,
    'crm_source_url',
    $sourceUrl
);

crmhook_set_value(
    $hook,
    $modx,
    'crm_comment',
    $comment
);

$modx->log(
    modX::LOG_LEVEL_INFO,
    'CRMHook START: email=' . $email .
    '; phone=' . $phone .
    '; source=' . $sourceUrl
);

$authResult = crmhook_request(
    'POST',
    'https://api.moyklass.com/v1/company/auth/getToken',
    array(
        'apiKey' => $apiKey
    ),
    array(),
    6
);

if (
    !empty($authResult['error'])
    || $authResult['http_code'] < 200
    || $authResult['http_code'] >= 300
    || empty($authResult['json']['accessToken'])
) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'CRMHook STOP: MoyKlass auth failed; http=' .
        $authResult['http_code'] .
        '; error=' .
        $authResult['error']
    );

    return true;
}

$accessToken = (string)$authResult['json']['accessToken'];

$moyklassUserId = crmhook_find_user_by_email(
    $email,
    $accessToken
);

$userWasCreated = false;
$existingUserFound = $moyklassUserId > 0;

if ($moyklassUserId > 0) {
    $modx->log(
        modX::LOG_LEVEL_INFO,
        'CRMHook EXISTING USER: id=' .
        $moyklassUserId .
        '; email=' .
        $email
    );
}

if ($moyklassUserId <= 0) {
    $userData = array(
        'name' => $name,
        'phone' => $phone,
        'email' => $email,
        'source' => 'сайт: ' . $sourceUrl
    );

    $utms = array();

    foreach (
        array(
            'utm_source',
            'utm_medium',
            'utm_campaign',
            'utm_term',
            'utm_content'
        )
        as $utmKey
    ) {
        if (!empty($_SESSION[$utmKey])) {
            $utms[$utmKey] = $_SESSION[$utmKey];
        } elseif (!empty($fields[$utmKey])) {
            $utms[$utmKey] = $fields[$utmKey];
        }
    }

    if (!empty($utms)) {
        $userData['utms'] = $utms;
    }

    $createResult = crmhook_request(
        'POST',
        'https://api.moyklass.com/v1/company/users',
        $userData,
        array(
            'x-access-token: ' . $accessToken
        ),
        8
    );

    $modx->log(
        modX::LOG_LEVEL_INFO,
        'CRMHook CREATE USER: http=' .
        $createResult['http_code'] .
        '; response=' .
        crmhook_preview($createResult['response'])
    );

    if (
        !empty($createResult['error'])
        || $createResult['http_code'] < 200
        || $createResult['http_code'] >= 300
    ) {
        $modx->log(
            modX::LOG_LEVEL_ERROR,
            'CRMHook STOP: cannot create MoyKlass user'
        );

        return true;
    }

    $moyklassUserId = crmhook_extract_id(
        $createResult['json']
    );

    $userWasCreated = true;

    if ($moyklassUserId <= 0) {
        $findResult = crmhook_request(
            'GET',
            'https://api.moyklass.com/v1/company/users?phone=' . urlencode($phone),
            null,
            array(
                'x-access-token: ' . $accessToken
            ),
            4
        );

        if (
            empty($findResult['error'])
            && $findResult['http_code'] >= 200
            && $findResult['http_code'] < 300
        ) {
            $moyklassUserId = crmhook_extract_id(
                $findResult['json']
            );
        }
    }
}

if ($moyklassUserId <= 0) {
    $modx->log(
        modX::LOG_LEVEL_ERROR,
        'CRMHook STOP: MoyKlass user id not found'
    );

    return true;
}

crmhook_set_value(
    $hook,
    $modx,
    'moyklass_user_id',
    $moyklassUserId
);

crmhook_set_value(
    $hook,
    $modx,
    'moyklass_user_was_created',
    $userWasCreated ? '1' : '0'
);

crmhook_set_value(
    $hook,
    $modx,
    'moyklass_existing_user_found',
    $existingUserFound ? '1' : '0'
);

$commentResult = crmhook_request(
    'POST',
    'https://api.moyklass.com/v1/company/userComments',
    array(
        'userId' => $moyklassUserId,
        'comment' => $comment
    ),
    array(
        'x-access-token: ' . $accessToken
    ),
    5
);

$modx->log(
    modX::LOG_LEVEL_INFO,
    'CRMHook COMMENT: http=' .
    $commentResult['http_code'] .
    '; userId=' .
    $moyklassUserId
);

$modx->log(
    modX::LOG_LEVEL_INFO,
    'CRMHook SUCCESS: userId=' .
    $moyklassUserId .
    '; created=' .
    ($userWasCreated ? '1' : '0') .
    '; existing=' .
    ($existingUserFound ? '1' : '0') .
    '; email=' .
    $email
);

return true;
return;
