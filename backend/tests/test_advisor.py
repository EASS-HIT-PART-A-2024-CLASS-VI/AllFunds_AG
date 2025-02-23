import pytest
import pytest_asyncio
from unittest.mock import AsyncMock, patch
from app.api.advisor import AdviceRequest, get_advice

@pytest.mark.asyncio
async def test_get_advice():
    # Mock the LLMService to avoid actual API calls
    with patch('app.api.advisor.llm_service') as mock_llm_service:
        # Setup mock return value
        mock_llm_service.get_advice = AsyncMock(return_value={
            "status": "success", 
            "response": "Test advice response"
        })

        # Create a test request
        request = AdviceRequest(user_input="What is a good investment strategy?")

        # Call the endpoint
        response = await get_advice(request)

        # Assertions
        assert response['status'] == 'success'
        assert 'response' in response
        assert mock_llm_service.get_advice.called

@pytest.mark.asyncio
async def test_get_advice_empty_input():
    # Test with empty input
    with patch('app.api.advisor.llm_service') as mock_llm_service:
        mock_llm_service.get_advice = AsyncMock(return_value={
            "status": "success", 
            "response": "Please provide a more specific question."
        })

        request = AdviceRequest(user_input="")
        response = await get_advice(request)

        assert response['status'] == 'success'
        assert mock_llm_service.get_advice.called