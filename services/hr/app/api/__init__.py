from fastapi import APIRouter
from .v1 import base_router

router = APIRouter()


router.include_router(base_router, prefix='/api')
