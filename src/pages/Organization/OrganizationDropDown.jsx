import axios from "axios";
import React, { useEffect, useState } from "react";

const OrganizationDropDown = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [organizations, setOrganization] = useState([]);

  useEffect(() => {
    getOrganizations();
  }, []);

  const getOrganizations = async () => {
    try {
      const response = await axios.get(`/hr/organization`);
      let data = response.data;
      if (data.success) {
        let tempData = data.data.filter((item) => item.status);
        setOrganization(tempData);
        let currentOrg = localStorage.getItem("org");
        if (currentOrg) {
          currentOrg = JSON.parse(currentOrg);
          setSelectedValue(currentOrg._id);
        }
      }
    } catch (e) {
      console.log("Error List of Organization", e);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    let selectedOrg = organizations.find(
      (item) => item._id === event.target.value
    );
    handleSelect(selectedOrg);
  };

  async function handleSelect(org) {
    if (org.status) {
      try {
        const response = await axios.post(`/hr/organization/select`, {
          organizationId: org._id,
        });
        let data = response.data;
        if (data.success) {
          localStorage.setItem("org", JSON.stringify(org));
        }
      } catch (e) {
        console.log("Error select of Organization", e);
      }
    }
  }
  return (
    <div className="relative flex justify-between">
      <select
        className="appearance-none bg-transparent text-xl  text-gray-500 w-full focus:outline-none focus:outline-none  focus:border-none  border-none"
        value={selectedValue}
        onChange={handleChange}
      >
        {organizations.map((item, index) => (
          <option
            key={index}
            className=" bg-transparent mx-2 text-base text-gray-400"
            value={item._id}
          >
            {item.name}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default OrganizationDropDown;
