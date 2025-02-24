from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from ..services.llm_service import LLMService
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class AdviceRequest(BaseModel):
    user_input: str

router = APIRouter()
llm_service = LLMService()

@router.post("/get-advice/")
async def get_advice(request: AdviceRequest):
    try:
        logger.info(f"Received request with input: {request.user_input}")
        response = await llm_service.get_advice(request.user_input)
        logger.info(f"Got response from LLM service: {response}")
        return response
    except Exception as e:
        logger.error(f"Error in get_advice: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))