import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import React from "react";

import { render, screen, waitForElement } from "@testing-library/react";
import { unmountComponentAtNode } from "react-dom";
import StoryComponent from "../components/Story";
import { Story } from "../types";

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

it("renders fake story component", async () => {
  const fakeStory: Story = {
    by: "Atif Gulzar",
    id: 1981,
    url: "http://localhost:3000",
    title: "Hacker news clone",
    time: 1598369281,
    score: 1,
  };

  var mock = new MockAdapter(axios);
  mock.onGet().reply(200, fakeStory);

  render(
    <StoryComponent storyId={1981} index={1} pageStartIndex={0} />,
    container
  );

  const titleNode = await waitForElement(() =>
    screen.getByTestId("story-details")
  );

  expect(titleNode.textContent).toContain(fakeStory.title);
  expect(titleNode.textContent).toContain(fakeStory.by);
});
