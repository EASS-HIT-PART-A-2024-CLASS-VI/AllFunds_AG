from google.generativeai import GenerativeModel
import google.generativeai as genai
from fastapi import HTTPException
from ..config.settings import settings

class LLMService:
    def __init__(self):
        if not settings.GEMINI_API_KEY:
            raise ValueError("GEMINI_API_KEY environment variable is not set")
        genai.configure(api_key=settings.GEMINI_API_KEY)
        self.model = GenerativeModel('gemini-1.5-pro')
        
    async def get_advice(self, user_input: str):
        try:
            prompt = f"{settings.ADVISOR_PROMPT}\n\nUser question: {user_input}"
            response = self.model.generate_content(prompt)
            full_response = f"{response.text}{settings.ADVISOR_DISCLAIMER}"
            return {"status": "success", "response": full_response}
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))