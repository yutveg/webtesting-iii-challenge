import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";

test("Display toggles unlocked/locked and closed/open accordingly", () => {
  const { getByText, rerender } = render(<Display locked closed />);
  getByText(/locked/i);
  getByText(/closed/i);
  rerender(<Display locked={false} closed={false} />);
  getByText(/unlocked/i);
  getByText(/open/i);
});
