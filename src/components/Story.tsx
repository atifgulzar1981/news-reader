import Axios from "axios";
import React, { useEffect, useState } from "react";

import { Story } from "../types";
import { storyUrl } from "../constants";

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
  }, [getStory]);

  return (
    <>
      {pageStartIndex + index}. <a href={story.url}>{story.title}</a>
      <p>
        By: {story.by} Posted: {story.time}
      </p>
      <hr />
    </>
  );
};
