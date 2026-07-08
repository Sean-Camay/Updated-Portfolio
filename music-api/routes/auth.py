from fastapi import APIRouter, HTTPException, status
from datetime import timedelta
from schemas import LoginRequest, TokenResponse
from auth import hash_password, verify_password, create_access_token
from config import ADMIN_USERNAME, ADMIN_PASSWORD, ACCESS_TOKEN_EXPIRE_MINUTES

router = APIRouter()

@router.post("/login", response_model=TokenResponse)
async def login(credentials: LoginRequest):
    """
    Admin login endpoint
    Returns JWT token for subsequent admin requests
    """
    # In production, validate against database
    if credentials.username != ADMIN_USERNAME:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
    # For demo: compare plain password (in production use hashed passwords)
    if credentials.password != ADMIN_PASSWORD:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials"
        )
    
    # Create JWT token
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        data={"sub": "admin"},
        expires_delta=access_token_expires
    )
    
    return {"access_token": access_token, "token_type": "bearer"}