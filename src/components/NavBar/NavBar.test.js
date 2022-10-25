import NavBar from "./NavBar/NavBar";

it("Value entered is read", () => {
    render(<NavBar/>);
    const searchText=screen.getByPlaceholderText (/search here .../i);
    userEvent.type(searchText,"b")
    const searchValue = screen.getByRole('textbox');
  
    expect(searchValue).toHaveValue("b")
  })
  it("should render the filters", () => {
    render(<NavBar/>);
    const filter1=screen.getByLabelText("High ABV (>6/0%)") 
    expect(filter1).toBeInTheDocument();
    const filter2=screen.getByLabelText("Classic Range") 
    expect(filter2).toBeInTheDocument();
    const filter3=screen.getByLabelText("Acidic (ph < 4)") 
    expect(filter3).toBeInTheDocument();
  })
  