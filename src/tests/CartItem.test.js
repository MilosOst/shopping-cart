import CartItem from "../components/CartItem.js";
import { render, screen } from "@testing-library/react";
import randomImage from "../imgs/shoes/nmdr1.webp";
import userEvent from "@testing-library/user-event";
import App from "../App.js";


const item = {
    name: "Test Item",
    price: 130,
    image: randomImage,
    quantity: 1,
};

describe("Basic rendering", () => {
    test("renders correct name", () => {
        render(<CartItem item={item}/>);
        expect(screen.getByRole("heading", {name: "Test Item"})).toBeDefined();
    });
    
    test("renders correct price", () => {
        render(<CartItem item={item}/>);
        expect(screen.getByRole("heading", {name: "$130"})).toBeDefined();
    });
    
    test("renders image", () => {
        render(<CartItem item={item}/>);
        expect(screen.getByRole("img")).toHaveAttribute("src", "nmdr1.webp");
    })
    
    test ("renders correct quantity", () => {
        render(<CartItem item={item}/>);
        expect(screen.getByRole("heading", {name: "1"})).toBeDefined();
    });
});

describe("Adding and removing items works correctly", () => {
    test("clicking on + button calls add function", () => {
        const addMock = jest.fn();
        render(<CartItem item={item} addItem={addMock}/>);

        const addBtn = screen.getByRole("button", {name: "+"});
        userEvent.click(addBtn);
        expect(addMock).toHaveBeenCalledTimes(1);
        expect(addMock).toHaveBeenCalledWith(item);
    });
    test("clicking on - button calls remove function", () => {
        const removeMock = jest.fn();
        render(<CartItem item={item} removeItem={removeMock}/>);

        const removeBtn = screen.getByRole("button", {name: "-"});
        userEvent.click(removeBtn);
        expect(removeMock).toHaveBeenCalledTimes(1);
        expect(removeMock).toHaveBeenCalledWith(item);
    });
});
