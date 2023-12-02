import React from "react";
import ImageCard from "./ImageCard";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <div>
      <h1>{name} Profile</h1>
      <p>{desc}</p>

      <div>
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
