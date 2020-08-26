import React, { useEffect, useMemo } from "react";
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
    // I know redux for this thing is over kill
    // and this could be done using local state
    // I am using redux just for demonstration purpose.
    dispatch(getStoryIds());
  }, [dispatch]);

  const currentPageStoryIds: number[] = useMemo(() => {
    const data = [];

    if (appState.storyIds && appState.storyIds.length > 0) {
      for (
        let i = appState.currentPageStartIndex;
        i < appState.currentPageLastIndex;
        i++
      ) {
        data.push(appState.storyIds[i]);
      }
    }
    return data;
  }, [
    appState.currentPageLastIndex,
    appState.currentPageStartIndex,
    appState.storyIds,
  ]);

  const gotoNextPage = () => {
    dispatch(getNewPage());
  };

  if (appState.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container" data-testid="stories-container">
      <h6 className="text-black story-title mt-3 mb-3 p-2">New Stories</h6>
      <div className="story-container">
        {currentPageStoryIds.map((storyId, index) => {
          return (
            <Story
              key={index}
              storyId={storyId}
              index={++index}
              pageStartIndex={appState.currentPageStartIndex}
            />
          );
        })}

        <button
          className="btn btn-sm btn-secondary mt-3"
          onClick={() => gotoNextPage()}
        >
          More
        </button>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};
