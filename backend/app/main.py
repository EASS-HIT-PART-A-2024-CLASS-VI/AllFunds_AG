from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import funds, advisor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(funds.router, prefix="/funds", tags=["funds"])
app.include_router(advisor.router, prefix="/advisor", tags=["advisor"])

@app.get("/")
def read_root():
    return {"message": "Welcome to the FastAPI backend!"}