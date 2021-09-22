from fastapi_simple_security import api_key_security
from app.schemas.sche_payment import PaymentRequest
from fastapi import APIRouter, Depends

router = APIRouter()

@router.post("/payment", dependencies=[Depends(api_key_security)])
def payment(payment_request: PaymentRequest):
    pass

@router.post("/change-payment-date")
def change_payment_date():
    pass