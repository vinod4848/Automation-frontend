import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader, Placeholder } from "rsuite";
import { RingLoader } from "react-spinners";
import DirectoryAds from "./DirectoryAds";

const DirectoryGridPagination = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const [hoveredBlogId, setHoveredBlogId] = useState(null); // Track the hovered blog ID
  const [selectedMonth, setSelectedMonth] = useState(null);
  const apiUrl = process.env.api;
  // const FileArray = [];
  const filterByIndustry = (industry) => {
    // Filter blogs based on the selected industry
    const filteredBlogs = blogs.filter(
      (blog) => blog.selectedIndustry === industry
    );

    // Update the trendingPosts state with the filtered blogs
    setTrendingPosts(filteredBlogs);

    // Reset pagination to the first page
    setCurrentPage(1);
  };

  const monthNames = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
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
          `${apiUrl}/api/directory/alldirectories?page=${currentPage}&perPage=${blogsPerPage}`
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

  useEffect(() => {
    if (selectedMonth) {
      const filteredBlogs = blogs.filter((blog) => {
        const blogDate = new Date(blog.startDate);

        return blogDate.getMonth() === selectedMonth - 1; // JavaScript months are zero-based (0 for January, 11 for December)
      });
      setCurrentPage(1); // Reset pagination when changing the filter
      setTrendingPosts(filteredBlogs);
    } else {
      setTrendingPosts(blogs); // If no month is selected, show all blogs
    }
  }, [selectedMonth, blogs]);
  if (isLoading) {
    return (
      <div
        className="flex justify-center items-center"
        style={{ padding: "100px" }}
      >
        <RingLoader color="#d63636" />
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
    <div className="grid grid-cols-4 gap-4 mx-20 my-2 font-poppins">
      <div className="col-span-4 flex justify-center mt-4 mx-24">
        <ul className="flex space-x-2">
          {Array.from({ length: 26 }).map((_, index) => (
            <button
              className={`bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-2 rounded ${selectedMonth === index + 1 ? "bg-red-900" : ""
                }`}
              onClick={() => setSelectedMonth(index + 1)}
            >
              {monthNames[index]}
            </button>
          ))}
        </ul>
      </div>
      <div className="col-span-4 grid grid-cols-4 gap-4 ">
        <div className="col-span-1 grid grid-cols-1 gap-1 ">
          <div className="col-span-1 grid grid-cols-1 gap-1">
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden max-w-full border border-solid border-gray-300"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              <div className="p-6">
                <ul className="list-none p-0 text-gray-500 mb-2">
                  {Array.from(
                    new Set(trendingPosts.map((blog) => blog.selectedIndustry))
                  )
                    .filter((industry) => industry && isNaN(Number(industry)))
                    .map((industry, index) => (
                      <div key={industry._id}>
                        <a
                          href={`#industry-${index}`}
                          className="text-blue-500 hover:underline"
                          onClick={() => filterByIndustry(industry)}
                        >
                          {industry}
                        </a>
                      </div>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-2  ">
          {trendingPosts.map((trending) => (
            <div
              key={trending._id}
              className={`bg-white shadow-lg rounded-lg overflow-hidden max-w-full ${hoveredBlogId === trending._id ? "shadow-xl" : ""
                }`}
              onMouseEnter={() => handleBlogHover(trending._id)}
              onMouseLeave={handleBlogHoverLeave}
            >
              <img
                src={
                  trending.logo
                } // Use a placeholder image path
                alt={trending.title}
                className="h-40 w-full object-fit-contain"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{trending.title}</h2>
                <p className="text-gray-500 mb-2">{trending.designation}</p>
                <h4 className="text-gray-500 mb-2">
                  {trending.selectedIndustry}
                </h4>
                <p className="text-gray-500 mb-4">{trending.acti_date}</p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => router.push(`/directories/${trending._id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-1 grid grid-cols-1 gap-1 ">
          <div className="col-span-1 grid grid-cols-1 gap-1">
            <DirectoryAds />
          </div>
        </div>
        <div className="col-span-4 flex justify-center mt-8">
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
                {pageNumbers.map((pageNumber, index) => (
                  <div key={index}>

                    <button
                      className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ${currentPage === pageNumber ? "bg-red-700" : ""
                        }`}
                      onClick={() => paginate(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </div>
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
    </div>
  );
};

export default DirectoryGridPagination;
