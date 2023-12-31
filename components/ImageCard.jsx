"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const ImageCard = ({ post, handleDelete }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleProfileClick = () => {
    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleDownload = () => {
    const imageUrl = post.image[0];
    const fileName = `micro-stock_${new Date()
      .toISOString()
      .replace(/:/g, "-")}.jpg`;

    const downloadLink = document.createElement("a");
    downloadLink.href = imageUrl;
    downloadLink.download = fileName; // You can set the desired file name here
    downloadLink.click();
  };

  return (
    <>
      <div className="relative group">
        <img
          src={post.image[0]}
          alt="image"
          class="w-full h-auto group-hover:opacity-80 group-hover:shadow-2xl "
        />
        {session?.user.id === post.creator?._id && pathName === "/profile" ? (
          <div className="absolute w-full bottom-0 hidden group-hover:flex group-hover:justify-between group-hover:flex-row px-7 pb-7 pt-16 group-hover:bg-gradient-to-t from-[#F6D6C5] to-transparent">
            <p
              className="font-inter text-sm green_gradient cursor-pointer"
              // onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        ) : (
          <div className="absolute w-full bottom-0 hidden group-hover:flex group-hover:justify-between group-hover:flex-row px-7 pb-7 pt-16 group-hover:bg-gradient-to-t from-[#F6D6C5] to-transparent">
            <div
              className="flex-1 flex justify-start items-center gap-3 cursor-pointer"
              onClick={handleProfileClick}
            >
              <Image
                src={post.creator?.image}
                alt="user_image"
                width={30}
                height={30}
                className="rounded-full object-contain"
              />

              <h3 className="font-semibold text-gray-900">
                {post.creator?.username}
              </h3>
            </div>

            <button className="btn_orange" onClick={handleDownload}>
              Download
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default ImageCard;
