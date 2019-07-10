import React from "react";
import { shallow } from "enzyme";
import { LoginPage } from "./LoginPage";

// TypeError: Cannot read property 'contextTypes' of undefined (at shallow)
test("Should render login page correctly", () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

// TypeError: Cannot read property 'contextTypes' of undefined (at shallow)
test("Should call startLogin on button click", () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find("button").simulate("click");
  expect(startLogin).toHaveBeenCalled();
});
