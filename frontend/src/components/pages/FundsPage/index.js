import React, { useState } from 'react';
import { getFundsByProduct } from '../../../services/api';
import FinancialProduct from './FinancialProduct';
import FundsList from './FundsList';
import { PRODUCT_INFO } from '../../../constants/productInfo';
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const FundsPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [funds, setFunds] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [filterText, setFilterText] = useState('');

  const handleProductSelect = async (productName) => {
    setLoading(true);
    setError('');
    try {
      const data = await getFundsByProduct(productName);
      setFunds(data);
      setSelectedProduct(productName);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredFunds = Array.isArray(funds) 
    ? funds.filter(fund => fund.name.toLowerCase().includes(filterText.toLowerCase()))
    : funds;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="product-buttons">
        {Object.keys(PRODUCT_INFO).map(product => (
          <button
            key={product}
            className="info-button"
            onClick={() => handleProductSelect(product)}
          >
            {product}
          </button>
        ))}
      </div>

      {selectedProduct && (
        <>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <input
              type="text"
              placeholder="חפש לפי שם חברה"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              style={{ padding: "10px", width: "300px", fontSize: "1rem" }}
              className="search-input"
            />
          </div>
          <FinancialProduct
            title={selectedProduct}
            content={PRODUCT_INFO[selectedProduct]}
          />
          <FundsList
            funds={filteredFunds}
            error={error}
            loading={loading}
          />
        </>
      )}
    </motion.div>
  );
};

export default FundsPage;