// src/components/layout/Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders without crashing', () => {
    render(<Footer />);
    // Basic test to ensure component renders
    expect(document.body).toBeInTheDocument();
  });
});