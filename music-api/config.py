import os
from dotenv import load_dotenv

load_dotenv()

# Database
DATABASE_URL = os.getenv('DATABASE_URL', "sqlite:///./music.db")

# JWT Secret (change this to a secure random key in production)
SECRET_KEY = os.getenv('SECRET_KEY', "your_secret_key_here")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60 * 24

# File uploads
UPLOAD_DIR = 'uploads'
MAX_FILE_SIZE = 100 * 1024 * 1024  # 100 MB

# Admin credentials (should be moved to database/env in production)
ADMIN_USERNAME = os.getenv("ADMIN_USERNAME", "Sean")
ADMIN_PASSWORD = os.getenv("ADMIN_PASSWORD", "test")