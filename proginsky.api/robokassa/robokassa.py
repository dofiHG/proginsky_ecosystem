import hashlib
import json
import os
from urllib.parse import quote_plus, urlencode

ROBOKASSA_MERCHANT_LOGIN = os.environ["ROBOKASSA_MERCHANT_LOGIN"]
ROBOKASSA_PASSWORD_1 = os.environ["ROBOKASSA_PASSWORD_1"]
ROBOKASSA_PASSWORD_2 = os.environ["ROBOKASSA_PASSWORD_2"]
ROBOKASSA_IS_TEST = os.getenv("ROBOKASSA_IS_TEST", "1")

def build_payment_url(order_id: int, amount: str, description: str) -> str:
    receipt_raw = json.dumps({
        "items": [{
            "name": description,
            "quantity": 1,
            "sum": float(amount),
            "payment_method": "full_payment",
            "payment_object": "service",
            "tax": "none"
        }]
    }, ensure_ascii=False, separators=(",", ":"))

    receipt = quote_plus(receipt_raw, safe="")

    signature_string = f"{ROBOKASSA_MERCHANT_LOGIN}:{amount}:{order_id}:{receipt}:{ROBOKASSA_PASSWORD_1}"
    signature = hashlib.md5(signature_string.encode("utf-8")).hexdigest()

    params = {
        "MerchantLogin": ROBOKASSA_MERCHANT_LOGIN,
        "OutSum": amount,
        "InvId": order_id,
        "Description": description,
        "SignatureValue": signature,
        "Culture": "ru",
        "Encoding": "utf-8",
        "Receipt": receipt
    }

    if str(ROBOKASSA_IS_TEST).lower() in ("1", "true", "yes"):
        params["IsTest"] = "1"

    return "https://auth.robokassa.ru/Merchant/Index.aspx?" + urlencode(params)

def check_result_signature(out_sum: str, inv_id: int, signature: str) -> bool:
    value = f"{out_sum}:{inv_id}:{ROBOKASSA_PASSWORD_2}"
    expected_signature = hashlib.md5(value.encode("utf-8")).hexdigest()
    return expected_signature.lower() == signature.lower()