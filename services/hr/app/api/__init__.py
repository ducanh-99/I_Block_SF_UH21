from fastapi import APIRouter
from fastapi_simple_security import api_key_router
from .v1 import base_router

router = APIRouter()


router.include_router(base_router, prefix='/api')
router.include_router(api_key_router, prefix="/auth", tags=["_auth"])
