import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("List item format correct", () => {
	render(<App />);

	const element = screen.getByText(/Public Holiday policy.pdf - 15kB/);

	expect(element).toBeInTheDocument();
});

test("List folder format correct", () => {
	render(<App />);

	const element = screen.getByText(/.\/Expenses - 20kB/);

	expect(element).toBeInTheDocument();
});
