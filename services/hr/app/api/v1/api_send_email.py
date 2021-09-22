import uvicorn
from fastapi import FastAPI, BackgroundTasks, APIRouter
from app.core.send_email import send_email_background, send_email_async

router = APIRouter()


@router.get('/')
def index():
    return 'Hello World'


@router.get('/send-email/asynchronous')
async def send_email_asynchronous():
    await send_email_async('Hello World', 'ducanhhust99@gmail.com', {
        'title': 'Hello World',
        'name': 'John Doe'
    })
    return 'Success'


@router.get('/send-email/backgroundtasks')
def send_email_backgroundtasks(background_tasks: BackgroundTasks):
    send_email_background(background_tasks=background_tasks, subject='Hello World', email_to='ducanhhust99@gmail.com', body={
        'title': 'Hello World',
        'name': 'John Doe'
    })
    return 'Success'
