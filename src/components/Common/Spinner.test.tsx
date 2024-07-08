import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  test('renders the spinner element', () => {
    const { getByTestId } = render(<Spinner />);
    const spinnerElement = getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});