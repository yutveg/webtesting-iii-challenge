import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("Dashboard is rendering control and display components", () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId("display");
  getByTestId("controls");
});
