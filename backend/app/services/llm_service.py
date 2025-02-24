import httpx
from fastapi import HTTPException
import logging
import os

logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self):
        # Get LLM service URL from environment variable or use default
        self.base_url = os.getenv("LLM_SERVICE_URL", "http://llm_service:8001")
        
    async def get_advice(self, user_input: str):
        # Check if we're in a testing environment - return mock response immediately
        if os.getenv("TESTING") == "TRUE":
            logger.info("In testing mode - returning mock response")
            return {
                "status": "success",
                "response": "This is a test response from the LLM service."
            }
        
        try:
            logger.info(f"Making request to LLM service with input: {user_input}")
            
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    f"{self.base_url}/advice",
                    json={"user_input": user_input},
                    timeout=30.0
                )
                response.raise_for_status()
                
                # Log response details
                logger.info(f"Response status code: {response.status_code}")
                
                try:
                    result = response.json()
                    logger.info(f"Parsed response: {result}")
                    return result
                except Exception as e:
                    logger.error(f"Error parsing response: {str(e)}")
                    logger.error(f"Response content: {response.content}")
                    raise HTTPException(
                        status_code=500, 
                        detail="Failed to parse LLM service response"
                    )
                    
        except httpx.TimeoutException:
            logger.error("Request to LLM service timed out")
            return {
                "status": "error",
                "response": "Service is currently unavailable. Please try again later."
            }
        except httpx.HTTPError as e:
            logger.error(f"HTTP error: {str(e)}")
            return {
                "status": "error",
                "response": "Unable to get investment advice at this time. Please try again later."
            }
        except Exception as e:
            logger.error(f"Error in LLM service: {str(e)}")
            return {
                "status": "error",
                "response": "An unexpected error occurred. Please try again later."
            }