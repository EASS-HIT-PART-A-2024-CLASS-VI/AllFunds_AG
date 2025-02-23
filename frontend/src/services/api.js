// src/services/api.js
const BASE_URL = "http://localhost:8000";

const PRODUCT_URLS = {
  "קרנות השתלמות": "https://www.mygemel.net/קרנות-השתלמות",
  "קופות גמל": "https://www.mygemel.net/קופות-גמל",
  "קופות גמל להשקעה": "https://www.mygemel.net/קופת-גמל-להשקעה",
  "פוליסות חיסכון": "https://www.mygemel.net/פוליסות-חיסכון",
  "קרנות פנסיה": "https://www.mygemel.net/פנסיה"  
};

export const getFundsByProduct = async (productName) => {
  try {
    const productUrl = PRODUCT_URLS[productName];
    if (!productUrl) {
      throw new Error("Invalid product name");
    }

    const encodedUrl = encodeURIComponent(productUrl);
    const response = await fetch(`${BASE_URL}/funds/product?url=${encodedUrl}`);

    if (!response.ok) {
      throw new Error("Failed to fetch funds for the selected product");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching funds:", error);
    throw error;
  }
};

export const getAdvice = async (userInput) => {
  try {
    const response = await fetch(`${BASE_URL}/advisor/get-advice/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_input: userInput }),
    });

    if (!response.ok) {
      throw new Error("Failed to get advice");
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting advice:", error);
    throw error;
  }
};