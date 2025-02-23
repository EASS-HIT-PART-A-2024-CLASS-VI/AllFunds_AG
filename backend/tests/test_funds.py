import pytest
from fastapi.testclient import TestClient
from unittest.mock import patch
from app.main import app

client = TestClient(app)

def test_get_funds():
    # Mock the FundService to return sample data
    with patch('app.api.funds.fund_service') as mock_fund_service:
        # Prepare sample funds data
        mock_funds = [
            {
                "id": 1,
                "name": "Test Fund 1",
                "month_performance": "Test Month: 5%",
                "last_year": "10%",
                "last_3_years": "25%",
                "last_5_years": "40%"
            }
        ]
        mock_fund_service.get_funds.return_value = mock_funds

        # Send GET request
        response = client.get("/funds/")

        # Assertions
        assert response.status_code == 200
        assert len(response.json()) == 1
        assert response.json()[0]['name'] == "Test Fund 1"

def test_get_fund_by_index():
    # Mock the FundService to return sample data
    with patch('app.api.funds.fund_service') as mock_fund_service:
        # Prepare sample funds data
        mock_funds = [
            {
                "id": 0,
                "name": "Test Fund 1",
                "month_performance": "Test Month: 5%",
                "last_year": "10%",
                "last_3_years": "25%",
                "last_5_years": "40%"
            }
        ]
        mock_fund_service.get_fund_by_index.return_value = mock_funds[0]

        # Send GET request for a specific fund
        response = client.get("/funds/0")

        # Assertions
        assert response.status_code == 200
        assert response.json()['name'] == "Test Fund 1"

def test_filter_funds():
    # Mock the FundService to return sample data
    with patch('app.api.funds.fund_service') as mock_fund_service:
        # Prepare sample funds data
        mock_funds = [
            {
                "id": 1,
                "name": "Harel Investment Fund",
                "month_performance": "Test Month: 5%",
                "last_year": "10%",
                "last_3_years": "25%",
                "last_5_years": "40%"
            }
        ]
        mock_fund_service.filter_funds.return_value = mock_funds

        # Send GET request with filter parameters
        response = client.get("/funds/filter/?company=Harel")

        # Assertions
        assert response.status_code == 200
        assert len(response.json()) == 1
        assert response.json()[0]['name'] == "Harel Investment Fund"