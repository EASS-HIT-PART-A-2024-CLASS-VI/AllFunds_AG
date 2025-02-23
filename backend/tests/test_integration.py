import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_funds_endpoint_integration():
    """
    Integration test to check the complete flow of funds endpoint
    """
    # Get funds
    funds_response = client.get("/funds/")
    assert funds_response.status_code == 200
    
    # Verify response structure
    funds = funds_response.json()
    assert isinstance(funds, list)
    
    if funds:
        # Check a single fund's structure
        fund = funds[0]
        assert "id" in fund
        assert "name" in fund
        assert "month_performance" in fund
        assert "last_year" in fund
        assert "last_3_years" in fund
        assert "last_5_years" in fund

def test_advisor_endpoint_integration():
    """
    Integration test to check the complete flow of advisor endpoint
    """
    # Test advice request
    advice_request = {
        "user_input": "What is a good investment strategy?"
    }
    
    advice_response = client.post("/advisor/get-advice/", json=advice_request)
    assert advice_response.status_code == 200
    
    # Verify response structure
    advice = advice_response.json()
    assert "status" in advice
    assert "response" in advice
    assert advice["status"] == "success"
    assert len(advice["response"]) > 0

def test_fund_filter_integration():
    """
    Integration test to check fund filtering
    """
    # Test filtering by company
    filter_response = client.get("/funds/filter/?company=הראל")
    assert filter_response.status_code == 200
    
    filtered_funds = filter_response.json()
    
    # If funds are found, verify they match the filter
    for fund in filtered_funds:
        assert "הראל" in fund["name"]

def test_specific_fund_retrieval():
    """
    Integration test to retrieve a specific fund
    """
    # First, get the list of funds
    funds_response = client.get("/funds/")
    assert funds_response.status_code == 200
    
    funds = funds_response.json()
    
    if funds:
        # Try to retrieve the first fund by its index
        specific_fund_response = client.get(f"/funds/0")
        assert specific_fund_response.status_code == 200
        
        fund = specific_fund_response.json()
        assert "id" in fund
        assert "name" in fund