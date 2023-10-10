import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faBuilding,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import Header from "../Header";

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const apiUrl = process.env.api;

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/post/posts/${id}`);
        setPost(response.data.post);
        setIsLoading(false);
      } catch (error) {
        console.log("Error:", error);
        setIsLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Blog not found</div>;
  }
  const formatDate = (dateString) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString("en-US", options);

    // Add the "th", "st", "nd", or "rd" suffix to the day
    const day = date.getDate();
    let daySuffix = "th";
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = "st";
    } else if (day === 2 || day === 22) {
      daySuffix = "nd";
    } else if (day === 3 || day === 23) {
      daySuffix = "rd";
    }

    return formattedDate.replace(/(\d+)/, `$1${daySuffix}`);
  };
  return (
    <>
      <Header />
      <div className="bg-white py-8">
        <div className="container mx-auto px-16">
          <h2 className="text-3xl font-bold text-black font-poppins mb-4">
            {post.title}
          </h2>
          <img
            src={
              post.image ||
              "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png"
            }
            alt={post.title}
            className="rounded-3xl mb-2 "
            style={{ maxHeight: "300px", minHeight: "100px", width: "400px" }}
          />
          <div className="text-black font-poppins mb-6 mr-64">
            <p
              className="text-sm leading-relaxed mr-64 "
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full sm:w-1/2 lg:w-1/6  mb-4 flex ml-2">
              <p className="text-black font-poppins mb-1">
                <FontAwesomeIcon icon={faList} />
              </p>
              <p className="text-black font-poppins ml-2">{post.category}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/6  mb-4 flex">
              <p className="text-black font-poppins mb-1">
                <FontAwesomeIcon icon={faBuilding} />
              </p>
              <p className="text-black font-poppins ml-2">
                {post.selectedIndustry}
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/8 mb-4 flex">
              <p className="text-black font-poppins mb-1">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </p>
              <p className="text-black font-poppins ml-2">
                {formatDate(post.createdAt)}
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 px-2 mb-4 mr-64">
              <div className="flex">
                {post.keyword
                  .toString()
                  .split(" ")
                  .map((key) => (
                    <button
                      key={key}
                      className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg mr-4 mb-4 font-poppins"
                    >
                      {key}
                    </button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
