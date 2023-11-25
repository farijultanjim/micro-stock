"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import axios from "axios";

const UploadPage = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  // const [image, setImage] = useState(null);

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   TransformFile(file);
  //   console.log(TransformFile);
  // };

  // const TransformFile = (file) => {
  //   const reader = new FileReader();
  //   if (file) {
  //     reader.readAsDataURL(file);
  //     reader.onloadend = () => {
  //       setImage(reader.result);
  //     };
  //   } else {
  //     setImage("");
  //   }
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const formData = new FormData();
  //     formData.append('userId', session?.user.id);
  //     formData.append('image', image);
  //     formData.append('title ', title);
  //     formData.append('tag', tag);

  //     const response = await fetch("/api/upload/new", {
  //       method: "POST",
  //       body: formData,
  //     });

  //     if (response.ok) {
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (!image || !title) return;

    const formData = new FormData();
    formData.append("title", title);
    formData.append('method', 'POST');
    // formData.append("image", image);

    try {
      // Post to your API route
      const response = await fetch("/api/upload/new", {
        method: "POST",
        body: formData,
        
      });

      // Handle response
      console.log(response.data);
    } catch (error) {
      console.error("Error uploading:", error);
    }
  };

  return (
    <section className="w-full max-w-full flex flex-col items-center px-6">
      <h1 className="bold-32 mt-6 text-left">
        <span className="blue_gradient">Upload Image</span>
      </h1>

      <form className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism ">
        <label>
          <span className="font-semibold text-base text-gray-700  bold-18 ">
            Upload your image here
          </span>{" "}
          <br />
          {/* <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-5"
          /> */}
          {/* <label
            htmlFor="imageUpload"
            className="btn_green rounded-xl bold-16 cursor-pointer hover:bg-green-700"
          >
            Browse
          </label> */}
          {/* {image && (
            <div className="mt-3">
              <img
                src={image}
                alt="Image Preview"
                className="max-w-full h-auto rounded"
              />
            </div>
          )} */}
        </label>

        <label>
          <span className="font-semibold text-base text-gray-700">
            Field of Image Title{" "}
          </span>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Title"
            required
            className="form_input"
          />
        </label>
        {/* <label>
          <span className="font-semibold text-base text-gray-700">
            Field of Image Tags{" "}
            <span className="font-normal">
              (#product, #nature, #model, etc.)
            </span>
          </span>
          <input
            value={tag}
            onChange={(e) => setTag(e.target.value)}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label> */}

        <div className="flex-end mx-3 mb-5 space-x-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-green-50 rounded-full text-white"
          >
            {submitting ? "Uploading" : "Upload"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadPage;
