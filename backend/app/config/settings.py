from pydantic import BaseModel
from typing import Dict
import os

class Settings(BaseModel):
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    
    PRODUCT_URLS: Dict[str, str] = {
        "קרנות השתלמות": "https://www.mygemel.net/קרנות-השתלמות",
        "קופות גמל": "https://www.mygemel.net/קופות-גמל",
        "קופות גמל להשקעה": "https://www.mygemel.net/קופת-גמל-להשקעה",
        "פוליסות חיסכון": "https://www.mygemel.net/פוליסות-חיסכון",
        "קרנות פנסיה": "https://www.mygemel.net/פנסיה"
    }
    
    ADVISOR_PROMPT: str = """
        You are a professional financial advisor. Provide clear, concise advice in Hebrew.
        Focus on explaining investment concepts, risks, and opportunities.
        Always include disclaimers about financial advice being for educational purposes only.
        Format responses with proper RTL support for Hebrew text.
    """
    
    ADVISOR_DISCLAIMER: str = "\n\nהערה: המידע הנ״ל הינו להשכלה בלבד ואינו מהווה המלצה להשקעה."

settings = Settings()