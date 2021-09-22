from typing import List, Optional
from pydantic import BaseModel, EmailStr
from datetime import date

class Staff(BaseModel):
    name: str
    payment_method: str
    account_number: str
    email: Optional[EmailStr]

class PaymentRequest(BaseModel):
    staff: List[Staff]
    payment_day: date
    sender_payment_method: str
    sender_account_number: str

