from fastapi import APIRouter
from pydantic import BaseModel
from ..services.llm_service import LLMService

class AdviceRequest(BaseModel):
    user_input: str

router = APIRouter()
llm_service = LLMService()

@router.post("/get-advice/")
async def get_advice(request: AdviceRequest):
    return await llm_service.get_advice(request.user_input)