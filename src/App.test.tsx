import { render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import NewView from './NewView';
import preview from 'jest-preview';

describe('App', () => {
  it('should work as expected', () => {
    const { container } = render(<NewView />);

    // Add or comment out any line to see the browser updated
    userEvent.click(screen.getByTestId('increase'));
    userEvent.click(screen.getByTestId('increase'));
    userEvent.click(screen.getByTestId('increase'));
    userEvent.click(screen.getByTestId('increase'));
    userEvent.click(screen.getByTestId('increase'));
    userEvent.click(screen.getByTestId('increase'));

    // Open https://jest-preview--3336.local.webcontainer.io to see preview
    // Require to run `jest-preview` server before
    preview.debug();

    expect(screen.getByTestId('count')).toContainHTML('6');
  });
});
