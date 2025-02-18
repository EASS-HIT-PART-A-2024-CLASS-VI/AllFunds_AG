from ..config.settings import settings
from .scraper_service import ScraperService

class FundService:
    def __init__(self):
        self.scraper = ScraperService()
        
    def get_funds(self, product_type: str):
        url = settings.PRODUCT_URLS.get(product_type, settings.PRODUCT_URLS["קרנות השתלמות"])
        return self.scraper.scrape_funds(url)
        
    def get_funds_by_url(self, url: str):
        return self.scraper.scrape_funds(url)
        
    def get_fund_by_index(self, index: int):
        funds = self.get_funds("קרנות השתלמות")
        if 0 <= index < len(funds):
            return funds[index]
        return {"error": "Fund not found"}
        
    def filter_funds(self, company: str = None, product_type: str = None):
        funds = self.get_funds("קרנות השתלמות")
        if company:
            funds = [fund for fund in funds if company in fund['name']]
        if product_type:
            funds = [fund for fund in funds if product_type in fund['name']]
        return funds
