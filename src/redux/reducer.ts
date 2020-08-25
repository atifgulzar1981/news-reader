import { produce } from "immer";

import { HackerNewsState, HackerNewsActions } from "../types";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";

const initialState: HackerNewsState = {
  isLoading: false,
  currentPageStartIndex: 0,
  currentPageLastIndex: 30,
  storyIds: [],
};

export default (
  state: HackerNewsState = initialState,
  action: HackerNewsActions
) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case "GET_STORY_IDS_REQUEST": {
        draft.isLoading = true;
        return draft;
      }

      case "GET_STORY_IDS_SUCCESS": {
        draft.isLoading = false;
        draft.storyIds = action.response;
        return draft;
      }

      case "NEW_PAGE_REQUEST": {
        if (state.currentPageLastIndex + STORY_INCREMENT >= MAX_STORIES) {
          draft.currentPageLastIndex = MAX_STORIES;
          draft.currentPageStartIndex = MAX_STORIES - STORY_INCREMENT;
        } else {
          draft.currentPageLastIndex =
            state.currentPageLastIndex + STORY_INCREMENT;
          draft.currentPageStartIndex = state.currentPageLastIndex;
        }

        return draft;
      }
    }
  });
};
