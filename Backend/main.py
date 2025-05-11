import json
import os
from typing import Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from post_generator import generate_post

USER_DATA_FILE = "users.json"

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class PostRequest(BaseModel):
    length: str
    language: str
    topic: str

class User(BaseModel):
    username: str
    password: str

@app.post("/register")
def register_user(user: User):
    users = load_users()

    if any(u["username"] == user.username for u in users):
        raise HTTPException(status_code=400, detail="Username already exists.")

    users.append(user.dict())
    save_users(users)
    return {"message": "User registered successfully."}

@app.post("/login")
def login_user(user: User):
    users = load_users()

    for u in users:
        if u["username"] == user.username and u["password"] == user.password:
            return {"message": "Login successful."}

    raise HTTPException(status_code=401, detail="Invalid credentials.")

@app.post("/generate")
async def generate(request: PostRequest):
    post = generate_post(request.length, request.language, request.topic)
    return {"post": post}

def load_users():
    if not os.path.exists(USER_DATA_FILE):
        return []
    with open(USER_DATA_FILE, "r") as f:
        return json.load(f)

def save_users(users):
    with open(USER_DATA_FILE, "w") as f:
        json.dump(users, f, indent=4)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
