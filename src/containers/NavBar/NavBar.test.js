import Filter from "./Filter";
import NavBar from "./Filter";
import { render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

it("should render the filters", () => {
    render(<Filter/>)
})