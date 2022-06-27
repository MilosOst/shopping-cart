import Navbar from "../components/Navbar.js";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';


test("Check that quantity icon is not visible when quantity is 0", () => {
    render(<BrowserRouter location="/"><Navbar quantity={0}/></BrowserRouter>);
    expect(screen.queryByText("0")).toBeNull();
});

test("Check that quantity icon is visible when quantity is greater than 0", () => {
    render(<BrowserRouter location="/"><Navbar quantity={3}/></BrowserRouter>);
    expect(screen.getByText("3")).toBeDefined();
});