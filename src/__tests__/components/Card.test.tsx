/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '@/components/Card';

// This is a sample test file.
// A full test setup (Jest, React Testing Library) is required to run this.

describe('Card Component', () => {

  it('should render its children correctly', () => {
    const testMessage = 'This is a test child';
    render(
      <Card>
        <p>{testMessage}</p>
      </Card>
    );

    // Check if the text content is present in the document
    const childElement = screen.getByText(testMessage);
    expect(childElement).toBeInTheDocument();
  });

  it('should apply additional className props', () => {
    const customClass = 'my-custom-class';
    render(<Card className={customClass}><div data-testid="card-child"></div></Card>);

    // The Card itself is a div, we can get it by its child's parent
    const cardElement = screen.getByTestId('card-child').parentElement;
    expect(cardElement).toHaveClass(customClass);
  });

  it('should have cursor-pointer class when onClick is provided', () => {
    const handleClick = jest.fn(); // Mock function
    render(<Card onClick={handleClick}><div data-testid="card-child"></div></Card>);

    const cardElement = screen.getByTestId('card-child').parentElement;
    expect(cardElement).toHaveClass('cursor-pointer');
  });

  it('should not have cursor-pointer class when onClick is not provided', () => {
    render(<Card><div data-testid="card-child"></div></Card>);

    const cardElement = screen.getByTestId('card-child').parentElement;
    expect(cardElement).not.toHaveClass('cursor-pointer');
  });

});
