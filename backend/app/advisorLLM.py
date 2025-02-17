from google.generativeai import GenerativeModel
import google.generativeai as genai
import os
from typing import Dict, Any
from fastapi import HTTPException

# Initialize Gemini API
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
if not GEMINI_API_KEY:
    raise ValueError("GEMINI_API_KEY environment variable is not set")

genai.configure(api_key=GEMINI_API_KEY)

class AdvisorLLM:
    def __init__(self):
        self.model = GenerativeModel('gemini-1.5-pro')
        self.context = """
        You are a professional financial advisor. Provide clear, concise advice in Hebrew.
        Focus on explaining investment concepts, risks, and opportunities.
        Always include disclaimers about financial advice being for educational purposes only.
        Format responses with proper RTL support for Hebrew text.
        """

    async def get_financial_advice(self, user_input: str) -> Dict[str, Any]:
        try:
            # Combine context with user input
            prompt = f"{self.context}\n\nUser question: {user_input}"
            
            # Generate response
            response = self.model.generate_content(prompt)
            
            # Format the response
            advice = response.text
            
            # Add disclaimer
            disclaimer = "\n\nהערה: המידע הנ״ל הינו להשכלה בלבד ואינו מהווה המלצה להשקעה."
            full_response = f"{advice}{disclaimer}"
            
            return {
                "status": "success",
                "response": full_response
            }
        except Exception as e:
            raise HTTPException(
                status_code=500,
                detail=f"Error generating advice: {str(e)}"
            )

advisor = AdvisorLLM()