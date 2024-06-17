import React, { useState, useEffect, useCallback } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import axios from "axios";
import useQueryState from "../../hooks/useQueryState";
import { useMessage } from "../../components/Header";

const JobCards = () => {
  const [jobApplications, setJobApplications] = useState(null);
  const [filters, setFilters] = useQueryState({
    search: "",
    sortBy: "createdAt",
    interviewSent: "",
    interviewed: "",
    offerSent: "",
    offerSigned: "",
    agreementSent: "",
    agreementSigned: "",
    employed: "",
    terminated: "",
    searchBy: "fullName",
    direction: -1,
  });
  const [pageNo, setPageNo] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  const [labels, setLabels] = useState(null);
  const { showSuccess, showError } = useMessage();

  const fetchJobsApplication = useCallback(async () => {
    try {
      const response = await axios.get(
        `/hr/job-application?searchBy=${filters.searchBy}&search=${filters.search}&sortBy=${filters.sortBy}&direction=${filters.direction}&page=${pageNo}&interviewSent=${filters.interviewSent}&interviewed=${filters.interviewed}&offerSent=${filters.offerSent}&offerSigned=${filters.offerSigned}&agreementSent=${filters.agreementSent}&agreementSigned=${filters.agreementSigned}&employed=${filters.employed}&terminated=${filters.terminated}`
      );
      setJobApplications(response.data.applications);
      setPageLimit(response.data.pageData.totalPages);
    } catch (error) {
      console.error("Error fetching job applications:", error);
    }
  }, [
    filters.searchBy,
    filters.search,
    filters.sortBy,
    filters.direction,
    filters.interviewSent,
    filters.interviewed,
    filters.offerSent,
    filters.offerSigned,
    filters.agreementSent,
    filters.agreementSigned,
    filters.employed,
    filters.terminated,
    pageNo,
  ]);

  const handleDeleteClick = (application) => {
    // Implement your delete logic here
    console.log("Deleting application:", application);
  };

  const handleShowMoreClick = (applicationId) => {
    // Navigate or expand application details
    console.log("Navigating to application details:", applicationId);
  };

  useEffect(() => {
    fetchJobsApplication();
  }, [fetchJobsApplication]);

  return (
    <div className="w-full flex flex-wrap justify-between mx-4 pt-4 gap-1 pr-6">
      {jobApplications &&
        jobApplications.map((application, index) => (
          <Box
            key={index}
            className="w-full md:w-[48%] lg:w-[32%] xl:w-[24%] h-auto p-2 gap-4 rounded-lg mb-4"
            sx={{ backgroundColor: "background.view" }}
          >
            <div className="flex flex-row justify-between items-center">
              <h1 className="text-[14px]">{application.jobTitle}</h1>
              <p className="text-[8px] text-zinc-500">
                {new Date(application.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-row justify-start gap-2 items-center">
              <p className="text-[12px] text-zinc-500">
                <PersonIcon fontSize="small" className="text-zinc-300" />{" "}
                {application.fullName}
              </p>
            </div>
            <div className="flex flex-row gap-2 pt-2">
              {/* <Link to={`/showmore/${application._id}`}> */}
              {/* <Link to={`/showmore:${application._id}`}> */}
              <Link to={`/jobApplicationDetail/${application._id}`}>




                <button
                  className="flex text-zinc-200 p-1 bg-sky-500 rounded-sm text-[8px]"
                  onClick={() => handleShowMoreClick(application._id)}
                >
                  Show more
                </button>
              </Link>
              <button
                className="flex text-zinc-200 p-1 bg-amber-500 rounded-sm text-[8px]"
                onClick={() => handleDeleteClick(application)}
              >
                Delete
              </button>
            </div>
            <div className="flex flex-row gap-1 w-full mt-2">
              <div className="flex items-center border-b border-solid border-zinc-50 w-[96%] ">
                <div className="w-full relative ">
                  <select className="outline-none border-none w-full bg-transparent light:text-zinc-50 text-[12px] pr-6 appearance-none">
                    <option value="">Add Label</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
                <ArrowDropDownIcon className="text-zinc-500" />
              </div>
              <p className="text-[14px] text-zinc-500 flex items-bottom justify-bottom">
                +
              </p>
            </div>
            <div className="flex flex-row gap-2 pt-2">
              {/* Example status labels */}
              <Box
                sx={{ backgroundColor: "background.bond", color: "text.two" }}
                className="flex p-1 bg-neutral-800 text-[8px]"
              >
                {application.isInterviewDone ? "Interviewed" : "Not Interviewed"}
              </Box>
              <Box
                sx={{ backgroundColor: "background.bond", color: "text.two" }}
                className="flex p-1 bg-neutral-800 text-[8px]"
              >
                {application.isOfferLetterSigned ? "Offer Signed" : "Offer Not Signed"}
              </Box>
              <Box
                sx={{ backgroundColor: "background.bond", color: "text.two" }}
                className="flex p-1 bg-neutral-800 text-[8px]"
              >
                {application.isAgreementSigned ? "Agreement Signed" : "Agreement Not Signed"}
              </Box>
            </div>
          </Box>
        ))}
    </div>
  );
};

export default JobCards;

