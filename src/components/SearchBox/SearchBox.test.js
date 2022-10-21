import SearchBox from "./SearchBox";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

xit("SearchBox Form rendered", () => {
    render(<SearchBox/>);
    const searchBox=screen.queryByRole ("form");
    expect(searchBox).toBeInTheDocument();
})
it("SearchText rendered", () => {
    render(<SearchBox/>);
    const searchText=screen.getByPlaceholderText (/search here .../i);
    expect(searchText).toBeInTheDocument();
})
xit("Value entered is read", () => {
    render(<SearchBox/>);
    const searchText=screen.getByPlaceholderText (/search here .../i);
    userEvent.type(searchText,"b")
    expect(searchText).toContain("b")
})
