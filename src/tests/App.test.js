import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// initialise Test state data 
let testState = {
  vote0: 4,
  vote1: 55,
  vote2: -5,
  vote3: -100,
  vote4: 34,
  articles: [],
  articleIndex: -1,
  ranked: false
};

let expectedState = {
  vote0: 3,
  vote1: 0,
  vote2: 10,
  vote3: 0,
  vote4: 0,
  articles: [],
  articleIndex: -1,
  ranked: false
};

test("Should return the most upvoted article first", () => {
  expect(testState.addvotes(0).toBe(expectedState));
});

it("Renders successfully renders the application", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

