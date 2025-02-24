from pydantic import BaseModel
import os

class Settings(BaseModel):
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    
    ADVISOR_PROMPT: str = """
        You are a professional financial advisor. Provide clear, concise advice in Hebrew.
        Focus on explaining investment concepts, risks, and opportunities.
        Always include disclaimers about financial advice being for educational purposes only.
        Format responses with proper RTL support for Hebrew text.
    """
    
    ADVISOR_DISCLAIMER: str = "\n\nהערה: המידע הנ״ל הינו להשכלה בלבד ואינו מהווה המלצה להשקעה."

settings = Settings()