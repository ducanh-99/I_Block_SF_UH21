from app.schemas.sche_base import DataResponse
from app.services.payment_srv import PaymentSrv
from fastapi_simple_security import api_key_security
from app.schemas.sche_payment import PaymentRequest
from fastapi import APIRouter, Depends, BackgroundTasks
from datetime import date 

router = APIRouter()

@router.post("/payment-setup", dependencies=[Depends(api_key_security)])
def payment(payment_request: PaymentRequest, background_tasks: BackgroundTasks):
    payment_srv = PaymentSrv()
    payment_srv.payment(background_tasks=background_tasks, payment_request=payment_request)
    return DataResponse().success_response(data=None)



@router.post("/change-payment-date", dependencies=[Depends(api_key_security)])
def change_payment_date(background_tasks: BackgroundTasks, payment_date: date):
    payment_srv = PaymentSrv()
    payment_srv.change(background_tasks=background_tasks, payment_date=payment_date)
    return DataResponse().success_response(data=None)