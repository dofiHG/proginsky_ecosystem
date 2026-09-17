<?php  return '$ip = $_SERVER[\'REMOTE_ADDR\'];
$userAgent = $_SERVER[\'HTTP_USER_AGENT\'];

// Простой список "ботовских" User-Agent
$botUserAgents = [\'curl/\', \'python-requests\', \'libwww-perl\', \'Go-http-client\', \'Java/\', \'Wget/\'];

// Проверка User-Agent на принадлежность к ботам
foreach ($botUserAgents as $botUA) {
    if (stripos($userAgent, $botUA) !== false || empty($userAgent)) {
        $hook->addError(\'name\', $modx->lexicon(\'formit.error_bot_detected\'));
        return false;
    }
}

$cacheKey = \'formit_submission_\' . $ip;

$cachedData = $modx->cacheManager->get($cacheKey);

$hourlyLimit = 10;
$dailyLimit = 10;
$currentTime = time();

if ($cachedData) {
    $hourlySubmissions = $cachedData[\'hourlySubmissions\'];
    $dailySubmissions = $cachedData[\'dailySubmissions\'];
    $firstSubmissionTime = $cachedData[\'firstSubmissionTime\'];

    if ($currentTime - $cachedData[\'lastSubmissionTime\'] > 3600) {
        $hourlySubmissions = 0;
    }

    if ($currentTime - $firstSubmissionTime > 86400) {
        $dailySubmissions = 0;
        $firstSubmissionTime = $currentTime;
    }

    if ($hourlySubmissions >= $hourlyLimit || $dailySubmissions >= $dailyLimit) {
        $hook->addError(\'name\', $modx->lexicon(\'formit.error_submission_limit\'));
        return false;
    }

    $hourlySubmissions++;
    $dailySubmissions++;
} else {
    $hourlySubmissions = 1;
    $dailySubmissions = 1;
    $firstSubmissionTime = $currentTime;
}

$cacheData = [
    \'hourlySubmissions\' => $hourlySubmissions,
    \'dailySubmissions\' => $dailySubmissions,
    \'lastSubmissionTime\' => $currentTime,
    \'firstSubmissionTime\' => $firstSubmissionTime
];



if (!$modx->cacheManager->set($cacheKey, $cacheData, 86400)) {
    $modx->log(xPDO::LOG_LEVEL_ERROR, \'Failed to save cache data.\'.$cacheData);
}

return true;
return;
';