import React from "react";
import { render } from "@testing-library/react";
import Display from "./Display";
import { toHaveClass } from "@testing-library/jest-dom";

expect.extend({ toHaveClass });

test("Display toggles unlocked/locked and closed/open accordingly", () => {
  const { getByText, rerender } = render(<Display locked closed />);
  getByText(/locked/i);
  getByText(/closed/i);
  rerender(<Display locked={false} closed={false} />);
  getByText(/unlocked/i);
  getByText(/open/i);
});

test("Displays toggle red or green depending on locked/closed status", () => {
  const { getByText, rerender } = render(<Display locked closed />);
  expect(getByText(/locked/i)).toHaveClass("red-led");
  expect(getByText(/closed/i)).toHaveClass("red-led");
  rerender(<Display locked={false} closed={false} />);
  expect(getByText(/open/i)).toHaveClass("green-led");
  expect(getByText(/unlocked/i)).toHaveClass("green-led");
});
