import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";
import DashboardPage from "./DashboardPage";

test("Should render DashboardPage correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
