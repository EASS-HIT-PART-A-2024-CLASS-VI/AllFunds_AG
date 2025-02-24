// src/components/pages/FundsPage/FundsList.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import FundsList from './FundsList';

describe('FundsList Component', () => {
  test('displays loading state', () => {
    render(<FundsList loading={true} />);
    expect(screen.getByText(/טוען/i)).toBeInTheDocument();
  });
  
  test('displays error message', () => {
    render(<FundsList error="Error message" />);
    expect(screen.getByText(/Error message/i)).toBeInTheDocument();
  });
  
  test('displays empty message when no funds', () => {
    render(<FundsList funds={[]} />);
    expect(screen.getByText(/אין נתונים להצגה/i)).toBeInTheDocument();
  });
  
  test('displays simple funds array', () => {
    const mockFunds = [
      {
        id: 1,
        name: 'Fund 1',
        month_performance: '1.2%',
        last_year: '5.6%',
        last_3_years: '12.3%',
        last_5_years: '23.5%'
      },
      {
        id: 2,
        name: 'Fund 2',
        month_performance: '0.8%',
        last_year: '4.2%',
        last_3_years: '10.1%',
        last_5_years: '18.7%'
      }
    ];
    
    render(<FundsList funds={mockFunds} />);
    
    expect(screen.getByText('Fund 1')).toBeInTheDocument();
    expect(screen.getByText('Fund 2')).toBeInTheDocument();
    expect(screen.getByText('1.2%')).toBeInTheDocument();
  });
});