<?php  return '$value = isset($value) ? $value : \'\';

$phone_number = preg_replace(\'/\\D/\', \'\', $value);
if (substr($phone_number, 0, 1) === \'8\') {
    $phone_number = \'7\' . substr($phone_number, 1);
}
return $phone_number;
return;
';