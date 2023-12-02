"use client";

import React, { useEffect, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import Link from "next/link";
import Button from "@/components/Button";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Profile from "@/components/Profile";

const ProfilePage = () => {
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setPosts(data);
    };

    if(session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
    <div>
      <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      {/* <div className="flex flex-col items-center mt-12 space-y-7">
        <Image
          src={session?.user.image}
          alt="profile"
          width={100}
          height={100}
          className="rounded-full "
        />
        <div>
          <h1 className="bold-40">Farijul Tanzil</h1>
        </div>

        <div>
          <Link href="/profile/editprofile">
            <Button
              type="button"
              title="Edit Profile"
              variant="btn_green"
              icon={<ModeEditIcon />}
            />
          </Link>
        </div>

        <div className="flexCenter space-x-3">
          <Button type="button" title="Highlights" variant="btn_dark_green" />
          <Button type="button" title="Gallery" variant="btn_dark_green" />
          <Button type="button" title="Collections" variant="btn_dark_green" />
        </div>
      </div> */}
    </div>
  );
};

export default ProfilePage;
