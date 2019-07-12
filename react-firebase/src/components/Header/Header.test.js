import React from "react";
import { fireEvent } from "@testing-library/react";
import renderWithRouter from "../../testing/utils/renderWithRouter";
import { Header } from "./Header";

test("should call startLogout on button click", () => {
  // Arrange
  const startLogout = jest.fn();
  const { container, getByText } = renderWithRouter(
    <Header startLogout={startLogout} />
  );
  const leftClick = { button: 0 };
  const logoutButton = getByText(/Logout/i, leftClick);

  // Act
  fireEvent.click(logoutButton);

  // Assert
  expect(container).toMatchSnapshot();
  expect(startLogout).toHaveBeenCalledTimes(1);
});
