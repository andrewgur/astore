import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProductInfo } from './ProductInfo';
import product from './../../../mock/product.json';

describe('ProductGallery Component', () => {

  const { title, price, description, stickerNumbers, colors, sizes } = product;

  const setup = () => render(
    <ProductInfo
      title={title}
      price={price}
      description={description}
      colors={colors}
      sizes={sizes}
      models={[]}
      stickerNumbers={stickerNumbers}
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
      const element = screen.getByRole('combobox', { name: name });
      expect(element).toBeInTheDocument();
    });

  });

  it('shouldn\'t redner props', () => {
    setup();
    const element = screen.queryByRole('combobox', { name: 'models' });
    expect(element).not.toBeInTheDocument();
  });
});