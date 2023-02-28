import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { CartIcon } from './CartIcon';

describe('ProductInfo Component', () => {

  const mockCallback = jest.fn();

  const count = 777;
  const total = 11012;

  const setup = () => render(
    <CartIcon
      isVisible={true}
      total={total}
      count={count}
      handleClick={mockCallback}
    />
  );

  it('should render count', () => {
    setup();
    expect(screen.getByText(count)).toBeInTheDocument();
  });

  it('should call handleclick', async () => {
    setup();
    fireEvent.click(screen.getByTestId('cartIcon'));
    await waitFor(() => {
      expect(mockCallback).toHaveBeenCalled();
    });

  });

});