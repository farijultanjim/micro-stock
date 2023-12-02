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

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if(session?.user.id) fetchPosts();
  }, []);

  const handleEdit = () => {};
  const handleDelete = async (post) => {
    const hasConfirmed = confirm(
      "Are you sure you want to delete this image?"
    );

    if (hasConfirmed) {
      try {
        await fetch(`/api/upload/${post._id.toString()}`, {
          method: "DELETE",
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="mt-16 mx-auto w-full px-6 flex justify-center items-center flex-col gap-2">
      <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={myPosts}
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
