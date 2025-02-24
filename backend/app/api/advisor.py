from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
import logging
from app.services.llm_service import LLMService
from app.config.settings import settings

router = APIRouter()
logger = logging.getLogger(__name__)

# Initialize the LLM service
llm_service = LLMService()

class AdviceRequest(BaseModel):
    user_input: str

@router.post("/get-advice/")
async def get_advice(request: AdviceRequest):
    """
    Get investment advice based on user input using LLM service
    """
    try:
        # Add disclaimer to prompt if configured
        input_with_context = f"{settings.ADVISOR_PROMPT}\n\nUser question: {request.user_input}"
        
        # Get advice from LLM service
        response = await llm_service.get_advice(input_with_context)
        
        # If the response has an error status, log it but still return to the client
        if response.get("status") == "error":
            logger.warning(f"LLM service returned error: {response.get('response')}")
        
        # Add disclaimer to response if configured
        if settings.ADVISOR_DISCLAIMER and response.get("status") == "success":
            response["response"] += settings.ADVISOR_DISCLAIMER
            
        return response
    except Exception as e:
        logger.error(f"Error in get_advice: {e}")
        # Return a user-friendly error
        return {
            "status": "error",
            "response": "Unable to get investment advice at this time. Please try again later."
        }