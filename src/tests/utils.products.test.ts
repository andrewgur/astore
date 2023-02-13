import React from 'react';
import { getImagesArr } from '../utils/products';

describe('Utils products', () => {
  const images = [
    '1.jpg', '2.jpg', '3.jpg'
  ];
  const expectedResult = [
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

  it('getImagesArr should match result array', () => {
    const result = getImagesArr(images);
    expect(result).toEqual(expectedResult);
  });
});