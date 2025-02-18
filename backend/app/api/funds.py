from fastapi import APIRouter, Query
from typing import List
from pydantic import BaseModel
from ..services.fund_service import FundService

class Fund(BaseModel):
    id: int
    name: str
    month_performance: str
    last_year: str
    last_3_years: str
    last_5_years: str

router = APIRouter()
fund_service = FundService()

@router.get("/", response_model=List[Fund])
def get_funds(product_type: str = Query("קרנות השתלמות")):
    return fund_service.get_funds(product_type)

@router.get("/product", response_model=List[Fund])
def get_funds_by_product(url: str = Query(...)):
    return fund_service.get_funds_by_url(url)

@router.get("/{index}", response_model=Fund)
def get_fund_by_index(index: int):
    return fund_service.get_fund_by_index(index)

@router.get("/filter/")
def filter_funds(company: str = None, product_type: str = None):
    return fund_service.filter_funds(company, product_type)