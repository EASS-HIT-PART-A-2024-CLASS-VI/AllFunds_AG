from google.generativeai import GenerativeModel
import google.generativeai as genai
from fastapi import HTTPException
from .config import settings
import logging

logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self, api_key: str = None):
        key = api_key or settings.GEMINI_API_KEY or ""
        
        if not key:
            raise ValueError("GEMINI_API_KEY environment variable is not set")
        
        genai.configure(api_key=key)
        self.model = GenerativeModel('gemini-1.5-pro')
        
    async def get_advice(self, user_input: str):
        try:
            logger.info(f"Generating content for input: {user_input}")
            prompt = f"{settings.ADVISOR_PROMPT}\n\nUser question: {user_input}"
            response = self.model.generate_content(prompt)
            full_response = f"{response.text}{settings.ADVISOR_DISCLAIMER}"
            logger.info(f"Generated response: {full_response}")
            return {"status": "success", "response": full_response}
        except Exception as e:
            logger.error(f"Error generating content: {str(e)}")
            raise HTTPException(status_code=500, detail=str(e))