import httpx
from fastapi import HTTPException
import logging

logger = logging.getLogger(__name__)

class LLMService:
    def __init__(self):
        self.base_url = "http://llm_service:8001"
        
    async def get_advice(self, user_input: str):
        try:
            logger.info(f"Making request to LLM service with input: {user_input}")
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    f"{self.base_url}/advice",
                    json={"user_input": user_input},
                    timeout=30.0  # Add timeout
                )
                response.raise_for_status()
                
                # Log response details
                logger.info(f"Response status code: {response.status_code}")
                logger.info(f"Response headers: {response.headers}")
                
                try:
                    result = response.json()
                    logger.info(f"Parsed response: {result}")
                    return result
                except Exception as e:
                    logger.error(f"Error parsing response: {str(e)}")
                    logger.error(f"Response content: {response.content}")
                    raise
                    
        except httpx.TimeoutException:
            logger.error("Request to LLM service timed out")
            raise HTTPException(status_code=504, detail="Request timed out")
        except httpx.HTTPError as e:
            logger.error(f"HTTP error: {str(e)}")
            raise HTTPException(status_code=502, detail=str(e))
        except Exception as e:
            logger.error(f"Error in LLM service: {str(e)}")
            raise HTTPException(status_code=500, detail=str(e))