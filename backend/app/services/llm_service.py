from google.generativeai import GenerativeModel
import google.generativeai as genai
from fastapi import HTTPException
from ..config.settings import settings

class LLMService:
    def __init__(self, api_key: str = None):
        # Use provided key, or fall back to settings, or use an empty string for testing
        key = api_key or settings.GEMINI_API_KEY or ""
        
        # Skip API configuration during testing
        if not key:
            self.model = None
            return

        if not key:
            raise ValueError("GEMINI_API_KEY environment variable is not set")
        
        genai.configure(api_key=key)
        self.model = GenerativeModel('gemini-1.5-pro')
        
    async def get_advice(self, user_input: str):
        # Skip actual API call during testing
        if not self.model:
            return {
                "status": "success", 
                "response": "Mocked advice for testing"
            }
        
        try:
            prompt = f"{settings.ADVISOR_PROMPT}\n\nUser question: {user_input}"
            response = self.model.generate_content(prompt)
            full_response = f"{response.text}{settings.ADVISOR_DISCLAIMER}"
            return {"status": "success", "response": full_response}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))