from app import api
from fastapi import APIRouter
from .api_payment import router

base_router = APIRouter()

base_router.include_router(router=router)
