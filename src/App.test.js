import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("List renders successfully", () => {
	render(<App />);

	const element = screen.getByText(/Public Holiday/);

	expect(element).toBeInTheDocument();
});
