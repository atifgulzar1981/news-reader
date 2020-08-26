import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
import rootReducer from "../redux/reducer";

export function renderWithRedux(
  ui,
  {
    initialState,
    store = createStore(rootReducer, applyMiddleware(reduxThunk), initialState),
  } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}
