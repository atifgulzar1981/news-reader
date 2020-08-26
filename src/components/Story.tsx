import Axios from "axios";
import React, { useEffect, useState } from "react";

import { Story } from "../types";
import { storyUrl } from "../constants";
import { getTimeDifference } from "../helpers";

export interface OwnProps {
  storyId: number;
  index: number;
  pageStartIndex: number;
}

export default ({ storyId, index, pageStartIndex }: OwnProps) => {
  const [story, setStory] = useState({} as Story);

  const getStory = async (storyId: number) => {
    const result = await Axios.get<Story>(`${storyUrl + storyId}.json`);
    return result.data;
  };

  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setStory(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // if (!story || !story.url) {
  //   return (
  //     <div className="spinner-border" role="status">
  //       <span className="sr-only">Loading...</span>
  //     </div>
  //   );
  // }

  return (
    <>
      <small className="text-muted">{pageStartIndex + index}. </small>
      <mark>
        <a href={story.url}>{story.title}</a>
      </mark>
      <p>
        <small className="text-muted">
          {story.score} {story.score > 1 ? "points" : "point"} by {story.by}{" "}
          {getTimeDifference(story.time)}
        </small>
      </p>
      <hr />
    </>
  );
};
