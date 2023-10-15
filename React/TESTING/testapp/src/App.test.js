import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

//SnapShot
afterEach(cleanup);

it('should take a snapshot',()=>{
  const {asFragment}= render(<App />);

  expect(asFragment(<App />)).toMatchSnapshot();
})

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
