import React from "react";
import ReactDOM from "react-dom";
import DashboardPage from "./DashboardPage";

test("Should render DashboardPage correctly", () => {
  const container = document.createElement("div");

  ReactDOM.render(<DashboardPage />, container);

  expect(container).toMatchSnapshot();
});
