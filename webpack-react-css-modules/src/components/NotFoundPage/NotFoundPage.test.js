import React from "react";
import renderWithRouter from "../../testing/utils/renderWithRouter";
import NotFoundPage from "./NotFoundPage";

test("Should render NotFoundPage correctly", () => {
  // Arrange
  const { container, getByText } = renderWithRouter(<NotFoundPage />);
  const notFoundDiv = getByText("Go home");

  // Act

  // Assert
  expect(notFoundDiv.innerHTML).toBe("Go home");
  expect(container).toMatchSnapshot();
});
