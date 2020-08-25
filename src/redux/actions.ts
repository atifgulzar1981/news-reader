import Axios from "axios";

import { newStoriesUrl } from "../constants";
import { MyThunkResult } from "../types";

export const getStoryIds = (): MyThunkResult<number[]> => {
  return async (dispatch) => {
    dispatch({ type: "GET_STORY_IDS_REQUEST", request: null });

    try {
      const response = await Axios.get<number[]>(newStoriesUrl);
      dispatch({
        type: "GET_STORY_IDS_SUCCESS",
        request: null,
        response: response.data,
      });
      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject("An Error Occured While Fetching Story Ids.");
    }
  };
};

export const getNewPage = (): MyThunkResult<null> => {
  return async (dispatch) => {
    dispatch({ type: "NEW_PAGE_REQUEST", request: null });
    return Promise.resolve(null);
  };
};
