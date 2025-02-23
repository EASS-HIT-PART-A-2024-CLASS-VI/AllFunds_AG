import pytest
from unittest.mock import patch, MagicMock
from app.services.fund_service import FundService
from app.config.settings import settings

def test_get_funds():
    # Create a sample funds list for testing
    sample_funds = [
        {
            "id": 1,
            "name": "Test Fund 1",
            "month_performance": "Test Month: 5%",
            "last_year": "10%",
            "last_3_years": "25%",
            "last_5_years": "40%"
        }
    ]

    # Mock the ScraperService
    with patch('app.services.fund_service.ScraperService') as MockScraperService:
        # Configure the mock to return sample funds
        mock_scraper_instance = MagicMock()
        mock_scraper_instance.scrape_funds.return_value = sample_funds
        MockScraperService.return_value = mock_scraper_instance

        # Temporarily modify settings for testing
        original_urls = settings.PRODUCT_URLS
        try:
            settings.PRODUCT_URLS = {"קרנות השתלמות": "test_url"}

            # Create FundService instance
            fund_service = FundService()

            # Get funds
            funds = fund_service.get_funds("קרנות השתלמות")

            # Assertions
            assert len(funds) == 1
            assert funds[0]['name'] == "Test Fund 1"
            mock_scraper_instance.scrape_funds.assert_called_once_with("test_url")
        finally:
            # Restore original settings
            settings.PRODUCT_URLS = original_urls

def test_get_fund_by_index():
    # Create a sample funds list for testing
    sample_funds = [
        {
            "id": 0,
            "name": "Test Fund 1",
            "month_performance": "Test Month: 5%",
            "last_year": "10%",
            "last_3_years": "25%",
            "last_5_years": "40%"
        },
        {
            "id": 1,
            "name": "Test Fund 2",
            "month_performance": "Test Month: 6%",
            "last_year": "12%",
            "last_3_years": "30%",
            "last_5_years": "45%"
        }
    ]

    # Mock the get_funds method to return sample funds
    with patch('app.services.fund_service.FundService.get_funds', return_value=sample_funds):
        fund_service = FundService()

        # Test valid index
        fund = fund_service.get_fund_by_index(1)
        assert fund['name'] == "Test Fund 2"

        # Test out of range index
        fund = fund_service.get_fund_by_index(5)
        assert fund == {"error": "Fund not found"}

def test_filter_funds():
    # Create a sample funds list for testing
    sample_funds = [
        {
            "id": 0,
            "name": "Harel Investment Fund",
            "month_performance": "Test Month: 5%",
            "last_year": "10%",
            "last_3_years": "25%",
            "last_5_years": "40%"
        },
        {
            "id": 1,
            "name": "Migdal Pension Fund",
            "month_performance": "Test Month: 6%",
            "last_year": "12%",
            "last_3_years": "30%",
            "last_5_years": "45%"
        }
    ]

    # Mock the get_funds method to return sample funds
    with patch('app.services.fund_service.FundService.get_funds', return_value=sample_funds):
        fund_service = FundService()

        # Test filtering by company
        harel_funds = fund_service.filter_funds(company="Harel")
        assert len(harel_funds) == 1
        assert harel_funds[0]['name'] == "Harel Investment Fund"

        # Test filtering by product type
        # Note: Adjust this test based on how your actual filtering works
        product_funds = fund_service.filter_funds(product_type="Investment")
        assert len(product_funds) == 1
        assert product_funds[0]['name'] == "Harel Investment Fund"