import React from "react";

const FinancialProduct = ({ title, content }) => {
  return (
    <div className="financial-product">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default FinancialProduct;
