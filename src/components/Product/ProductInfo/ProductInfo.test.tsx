import React from 'react';
import { configure, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ProductInfo } from './ProductInfo';
import product from './../../../mock/product.json';
import { arrToOptions } from 'utils/products';

describe('ProductInfo Component', () => {

  configure({
    testIdAttribute: 'data-test-id'
  });

  const { title, price, description, stickerNumbers, colors, sizes } = product;
  const mockCallback = jest.fn();

  const setup = () => render(
    <ProductInfo
      title={title}
      price={price}
      description={description}
      colors={arrToOptions(colors)}
      sizes={arrToOptions(sizes)}
      models={[]}
      stickerNumbers={arrToOptions(stickerNumbers)}
      handleAdd={mockCallback}
    />
  );

  it('should render props', () => {
    setup();
    const titleElem = screen.getByText(title);
    expect(titleElem.textContent).toBe(title);

    const descrElem = screen.getByText(description);
    expect(descrElem.textContent).toBe(description);

    const priceElem = screen.getByText(price, { exact: false });
    expect(priceElem).toBeInTheDocument();

    ['colors', 'sizes', 'stickerNumbers'].map(name => {
      const element = screen.getByTestId(name);
      expect(element).toBeInTheDocument();
    });

  });

  it('shouldn\'t redner props', () => {
    setup();
    const element = screen.queryByTestId('models');
    expect(element).not.toBeInTheDocument();
  });

  it('should call add handler', async () => {
    setup();
    fireEvent.click(screen.getByTestId('product-add'));
    await waitFor(() => {
      expect(mockCallback).toHaveBeenCalled();
    });

  });

});