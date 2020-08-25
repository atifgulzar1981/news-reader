import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { HackerNewsState } from "../types";
import { getStoryIds, getNewPage } from "../redux/actions";
import Story from "./Story";

export default () => {
  const dispatch = useDispatch();
  const isLoading = useSelector<HackerNewsState, boolean>(
    (state) => state.isLoading
  );
  const pageStartIndex = useSelector<HackerNewsState, number>(
    (state) => state.currentPageStartIndex
  );
  const pageLastIndex = useSelector<HackerNewsState, number>(
    (state) => state.currentPageLastIndex
  );
  const storyIds = useSelector<HackerNewsState, number[]>(
    (state) => state.storyIds
  );

  useEffect(() => {
    dispatch(getStoryIds());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPageStoryIds: number[] = [];
  for (let i = pageStartIndex; i < pageLastIndex; i++) {
    currentPageStoryIds.push(storyIds[i]);
  }

  const gotoNextPage = () => {
    dispatch(getNewPage());
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      <h1>New Stories</h1>
      {currentPageStoryIds.map((storyId, index) => (
        <Story storyId={storyId} index={++index} pageStartIndex={pageStartIndex} />
      ))}
      <button className="btn btn-primary" onClick={()=> gotoNextPage()}>More</button>
      <p>&nbsp;</p>
    </div>
  );
};
