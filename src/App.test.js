import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import CardList from './components/CardList/CardList';
import SearchBox from "./components/SearchBox/SearchBox";


afterEach(cleanup);
it("SearchText rendered", () => {
  render(<App/>);
  const searchText=screen.getByPlaceholderText (/search here .../i);
  expect(searchText).toBeInTheDocument();
});

it("Value entered is read", () => {
  render(<App/>);
  const searchText=screen.getByPlaceholderText (/search here .../i);
  userEvent.type(searchText,"b")
  const searchValue = screen.getByRole('textbox');

  expect(searchValue).toHaveValue("b")
})
it("should render the filters", () => {
  render(<App/>);
  const filter1=screen.getByLabelText("High ABV (>6/0%)") 
  expect(filter1).toBeInTheDocument();
  const filter2=screen.getByLabelText("Classic Range") 
  expect(filter2).toBeInTheDocument();
  const filter3=screen.getByLabelText("Acidic (ph < 4)") 
  expect(filter3).toBeInTheDocument();
})
it("should apply filter Classic Range", () => {
  render(<App>
          <CardList />
          </App>);
  const filter2=screen.getByLabelText("Classic Range");
  userEvent.click(filter2);
  const card = screen.getByText("Buzz");
  expect(card).toBeInTheDocument();
})

xit("should apply filter on Acidity", () => {
  render(<App/>);
  const filter3=screen.getByLabelText("Acidic (ph < 4)");
  userEvent.click(filter3);
  const card = screen.getByText(/Buzz/) 
  expect(card).toBeInTheDocument();
})

xit("should render the Cards", () => {
  render(<App/>);
  const card = screen.getByAltText(/Buzz/) 
  expect(card).toBeInTheDocument();
})

