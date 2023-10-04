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
        const response = await axios.get(`${apiUrl}/api/directory/${id}`);
        setPost(response.data.directories);
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
          <h2
            className="text-3xl font-bold text-black font-poppins mb-4 "
            style={{ width: "1200px", borderBottom: "2px solid #000" }}
          >
            {post.title}
          </h2>
          <img
            src={post.logo}
            alt={post.title}
            className=" mb-2"
            style={{ maxHeight: "300px", minHeight: "100px", width: "400px" }}
          />
          <div className="text-black font-poppins mb-6 mr-64">
            <p
              className="text-sm leading-relaxed mr-64 "
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
          </div>
          <div
            className="flex flex-wrap border border-solid border-gray-300"
            style={{ width: "1200px" }}
          >
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">GST:</p>
              <p className="text-black font-poppins ml-2">{post.gst}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">PAN:</p>
              <p className="text-black font-poppins ml-2">{post.pan}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Phone No:</p>
              <p className="text-black font-poppins ml-2">{post.phoneNo}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Sector:</p>
              <p className="text-black font-poppins ml-2">
                {post.selectedIndustry}
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Designation:</p>
              <p className="text-black font-poppins ml-2">{post.designation}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Pincode:</p>
              <p className="text-black font-poppins ml-2">{post.pincode}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Address:</p>
              <p className="text-black font-poppins ml-2">{post.address}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Company Type:</p>
              <p className="text-black font-poppins ml-2">{post.companyType}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Email:</p>
              <p className="text-black font-poppins ml-2">{post.email}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Turnover:</p>
              <p className="text-black font-poppins ml-2">{post.turnover}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4  mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Team Size:</p>
              <p className="text-black font-poppins ml-2">{post.size}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">Website:</p>
              <p className="text-black font-poppins ml-2">{post.website}</p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </p>
              <p className="text-black font-poppins ml-2">
                {formatDate(post.createdAt)}
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/4 mb-4 flex px-4">
              <p className="text-black font-poppins mb-1">
                <FontAwesomeIcon icon={faCalendarAlt} />
              </p>
              <p className="text-black font-poppins ml-2">
                {formatDate(post.establishedDate)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetails;
