# backend/tests/conftest.py
import pytest
import os
from unittest.mock import AsyncMock, patch
from fastapi.testclient import TestClient
from app.main import app

# Set testing environment variable globally for all tests
os.environ["TESTING"] = "TRUE"

def pytest_configure(config):
    config.addinivalue_line(
        "markers", "asyncio: mark a test as an asyncio coroutine"
    )

@pytest.fixture
def client():
    return TestClient(app)

# This fixture isn't strictly necessary anymore since we're using the TESTING env var
# But keeping it for redundancy
@pytest.fixture(autouse=True)
def mock_llm_service():
    """
    Mock the LLM service for all tests to prevent actual API calls.
    This fixture is automatically used in all tests.
    """
    mock_response = {
        "status": "success",
        "response": "This is a mocked response from the LLM service for testing purposes."
    }
    
    with patch('app.services.llm_service.LLMService.get_advice', new_callable=AsyncMock) as mock_get:
        mock_get.return_value = mock_response
        yield mock_get