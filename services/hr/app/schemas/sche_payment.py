from typing import List
from pydantic import BaseModel
from datetime import date

class Staff(BaseModel):
    name: str
    payment_method: str
    account_number: str

class PaymentRequest(BaseModel):
    staff: List[Staff]
    payment_day: date
    sender_payment_method: str
    sender_account_number: str

