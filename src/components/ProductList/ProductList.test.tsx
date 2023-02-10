import React from 'react';
import { configure, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ProductList } from './ProductList';
import productsMock from '../../mock/products.json';

configure({
   testIdAttribute: 'data-test-id'
})

describe('ProductList Component', () => {
  const { products } = productsMock;
  const productItemTestId = 'ProductListItem'

  it('should match count of products', () => {
    render(<BrowserRouter><ProductList products={ products } /></BrowserRouter>) 
    const items = screen.getAllByTestId(productItemTestId)
    expect(products.length).toEqual(items.length)
  });

});