import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HackerNewsState } from "../types";
import { getStoryIds, getNewPage } from "../redux/actions";
import Story from "./Story";

export default () => {
  const dispatch = useDispatch();
  const appState = useSelector<HackerNewsState, HackerNewsState>(
    (state) => state
  );
 
  useEffect(() => {
    dispatch(getStoryIds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPageStoryIds: number[] = [];
  if (appState.storyIds && appState.storyIds.length > 0) {
    for (
      let i = appState.currentPageStartIndex;
      i < appState.currentPageLastIndex;
      i++
    ) {
      currentPageStoryIds.push(appState.storyIds[i]);
    }
  }
  console.log(appState);

  const gotoNextPage = () => {
    dispatch(getNewPage());
  };

  if (appState.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>New Stories</h1>
      {currentPageStoryIds.map((storyId, index) => {
        return (
          <Story
            key={storyId}
            storyId={storyId}
            index={++index}
            pageStartIndex={appState.currentPageStartIndex}
          />
        );
      })}
      <button className="btn btn-primary" onClick={() => gotoNextPage()}>
        More
      </button>
      <p>&nbsp;</p>
    </div>
  );
};
