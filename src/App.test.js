import { render, screen, fireEvent } from '@testing-library/react';
import {logRoles} from '@testing-library/dom';
import App from './App';

test('button has correct initial color', () => {
  const { container } = render(<App/>);

  logRoles(container);

  const colorButton = screen.getByRole('button', { name: 'change to blue'});

  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});


test('button turns blue when clicked', () => {
  render(<App/>);

  const colorButton = screen.getByRole('button', { name: 'change to blue'});

  //click button
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });

  expect(colorButton).toHaveTextContent('change to red');
});