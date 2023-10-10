import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RingLoader } from "react-spinners";

const BlogGridPagination = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 16;
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const [hoveredBlogId, setHoveredBlogId] = useState(null); // Track the hovered blog ID
  const apiUrl = process.env.api;
  // const FileArray = [];


  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber !== currentPage) {
      setCurrentPage(pageNumber);
    }
  };

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const response = await axios.get(
          `${apiUrl}/api/post/allposts?page=${currentPage}&perPage=${blogsPerPage}`
        );
        const { data } = response;

        if (Array.isArray(data.posts)) {
          setTrendingPosts(data.posts);
          setTotalPages(Math.ceil(data.totalPosts / blogsPerPage));
        } else {
          console.log("Invalid data format for Trending Posts");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchTrendingPosts().then(() => {
      setIsLoading(false);
    });
  }, [currentPage]);
  if (isLoading) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ padding: "100px" }}
      >
        <RingLoader  color="#d63636" />
      </div>
    );
  }

  if (!Array.isArray(trendingPosts)) {
    return <div>Error: Invalid data format</div>;
  }

  if (trendingPosts.length === 0) {
    return <div>No posts available</div>;
  }

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = trendingPosts.slice(indexOfFirstBlog, indexOfLastBlog);

  // const totalPages = Math.ceil(trendingPosts.length / blogsPerPage);
  const maxPagesToShow = 10;
  const pageNumbers = [];
  let startPage = 1;

  if (totalPages > maxPagesToShow) {
    const middlePage = Math.ceil(maxPagesToShow / 2);

    if (currentPage <= middlePage) {
      startPage = 1;
    } else if (currentPage > totalPages - middlePage) {
      startPage = totalPages - maxPagesToShow + 1;
    } else {
      startPage = currentPage - middlePage + 1;
    }
  }

  const endPage = Math.min(startPage + maxPagesToShow - 1, totalPages);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
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

  const handleBlogHover = (blogId) => {
    setHoveredBlogId(blogId);
  };

  const handleBlogHoverLeave = () => {
    setHoveredBlogId(null);
  };

  return (
    <div className="grid grid-cols-4 gap-4 mx-5 my-2 font-poppins">
      <div className="col-span-4 grid grid-cols-4 gap-4 mx-24">
        {trendingPosts.map((trending) => (
          <div
            key={trending._id}
            className={`bg-white shadow-lg rounded-lg overflow-hidden max-w-full ${
              hoveredBlogId === trending._id ? "shadow-xl" : ""
            }`}
            onMouseEnter={() => handleBlogHover(trending._id)}
            onMouseLeave={handleBlogHoverLeave}
          >
            <img
              src={
                trending.image ||
                "https://wwwd601d2yq4c.cdn.e2enetworks.net/ia-log-2020.png"
              } // Use a placeholder image path
              alt={trending.title}
              className="h-40 w-full object-fill"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{trending.title}</h2>
              <div className="text-gray-500 mb-2">
                {trending.brief && (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `${trending.brief
                        .split(" ")
                        .slice(0, 6)
                        .join(" ")}${
                        trending.brief.split(" ").length > 6 ? " ..." : ""
                      }`,
                    }}
                  />
                )}
              </div>
              <h4 className="text-gray-500 mb-2">{trending.category}</h4>
              <p className="text-gray-500 mb-4">
                {formatDate(trending.createdAt)}
              </p>
              <button
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => router.push(`/blog/${trending._id}`)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-5 flex justify-center mt-8">
        {totalPages > 1 && (
          <nav>
            <ul className="flex space-x-6">
              <li>
                <button
                  className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded`}
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
              </li>
              {pageNumbers.map((pageNumber) => (
                <li key={pageNumber}>
                  <button
                    className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ${
                      currentPage === pageNumber ? "bg-red-700" : ""
                    }`}
                    onClick={() => paginate(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded`}
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default BlogGridPagination;
