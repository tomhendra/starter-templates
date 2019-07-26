import { login, logout } from "./auth";

test("Should generate login action object", () => {
  const action = login("123abc");
  expect(action).toEqual({
    type: "LOGIN",
    uid: "123abc"
  });
});

test("Should generate logout action object", () => {
  const action = logout();
  expect(action).toEqual({
    type: "LOGOUT"
  });
});
