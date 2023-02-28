import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CartItem } from './CartItem';
import { TITLE_MODELS } from 'constants/product';
import product from 'mock/cartitem.json';

describe('CartItem Component', () => {

  const mockRemove = jest.fn();
  const mockCountChange = jest.fn();

  const setup = () => render(
    <CartItem
      product={product}
      onCountChange={mockCountChange}
      onRemove={mockRemove}
    />
  );

  it('should render props', () => {
    setup();
    expect(screen.getByText(product.title).textContent).toBe(product.title);

    const image = screen.getByTestId('CartIcon-image');
    expect(image).toHaveStyle(`background-image: url(${product.preview})`);

    expect(screen.getByText(product.stickerNumbers, { exact: false }).textContent).toBeTruthy();
    expect(screen.getByText(product.colors, { exact: false }).textContent).toBeTruthy();
    expect(screen.getByText(product.sizes, { exact: false }).textContent).toBeTruthy();
  });

  it('shouldn\'t render props', () => {
    setup();
    expect(screen.queryByText(TITLE_MODELS, { exact: false })?.textContent).toBeFalsy();
  });

  it('should call remove handler', async () => {
    setup();
    fireEvent.click(screen.getByTestId('CartItem-remove'));
    await waitFor(() => {
      expect(mockRemove).toHaveBeenCalled();
    });
  });
});