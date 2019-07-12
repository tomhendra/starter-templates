import React from "react";
import { render } from "@testing-library/react";
import DashboardPage from "./DashboardPage";

test("Should render DashboardPage correctly", () => {
  // Arrange
  const { getByText } = render(<DashboardPage />);

  const dashboardDiv = getByText("Dashboard page content...");

  // Act

  // Assert
  expect(dashboardDiv.innerHTML).toMatch("Dashboard page content...");
});
