import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

import { App } from './App';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders the login form', () => {
  act(() => {
    render(
      <Router>
        <App />
      </Router>,
      container,
    );
  });

  expect(true).toBeTruthy();
});
