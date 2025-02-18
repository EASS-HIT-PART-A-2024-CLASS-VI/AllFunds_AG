import requests
from bs4 import BeautifulSoup
import datetime
from fastapi import HTTPException

class ScraperService:
    @staticmethod
    def get_month_name_two_months_ago():
        hebrew_months = {
            "January": "ינואר", "February": "פברואר", "March": "מרץ",
            "April": "אפריל", "May": "מאי", "June": "יוני",
            "July": "יולי", "August": "אוגוסט", "September": "ספטמבר",
            "October": "אוקטובר", "November": "נובמבר", "December": "דצמבר"
        }
        today = datetime.date.today()
        two_months_ago = today - datetime.timedelta(days=60)
        month_name = two_months_ago.strftime("%B")
        return hebrew_months.get(month_name, month_name)

    def scrape_funds(self, url: str):
        try:
            response = requests.get(url)
            if response.status_code != 200:
                raise HTTPException(status_code=response.status_code, 
                                  detail=f"Failed to fetch data from {url}")

            soup = BeautifulSoup(response.content, "html.parser")
            month_name = self.get_month_name_two_months_ago()
            
            funds = []
            rows = soup.find_all("tr")
            for i, row in enumerate(rows[1:], start=1):
                cols = row.find_all("td")
                if len(cols) >= 5:
                    funds.append({
                        "id": i,
                        "name": cols[0].text.strip(),
                        "month_performance": f"{month_name}: {cols[1].text.strip()}",
                        "last_year": cols[2].text.strip(),
                        "last_3_years": cols[3].text.strip(),
                        "last_5_years": cols[4].text.strip()
                    })
            return funds
        except Exception as e:
            raise HTTPException(status_code=500, detail=str(e))