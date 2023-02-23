import { render, screen } from '@testing-library/react';
import ErrorBoundary from './ErrorBoundary';
import '@testing-library/jest-dom';

describe('ErrorBoundary', () => {

  it('should render visible error', () => {
    const ThrowError = () => {
      throw new Error('mock Error');
    };

    render(
      <ErrorBoundary>
        <ThrowError />
      </ErrorBoundary>
    );

    expect(screen.getByTestId('errorboundary')).toBeVisible();
  });
});