import React from "react";
import { render } from "@testing-library/react";
import DashboardPage from "./DashboardPage";

test("Should render DashboardPage correctly", () => {
  const { getByText } = render(<DashboardPage />);

  const dashboardDiv = getByText("Dashboard page content...");

  expect(dashboardDiv.innerHTML).toMatch("Dashboard page content...");
});
