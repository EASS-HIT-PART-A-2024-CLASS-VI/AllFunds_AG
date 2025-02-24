// src/components/pages/FundsPage/FinancialProduct.test.js
import React from 'react';
import { render } from '@testing-library/react';
import FinancialProduct from './FinancialProduct';

describe('FinancialProduct Component', () => {
  test('renders without crashing', () => {
    // You'll need to adjust the props based on what your component expects
    const mockProps = {
      // Add required props here
    };
    
    render(<FinancialProduct {...mockProps} />);
    expect(document.body).toBeInTheDocument();
  });
});