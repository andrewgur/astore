import React from 'react';
import { render } from '@testing-library/react';
import { ProductGallery } from './ProductGallery';

describe('ProductGallery Component', () => {
  const images = [
    {
      original: '1.jpg',
      thumbnail: '1.jpg'
    },
    {
      original: '2.jpg',
      thumbnail: '2.jpg'
    },
    {
      original: '3.jpg',
      thumbnail: '3.jpg'
    }
  ];

  it('should match snapshot', () => {
    const { container } = render(<ProductGallery images={images} />);
    expect(container).toMatchSnapshot();
  });
});