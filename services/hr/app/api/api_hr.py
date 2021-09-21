from fastapi import APIRouter

router = APIRouter()

@router.post("/payment")
def payment():
    pass