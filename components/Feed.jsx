"use client";

import { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { useSession } from "next-auth/react";
import GlobalImages from "./GlobalImages";

const Feed = () => {
  const { data: session} = useSession()
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/upload");
      const data = await response.json();

      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="flexBetween max-container padding-container mt-16 mx-auto w-full px-6 flex justify-center items-center flex-col gap-2">
      <GlobalImages
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
      />
      
    </section>
  );
};

export default Feed;
