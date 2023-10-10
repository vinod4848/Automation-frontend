import axios from "axios";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RingLoader } from "react-spinners";
import DirectoryAds from "./DirectoryAds";

const EventGridPagination = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 16;
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const [hoveredBlogId, setHoveredBlogId] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedEventType, setSelectedEventType] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const apiUrl = process.env.api;

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
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
        let apiEndpoint = `${apiUrl}/api/events/allevents?page=${currentPage}&perPage=${blogsPerPage}`;

        // Include selectedMonth in the API request if it's selected
        if (selectedMonth !== null) {
          apiEndpoint += `&month=${selectedMonth}`;
        }

        const response = await axios.get(apiEndpoint);
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
  }, [currentPage, selectedMonth]); // Include selectedMonth as a dependency

  const selectMonth = (monthIndex) => {
    if (monthIndex === selectedMonth) {
      setSelectedMonth(null);
    } else {
      setSelectedMonth(monthIndex);
    }
  };

  if (!Array.isArray(trendingPosts)) {
    return <div>Error: Invalid data format</div>;
  }

  if (trendingPosts.length === 0) {
    return <div>No posts available</div>;
  }

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = trendingPosts.slice(indexOfFirstBlog, indexOfLastBlog);


  const formatDate = (dateString) => {
    const options = {
      month: "long",
      day: "numeric",
      year: "numeric",
    };
    const date = new Date(dateString);
    const formattedDate = date.toLocaleString("en-US", options);

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
    <div className="grid grid-cols-5 gap-5 mx-20 my-2 font-poppins">
      <div className="col-span-5 flex justify-center mt-4 mx-24">
        <ul className="flex space-x-2">
          {Array.from({ length: 12 }).map((_, index) => (
            <button
              key={index}
              className={`bg-red-500 hover:bg-red-900 text-white font-bold py-2 px-2 rounded ${selectedMonth === index ? "bg-red-900" : ""
                }`}
              onClick={() => selectMonth(index)}
            >
              {monthNames[index]}
            </button>
          ))}
        </ul>
      </div>
      <div className="col-span-1 grid grid-cols-1 gap-1">
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden max-w-full border border-solid border-gray-300"
          style={{ maxHeight: "350px", overflowY: "auto" }}
        >
          <div className="p-3">
            <ul className="list-none p-0 text-gray-500 mb-2">
              {/* Event Type Dropdown */}
              <li className="mb-4">
                <label htmlFor="dropdownEventType">Event Type</label>
                <select
                  id="dropdownEventType"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  value={selectedEventType}
                  onChange={(e) => setSelectedEventType(e.target.value)}
                >
                  <option value="">Select Type</option>
                  {/* Dynamically generate options based on available event types */}
                  {Array.from(
                    new Set(currentBlogs.map((blog) => blog.eventType))
                  ).map((eventType) => (
                    <option key={eventType} value={eventType}>
                      {eventType}
                    </option>
                  ))}
                </select>
              </li>

              {/* Year Dropdown */}
              <li className="mb-4">
                <label htmlFor="dropdownYear">Year</label>
                <select
                  id="dropdownYear"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                >
                  <option value="">Choose Year</option>
                  {/* Dynamically generate options based on available years */}
                  {Array.from(
                    new Set(
                      currentBlogs.map((blog) =>
                        new Date(blog.startDate).getFullYear()
                      )
                    )
                  ).map((year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  ))}
                </select>
              </li>

              {/* Country Dropdown */}
              <li>
                <label htmlFor="dropdownCountry">Country</label>
                <select
                  id="dropdownCountry"
                  className="w-full border border-gray-300 rounded py-2 px-3"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Choose Country</option>
                  {/* Dynamically generate options based on available countries */}
                  {Array.from(
                    new Set(currentBlogs.map((blog) => blog.country))
                  ).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded"
              onClick={() => {
                // You can apply additional logic here, e.g., apply filters
                // and fetch filtered data from the API if needed.
              }}
            >
              Apply Filter
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        {currentBlogs
          .filter((post) => {
            if (selectedMonth !== null) {
              const postDate = new Date(post.startDate);
              return postDate.getMonth() === selectedMonth;
            }
            return true;
          })
          .filter((post) => {
            if (selectedEventType !== "") {
              return post.eventType === selectedEventType;
            }
            return true;
          })
          .filter((post) => {
            if (selectedYear !== "") {
              const postDate = new Date(post.startDate);
              return postDate.getFullYear().toString() === selectedYear;
            }
            return true;
          })
          .filter((post) => {
            if (selectedCountry !== "") {
              return post.country === selectedCountry;
            }
            return true;
          })
          .map((trending) => (
            <div
              style={{ height: "450px" }}
              key={trending._id}
              className={`bg-white shadow-lg rounded-lg overflow-hidden max-w-full ${hoveredBlogId === trending._id ? "shadow-xl" : ""
                }`}
              onMouseEnter={() => handleBlogHover(trending._id)}
              onMouseLeave={handleBlogHoverLeave}
            >
              <img
                src={trending.media[0].fileUrl}
                alt={trending.title}
                className="h-40 w-full object-scale-down"
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
                          .join(" ")}${trending.brief.split(" ").length > 6 ? " ..." : ""
                          }`,
                      }}
                    />
                  )}
                </div>
                <h6 className="text-gray-500 mb-2">{trending.eventType}</h6>
                <p className="text-gray-500 mb-4">
                  {formatDate(trending.startDate)}
                </p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => router.push(`/event/${trending._id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
      </div>
      {/* <div className="col-span-3 grid grid-cols-3 gap-3 ">
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
                src={trending.media[0].fileUrl}
                alt={trending.title}
                className="h-40 w-full object-scale-down"
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
                <h6 className="text-gray-500 mb-2">{trending.eventType}</h6>
                <p className="text-gray-500 mb-4">
                  {formatDate(trending.startDate)}
                </p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => router.push(`/event/${trending._id}`)}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div> */}
      <div className="col-span-1 grid grid-cols-1 gap-1 ">
        <div className="col-span-1 grid grid-cols-1 gap-1">
          <DirectoryAds />
        </div>
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
                    className={`bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 rounded ${currentPage === pageNumber ? "bg-red-700" : ""
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

export default EventGridPagination;
