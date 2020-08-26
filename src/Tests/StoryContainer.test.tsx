import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";

import { screen, waitForElement } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import StoriesContainer from "../components/StoriesContainer";
import { renderWithRedux } from "./testHelpers";

let container: any = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders story container component", async () => {
  var mock = new MockAdapter(axios);
  mock.onGet().reply(200, [123, 456]);

  renderWithRedux(
    <StoriesContainer />,
    container
  );

  const titleNode = await waitForElement(() =>
    screen.getByTestId("stories-container")
  );

  expect(titleNode.textContent).toContain("New Stories");
});
