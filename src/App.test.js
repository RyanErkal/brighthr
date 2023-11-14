import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
	it("displays initial title", () => {
		const { getByText } = render(<App />);
		const initialTitle = screen.getByText("Bright HR");
		expect(initialTitle).toBeTruthy();
	});

	it("loads JSON", () => {});
});
