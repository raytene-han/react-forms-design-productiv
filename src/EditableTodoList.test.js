import React from "react";
import { render } from "@testing-library/react";
import EditableTodoList from "./App";

describe("productiv app", function () {
  it("renders without crashing", function () {
    render(<EditableTodoList />);
  });

  it("contains expected title", function () {
    const result = render(<EditableTodoList />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  it ("rendered quotes app", function () {
    const result = render(<EditableTodoList />);
    expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  });
});
