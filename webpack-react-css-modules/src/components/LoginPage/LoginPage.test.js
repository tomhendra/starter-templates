import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LoginPage } from "./LoginPage";

test("should call startLogin on button click", () => {
  // Arrange
  const startLogin = jest.fn();
  const { container, getByText } = render(
    <LoginPage startLogin={startLogin} />
  );
  const leftClick = { button: 0 };
  const loginButton = getByText(/Login with Google/i, leftClick);

  // Act
  fireEvent.click(loginButton);

  // Assert
  expect(container.innerHTML).toMatch("Login with Google");
  expect(container).toMatchSnapshot();
  expect(startLogin).toHaveBeenCalledTimes(1);
});
