from app import api
from fastapi import APIRouter
from .api_payment import router
from .api_send_email import router as send_email_router

base_router = APIRouter()

base_router.include_router(router=router)
base_router.include_router(router=send_email_router, prefix="/email")
