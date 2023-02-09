import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductListItem } from './ProductListItem';
import { ProductItemType } from '../../../types/Product';
import { BrowserRouter } from 'react-router-dom';

describe('ProductListItem component', () => {

  const imageTestId = 'ProductListItemBg';

  const fakeProduct: ProductItemType = {
    id: 1,
    preview: 'imagePreviewFile.jpg',
    title: 'Product #1',
    price: 111,
    availability: true
  };

  render(<BrowserRouter><ProductListItem {...fakeProduct} /></BrowserRouter>)
  
  it('should render props', () => {
    const title = screen.getByText(fakeProduct.title);
    const price = screen.getByText(fakeProduct.price);
    const image = screen.getByTestId(imageTestId);

    expect(title.textContent).toBe(fakeProduct.title);
    expect(price.innerHTML).toBe(fakeProduct.price.toString());
    expect(image).toHaveStyle(`background-image: url(${fakeProduct.preview})`)
  });
});