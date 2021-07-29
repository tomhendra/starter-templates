import authReducer from "./auth";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "123abc"
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("Should clear uid for logout", () => {
  const action = {
    type: "LOGOUT"
  };
  const state = authReducer({}, action);
  expect(state).toEqual({});
});
