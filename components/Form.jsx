import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    TransformFile(file);
  };

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPost({ ...post, image: reader.result });
      };
    } else {
      setPost({ ...post, image: "" });
    }
  };

  return (
    <section className="w-full max-w-full flex flex-col items-center px-6">
      <h1 className="bold-32 mt-6 text-left">
        <span className="blue_gradient">Upload Image</span>
      </h1>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism "
      >
        <label>
          <span className="font-semibold text-base text-gray-700  bold-18 ">
            Upload your image here
          </span>{" "}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-5"
            id="imageUpload"
            hidden
          />
          <label
            htmlFor="imageUpload"
            className="btn_green rounded-xl bold-16 cursor-pointer hover:bg-green-700 "
          >
            Browse
          </label>
          {post.image && (
            <div className="mt-3">
              <img
                src={post.image}
                alt="Image Preview"
                className="max-w-full h-auto rounded"
              />
            </div>
          )}
        </label>

        <label>
          <span className="font-semibold text-base text-gray-700">
            Field of Image Title{" "}
          </span>
          <input
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            type="text"
            placeholder="Title"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-semibold text-base text-gray-700">
            Field of Image Tags{" "}
            <span className="font-normal">
              (#product, #nature, #model, etc.)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 space-x-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-green-50 rounded-full text-white"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
