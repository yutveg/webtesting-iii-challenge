import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Controls from "./Controls";

test("Gate button toggles open/close gate depending on if gate is closed or open", () => {
  const { getByText, rerender } = render(
    <Controls locked={false} closed={true} />
  );
  getByText(/open gate/i);
  rerender(<Controls closed={false} />);
  getByText(/close gate/i);
});
