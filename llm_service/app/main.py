from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from .service import LLMService
from .config import settings
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()
llm_service = LLMService()

class AdviceRequest(BaseModel):
    user_input: str

@app.post("/advice")
async def get_advice(request: AdviceRequest):
    try:
        logger.info(f"LLM Service received request: {request.user_input}")
        result = await llm_service.get_advice(request.user_input)
        logger.info(f"LLM Service sending response: {result}")
        return result
    except Exception as e:
        logger.error(f"LLM Service error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/health")
async def health_check():
    return {"status": "healthy"}