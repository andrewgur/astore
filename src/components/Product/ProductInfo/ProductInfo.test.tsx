import React from 'react';
import { configure, render, screen } from '@testing-library/react';
import { ProductInfo } from './ProductInfo';
import product from './../../../mock/product.json';
import { arrToOptions } from 'utils/products';

describe('ProductGallery Component', () => {

  configure({
    testIdAttribute: 'data-test-id'
  });

  const { title, price, description, stickerNumbers, colors, sizes } = product;

  const setup = () => render(
    <ProductInfo
      title={title}
      price={price}
      description={description}
      colors={arrToOptions(colors)}
      sizes={arrToOptions(sizes)}
      models={[]}
      stickerNumbers={arrToOptions(stickerNumbers)}
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
});