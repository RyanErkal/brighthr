import { expect, test } from "@jest/globals";
import App from "./App";

test("initial states", () => {
	expect(App.files).toBe("");
});
