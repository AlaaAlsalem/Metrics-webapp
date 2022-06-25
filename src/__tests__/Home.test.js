import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from '../components/Home';
import store from '../redux/ConfigureStore';

describe('test for the HomePage', () => {
  test('', () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>,
      {
        wrapper: MemoryRouter,
      },
    );
    expect(screen.getByText('North America Countries')).toBeInTheDocument();
  });
});