from fastapi import APIRouter
from .api_hr import router


router = APIRouter()

router.include_router(router, prefix='/api')
