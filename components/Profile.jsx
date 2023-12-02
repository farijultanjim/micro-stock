import React from "react";
import ImageCard from "./ImageCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <div>
      <h1 className="bold-32">{name} Profile</h1>
      <p>{desc}</p>

      <div className="space-y-6 py-8 sm:columns-2 sm:gap-6 xl:columns-3">
        {data.map((post) => (
          <ImageCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;
