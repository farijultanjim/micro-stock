import React from "react";
import ImageCard from "./ImageCard";

const GlobalImages = ({ data }) => {
  return (
    <div>
      <div className="space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
        {data.slice().reverse().map((post) => (
          <ImageCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default GlobalImages;
