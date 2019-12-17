import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dashboard from "./Dashboard";

test("Dashboard is rendering control and display components", () => {
  const { getByTestId } = render(<Dashboard />);
  getByTestId("display");
  getByTestId("controls");
});

test("When gate is unlocked user can open/close it", () => {
  const { getByText } = render(<Dashboard />);
  const gateButton = getByText(/close gate/i);
  //User closes gate (default state is open)
  fireEvent.click(gateButton);
  //Gate is now closed
  getByText(/open gate/i);
  //User opens gate
  fireEvent.click(gateButton);
  //Gate is now open
  getByText(/close gate/i);
});

test("When gate is locked user cannot open it without unlocking it first", () => {
  const { getByText } = render(<Dashboard />);
  const gateButton = getByText(/close gate/i);
  const lockButton = getByText(/lock gate/i);
  //Gate is unlocked and open
  fireEvent.click(gateButton);
  fireEvent.click(lockButton);
  //Gate is now locked and closed
  getByText(/unlock gate/i);
  getByText(/open gate/i);
  //Clicking on open gate does not change status of gate since it is locked
  fireEvent.click(gateButton);
  getByText(/open gate/i);
  //Unlocking gate allows user to open it
  fireEvent.click(lockButton);
  getByText(/lock gate/i);
  fireEvent.click(gateButton);
  getByText(/close gate/i);
});
