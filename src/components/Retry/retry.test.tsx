import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { Retry } from './Retry';

describe('GroupItem component', () => {
  it('should call handler', () => {
    const mockCallback = jest.fn();
    render(<Retry retryHandler={mockCallback} />);

    fireEvent.click(screen.getByTestId('retry-button'));
    expect(mockCallback).toHaveBeenCalled();
  });
});