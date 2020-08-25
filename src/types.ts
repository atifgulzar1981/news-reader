import { ThunkAction, ThunkDispatch } from "redux-thunk";

import { ApiRequest, ApiResponse } from "./helpers";

export interface HackerNewsState {
  isLoading: boolean;
  storyIds: number[];
  currentPageStartIndex: number;
  currentPageLastIndex: number;
}

export interface Story {
  id: number;
  title: string;
  url: string;
  by: string;
  time: string;
}

export type HackerNewsActions =
  | ({ type: "GET_STORY_IDS_REQUEST" } & ApiRequest<null>)
  | ({ type: "GET_STORY_IDS_SUCCESS" } & ApiRequest<null> &
      ApiResponse<number[]>)
  | ({ type: "NEW_PAGE_REQUEST" } & ApiRequest<null>);

export type MyThunkResult<R> = ThunkAction<
  Promise<R>,
  HackerNewsState,
  {},
  HackerNewsActions
>;
export type MyThunkDispatch = ThunkDispatch<
  HackerNewsState,
  {},
  HackerNewsActions
>;

export type MyDispatchProp = {
  dispatch: MyThunkDispatch;
};
