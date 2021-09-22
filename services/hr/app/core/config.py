import json
import os

from dotenv import load_dotenv
from pydantic import BaseSettings

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../'))
load_dotenv(os.path.join(BASE_DIR, '.env'))


class Settings(BaseSettings):
    PROJECT_NAME = os.getenv('PROJECT_NAME', '')
    DEBUG = os.getenv('DEBUG', True)
    SECRET_KEY = os.getenv('SECRET_KEY', '')
    BACKEND_CORS_ORIGINS = ['*']
    # DATABASE_URL = os.getenv('SQL_DATABASE_URL', '')
    ACCESS_TOKEN_EXPIRE_SECONDS: int = 60 * 60 * 24 * 7  # Token expired after 7 days
    SECURITY_ALGORITHM = 'HS256'
    LOGGING_CONFIG_FILE = os.path.join(BASE_DIR, 'logging.ini')

    TEKO_SERVICE_TOKEN = os.getenv('TEKO_SERVICE_TOKEN', '')
    DIGI_SERVICE_TOKEN = os.getenv('DIGI_SERVICE_TOKEN', '')

    MINIO_URL = os.getenv('MINIO_URL', '')
    MINIO_ACCESS_KEY = os.getenv('MINIO_ACCESS_KEY', '')
    MINIO_SECRET_KEY = os.getenv('MINIO_SECRET_KEY', '')
    MINIO_BUCKET_NAME = os.getenv('MINIO_BUCKET_NAME', '')

    IAM_SERVICE_URL = os.getenv('IAM_SERVICE_URL', '')

    SALE_MANAGER_ID = int(os.getenv('SALE_MANAGER_ID', ''))
    SALE_ADMIN_ID = int(os.getenv('SALE_ADMIN_ID', ''))
    SALE_LEADER_ID = int(os.getenv('SALE_LEADER_ID', ''))
    SALE_ID = int(os.getenv('SALE_ID', ''))

    DEPLOYMENT_ENVIRONEMT = (os.getenv('DEPLOYMENT_ENVIRONEMT', ''))
    if DEPLOYMENT_ENVIRONEMT == 'teko':
        GOOGLE_BUCKET_NAME = os.getenv('GOOGLE_BUCKET_NAME', '')
        # os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.getenv('PATH_GOOGLE_APPLICATION_CREDENTIALS', '')
        GOOGLE_APPLICATION_CREDENTIALS_CONTENT = json.loads(os.getenv('GOOGLE_APPLICATION_CREDENTIALS_CONTENT', ''))

    LIST_EMAIL_TRUST = os.getenv('LIST_EMAIL_TRUST', '')
    FASTAPI_SIMPLE_SECURITY_SECRET = os.getenv('FASTAPI_SIMPLE_SECURITY_SECRET')
    
    MAIL_USERNAME = os.getenv('MAIL_USERNAME')
    MAIL_PASSWORD = os.getenv('MAIL_PASSWORD')
    MAIL_FROM = os.getenv('MAIL_FROM')
    MAIL_PORT = int(os.getenv('MAIL_PORT'))
    MAIL_SERVER = os.getenv('MAIL_SERVER')
    MAIL_FROM_NAME = os.getenv('MAIL_FROM_NAME')
    MAIL_TLS=True,
    MAIL_SSL=False,
    USE_CREDENTIALS=True,


settings = Settings()
