// src/components/layout/Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

// Mock BackgroundMusic component
jest.mock('./BackgroundMusic', () => {
  return function MockBackgroundMusic() {
    return <div data-testid="background-music">Background Music</div>;
  };
});

describe('Navbar Component', () => {
  const mockSetActiveTab = jest.fn();
  
  beforeEach(() => {
    mockSetActiveTab.mockClear();
  });
  
  test('renders all navigation buttons', () => {
    render(<Navbar activeTab="home" setActiveTab={mockSetActiveTab} />);
    
    // Check if all buttons are rendered
    expect(screen.getByText(/בית/i)).toBeInTheDocument();
    expect(screen.getByText(/רשימת קרנות/i)).toBeInTheDocument();
    expect(screen.getByText(/השוואה/i)).toBeInTheDocument();
    expect(screen.getByText(/ניהול עצמאי/i)).toBeInTheDocument();
    expect(screen.getByText(/יועץ קרנות AI/i)).toBeInTheDocument();
    expect(screen.getByText(/הכירו אותי/i)).toBeInTheDocument();
  });
  
  test('clicking a button calls setActiveTab with correct value', () => {
    render(<Navbar activeTab="home" setActiveTab={mockSetActiveTab} />);
    
    // Click on a button and check if setActiveTab is called with correct value
    fireEvent.click(screen.getByText(/רשימת קרנות/i));
    expect(mockSetActiveTab).toHaveBeenCalledWith('funds');
    
    fireEvent.click(screen.getByText(/השוואה/i));
    expect(mockSetActiveTab).toHaveBeenCalledWith('comparison');
  });
  
  test('background music component is rendered', () => {
    render(<Navbar activeTab="home" setActiveTab={mockSetActiveTab} />);
    expect(screen.getByTestId('background-music')).toBeInTheDocument();
  });
});