from pydantic import BaseModel, EmailStr, Field
from datetime import datetime

class User(BaseModel):
    name: str
    email: str | None = None
    phone: str

class TelegramChainUser(BaseModel):
    token: str | None = None
    telegram_user_id: int
    telegram_username: str | None = None

class CreatePaymentRequest(BaseModel):
    telegram_user_id: int
    tariff_slug: str

class WebCheckoutRequest(BaseModel):
    course: str | None = None
    course_slug: str | None = None
    tariff: str | None = None
    tariff_slug: str | None = None
    first_name: str
    last_name: str = ""
    email: EmailStr
    phone: str
    promo_code: str | None = None
    source: str | None = None

class CreateUdateTask(BaseModel):
    text: str | None = None
    file_id: str | None = None
    file_type: str | None = None
    id: int | None = None

class TaskAnswer(BaseModel):
    telegram_user_id: int
    file_id: str

class NewMessage(BaseModel):
    message_text: str | None = None
    auditory_type: str
    send_time: datetime
    document_id: str | None = None
    document_type: str | None = None

class EditedMessage(BaseModel):
    message_id: int
    message_text: str | None = None
    send_time: datetime | None = None
    document_id: str | None = None
    document_type: str | None = None

class RowToDelete(BaseModel):
    table_name: str
    row_id: int

class MoodleCoursePurchase(BaseModel):
    email: str
    course_slug: str
    tariff_slug: str
    payment_id: str
class ClubCheckoutRequest(BaseModel):
    telegram_user_id: int
    tariff_slug: str
    recurring_requested: bool = False

class FuturePlanRequest(BaseModel):
    telegram_user_id: int
    tariff_slug: str

class BuddyDecisionRequest(BaseModel):
    telegram_user_id: int
    decision: str

class ChallengeJoinRequest(BaseModel):
    telegram_user_id: int
    challenge_id: int
    mode: str = "solo"
    teammate_telegram_user_id: int | None = None

class ChallengeSubmissionRequest(BaseModel):
    telegram_user_id: int
    challenge_id: int
    submission_type: str
    payload: str

class AcquisitionTouchpointRequest(BaseModel):
    telegram_user_id: int
    source: str | None = None
    campaign: str | None = None
    payload: dict = Field(default_factory=dict)
    referrer_link_token: str | None = None

class ComplimentaryAccessRequest(BaseModel):
    telegram_user_id: int
    days: int | None = None
    lifetime: bool = False
    actor_id: int | None = None
    reason: str

class BalanceAdjustmentRequest(BaseModel):
    telegram_user_id: int
    amount: float
    actor_id: int | None = None
    reason: str

class PartnerStatusRequest(BaseModel):
    telegram_user_id: int
    enabled: bool
    actor_id: int | None = None
    reason: str

class ReferralRateRequest(BaseModel):
    telegram_user_id: int
    rate_percent: float
    actor_id: int | None = None
    reason: str

class WithdrawalRequest(BaseModel):
    telegram_user_id: int
    amount: float
    details: dict = Field(default_factory=dict)

class WithdrawalProcessRequest(BaseModel):
    withdrawal_id: int
    status: str
    actor_id: int | None = None

class RefundRequest(BaseModel):
    order_id: int
    external_amount: float
    provider_refund_id: str | None = None
    actor_id: int | None = None

class CreateChallengeRequest(BaseModel):
    title: str
    description: str
    starts_at: datetime
    deadline: datetime
    participation_mode: str = "solo"
    submission_format: str = "text"
    ai_review_enabled: bool = False

class RewardGrantRequest(BaseModel):
    telegram_user_id: int
    reward_type: str
    value: str
    title: str
    actor_id: int | None = None

class UserBlockRequest(BaseModel):
    telegram_user_id: int
    blocked: bool
    actor_id: int | None = None
    reason: str
