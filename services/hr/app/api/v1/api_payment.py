from app.schemas.sche_payment import PaymentRequest
from fastapi import APIRouter

router = APIRouter()

@router.post("/payment")
def payment(payment_request: PaymentRequest):
    pass

@router.post("/change-payment-date")
def change_payment_date():
    pass