import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import "../styles/Jobs.css";
const Jobs = () => {
  const [jobDetails, setJobDetails] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const token = localStorage.getItem("token");
  //console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/v1/job/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        //const data = await res.json();
        //console.log(res.data.jobs);
        setJobDetails(res.data.jobs);
      } catch (error) {
        console.error("Error fetching job details:", error);
      }
    };

    fetchData();
    // console.log(jobDetails);
  }, [token]);

  //filter out jobs according to position
  const filteredJobs = searchQuery
    ? jobDetails.filter((job) =>
        job.position.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : jobDetails;

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="row">
        <div className="col-1">
          <Layout></Layout>
        </div>

        <div className="d-flex  flex-col col-11">
          <h1 className="jobs-section">
            Apply here for your{" "}
            <span style={{ color: "#0047AB", fontWeight: "bold" }}>
              Dream Job
            </span>
          </h1>

          <div className="relative search-jobs mx-auto max-w-400px mt-4">
            <input
              type="text"
              id="Search"
              value={searchQuery}
              onChange={handleSearchInputChange}
              placeholder="Search by Position"
              className="w-full rounded-md py-2.5 pe-10 sm:text-sm  search-input pl-3 
              "
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button
                type="button"
                className="text-gray-600 hover:text-gray-700"
              >
                <span className="sr-only">Search</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </button>
            </span>
          </div>

          {filteredJobs.length === 0 ? (
            <div>
              <div className="grid h-screen place-content-center bg-white px-4">
                <div className="text-center">
                  <p className="text-8xl font-black text-gray-600 tracking-tigh sm:text-4xl">
                    No Job Found!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            filteredJobs.map((job) => (
              <div className="row">
                <div key={job.id} className="card w-75 mb-1 col-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      <span className="semibold-text">{job.position}</span>
                      {" - "}
                      <span style={{ color: "#808080" }}>{job.company}</span>
                    </h5>
                    <div className="d-flex flex-row col-12">
                      <div className="d-flex flex-column col-6 gap-2">
                        <div>
                          <i
                            className="fas fa-clock"
                            style={{ color: "#0047AB" }}
                          ></i>{" "}
                          {job.workType.charAt(0).toUpperCase() +
                            job.workType.slice(1)}
                        </div>
                        <div>
                          {"  "}
                          <i
                            className="fa-solid fa-indian-rupee-sign"
                            style={{ color: "#0047AB" }}
                          ></i>{" "}
                          {job.package}
                        </div>
                        <div>
                          <i
                            className="fa-solid fa-map-location"
                            style={{ color: "#0047AB" }}
                          ></i>{" "}
                          {job.workLocation}
                        </div>
                      </div>

                      <div className="d-flex flex-column gap-2 col-6">
                        <div className="d-flex flex-row justify-content-end">
                          <button className="btn-primary px-3 py-2 rounded-md text-center mr-2">
                            Apply
                          </button>
                        </div>
                        <div className="d-flex flex-row justify-content-end">
                          <button className="btn-primary px-3 py-2 rounded-md text-center mr-2">
                            View
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
