import React from "react";
import { render } from "@testing-library/react";
import LoadingPage from "./LoadingPage";

test("Should render LoadingPage correctly", () => {
  // Arrange
  const { container } = render(<LoadingPage />);
  expect(container).toMatchSnapshot();
});
