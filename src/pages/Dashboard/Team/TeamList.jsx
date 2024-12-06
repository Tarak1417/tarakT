import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  IconButton,
  Modal,
  Box,
  Grid,
  AccordionSummary,
  Accordion,
  AccordionDetails,
  FormControlLabel,
  Switch,
  FormGroup,
  Menu,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  tableCellClasses,
} from "@mui/material";
import { IoFilter } from "react-icons/io5";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { FaLongArrowAltUp, FaLongArrowAltDown } from "react-icons/fa";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";

const EmployeeTable = () => {
  const columns = [
    "Employee ID",
    "First Name",
    "Last Name",
    "Nick Name",
    "Email Address",
    "Department",
    "Designation",
    "Zoho Role",
    "Employment Type",
    "Employee Status",
    "Source of Hire",
    "Date of Joining",
    "Current Experience",
    "Total Experience",
    "Reporting Manager",
    "Date of Birth",
    "Age",
    "Gender",
    "Marital Status",
    "About Me",
    "Ask me about/Expertise",
    "Work Phone Number",
    "Extension",
    "Seating Location",
    "Tags",
    "Personal Mobile Number",
    "Personal Email Address",
    "Date of Exit",
    "Added By",
    "Modified By",
    "Added Time",
    "Modified Time",
    "Onboarding Status",
    "Present Address",
    "Permanent Address",
  ];
  const data = [
    {
      employeeId: "E001",
      firstName: "John",
      lastName: "Doe",
      nickname: "Johnny",
      email: "john.doe@example.com",
      department: "HR",
      designation: "Manager",
      zohoRole: "Admin",
      employmentType: "Full-time",
      employeeStatus: "Active",
      sourceOfHire: "Referral",
      dateOfJoining: "2020-01-15",
      currentExperience: "4 years",
      totalExperience: "6 years",
      reportingManager: "Jane Smith",
      dateOfBirth: "1990-02-25",
      age: 34,
      gender: "Male",
      maritalStatus: "Single",
      aboutMe: "Enthusiastic professional.",
      expertise: "Project Management",
      workPhoneNumber: "+1234567890",
      extension: "101",
      seatingLocation: "Building A, Floor 2",
      tags: "Team Player, Leader",
      personalMobileNumber: "+9876543210",
      personalEmailAddress: "john.doe.personal@example.com",
      dateOfExit: "N/A",
      addedBy: "Admin",
      modifiedBy: "Admin",
      addedTime: "2020-01-01",
      modifiedTime: "2024-01-01",
      onboardingStatus: "Completed",
      presentAddress: "123 Street, City, Country",
      permanentAddress: "456 Avenue, City, Country",
    },
    {
      employeeId: "E001",
      firstName: "John",
      lastName: "Doe",
      nickname: "Johnny",
      email: "john.doe@example.com",
      department: "HR",
      designation: "Manager",
      zohoRole: "Admin",
      employmentType: "Full-time",
      employeeStatus: "Active",
      sourceOfHire: "Referral",
      dateOfJoining: "2020-01-15",
      currentExperience: "4 years",
      totalExperience: "6 years",
      reportingManager: "Jane Smith",
      dateOfBirth: "1990-02-25",
      age: 34,
      gender: "Male",
      maritalStatus: "Single",
      aboutMe: "Enthusiastic professional.",
      expertise: "Project Management",
      workPhoneNumber: "+1234567890",
      extension: "101",
      seatingLocation: "Building A, Floor 2",
      tags: "Team Player, Leader",
      personalMobileNumber: "+9876543210",
      personalEmailAddress: "john.doe.personal@example.com",
      dateOfExit: "N/A",
      addedBy: "Admin",
      modifiedBy: "Admin",
      addedTime: "2020-01-01",
      modifiedTime: "2024-01-01",
      onboardingStatus: "Completed",
      presentAddress: "123 Street, City, Country",
      permanentAddress: "456 Avenue, City, Country",
    },
    {
      employeeId: "E001",
      firstName: "John",
      lastName: "Doe",
      nickname: "Johnny",
      email: "john.doe@example.com",
      department: "HR",
      designation: "Manager",
      zohoRole: "Admin",
      employmentType: "Full-time",
      employeeStatus: "Active",
      sourceOfHire: "Referral",
      dateOfJoining: "2020-01-15",
      currentExperience: "4 years",
      totalExperience: "6 years",
      reportingManager: "Jane Smith",
      dateOfBirth: "1990-02-25",
      age: 34,
      gender: "Male",
      maritalStatus: "Single",
      aboutMe: "Enthusiastic professional.",
      expertise: "Project Management",
      workPhoneNumber: "+1234567890",
      extension: "101",
      seatingLocation: "Building A, Floor 2",
      tags: "Team Player, Leader",
      personalMobileNumber: "+9876543210",
      personalEmailAddress: "john.doe.personal@example.com",
      dateOfExit: "N/A",
      addedBy: "Admin",
      modifiedBy: "Admin",
      addedTime: "2020-01-01",
      modifiedTime: "2024-01-01",
      onboardingStatus: "Completed",
      presentAddress: "123 Street, City, Country",
      permanentAddress: "456 Avenue, City, Country",
    },
    {
      employeeId: "E001",
      firstName: "John",
      lastName: "Doe",
      nickname: "Johnny",
      email: "john.doe@example.com",
      department: "HR",
      designation: "Manager",
      zohoRole: "Admin",
      employmentType: "Full-time",
      employeeStatus: "Active",
      sourceOfHire: "Referral",
      dateOfJoining: "2020-01-15",
      currentExperience: "4 years",
      totalExperience: "6 years",
      reportingManager: "Jane Smith",
      dateOfBirth: "1990-02-25",
      age: 34,
      gender: "Male",
      maritalStatus: "Single",
      aboutMe: "Enthusiastic professional.",
      expertise: "Project Management",
      workPhoneNumber: "+1234567890",
      extension: "101",
      seatingLocation: "Building A, Floor 2",
      tags: "Team Player, Leader",
      personalMobileNumber: "+9876543210",
      personalEmailAddress: "john.doe.personal@example.com",
      dateOfExit: "N/A",
      addedBy: "Admin",
      modifiedBy: "Admin",
      addedTime: "2020-01-01",
      modifiedTime: "2024-01-01",
      onboardingStatus: "Completed",
      presentAddress: "123 Street, City, Country",
      permanentAddress: "456 Avenue, City, Country",
    },
  ];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));
  return (
    <TableContainer
      style={{ overflowX: "auto" }}
      className="text-nowrap"
      component={Paper}
    >
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} style={{ whiteSpace: "nowrap" }}>
                <div className="flex flex-row gap-6 text-center">
                  <div>
                    <h1>{column}</h1>
                  </div>
                  <div className="flex flex-row justify-center items-center text-2xl">
                    <IoIosArrowRoundUp />
                    <IoIosArrowRoundDown />
                  </div>
                </div>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell>{row.employeeId}</StyledTableCell>
              <StyledTableCell>{row.firstName}</StyledTableCell>
              <StyledTableCell>{row.lastName}</StyledTableCell>
              <StyledTableCell>{row.nickname}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.department}</StyledTableCell>
              <StyledTableCell>{row.designation}</StyledTableCell>
              <StyledTableCell>{row.zohoRole}</StyledTableCell>
              <StyledTableCell>{row.employmentType}</StyledTableCell>
              <StyledTableCell>{row.employeeStatus}</StyledTableCell>
              <StyledTableCell>{row.sourceOfHire}</StyledTableCell>
              <StyledTableCell>{row.dateOfJoining}</StyledTableCell>
              <StyledTableCell>{row.currentExperience}</StyledTableCell>
              <StyledTableCell>{row.totalExperience}</StyledTableCell>
              <StyledTableCell>{row.reportingManager}</StyledTableCell>
              <StyledTableCell>{row.dateOfBirth}</StyledTableCell>
              <StyledTableCell>{row.age}</StyledTableCell>
              <StyledTableCell>{row.gender}</StyledTableCell>
              <StyledTableCell>{row.maritalStatus}</StyledTableCell>
              <StyledTableCell>{row.aboutMe}</StyledTableCell>
              <StyledTableCell>{row.expertise}</StyledTableCell>
              <StyledTableCell>{row.workPhoneNumber}</StyledTableCell>
              <StyledTableCell>{row.extension}</StyledTableCell>
              <StyledTableCell>{row.seatingLocation}</StyledTableCell>
              <StyledTableCell>{row.tags}</StyledTableCell>
              <StyledTableCell>{row.personalMobileNumber}</StyledTableCell>
              <StyledTableCell>{row.personalEmailAddress}</StyledTableCell>
              <StyledTableCell>{row.dateOfExit}</StyledTableCell>
              <StyledTableCell>{row.addedBy}</StyledTableCell>
              <StyledTableCell>{row.modifiedBy}</StyledTableCell>
              <StyledTableCell>{row.addedTime}</StyledTableCell>
              <StyledTableCell>{row.modifiedTime}</StyledTableCell>
              <StyledTableCell>{row.onboardingStatus}</StyledTableCell>
              <StyledTableCell>{row.presentAddress}</StyledTableCell>
              <StyledTableCell>{row.permanentAddress}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default function TeamList() {
  const [dataType, setDataType] = React.useState("allData");
  const [departmentType, setDepartmentType] = React.useState("allDepartment");
  const [locationType, setLocationType] = React.useState("allLocation");
  const [modal, setModal] = useState(false);

  const fieldFilterOptions = [
    { label: "Employee ID" },
    { label: "First Name" },
    { label: "Last Name" },
    { label: "Nick Name" },
    { label: "Email Address" },
    { label: "Department" },
    { label: "Designation" },
    { label: "Zoho Role" },
    { label: "Employment Type" },
    { label: "Employee Status" },
    { label: "Source of Hire" },
    { label: "Date of Joining" },
    { label: "Current Experience" },
    { label: "Total Experience" },
    { label: "Reporting Manager" },
    { label: "Date of Birth" },
    { label: "Age" },
    { label: "Gender" },
    { label: "Marital Status" },
    { label: "About Me" },
    { label: "Ask me about/Expertise" },
    { label: "Work Phone Number" },
    { label: "Extension" },
    { label: "Seating Location" },
    { label: "Tags" },
    { label: "Personal Mobile Number" },
    { label: "Personal Email Address" },
    { label: "Date of Exit" },
    { label: "Added By" },
    { label: "Modified By" },
    { label: "Added Time" },
    { label: "Modified Time" },
    { label: "Onboarding Status" },
    { label: "Present Address" },
    { label: "Permanent Address" },
  ];

  const handleChange = (event) => {
    setDataType(event.target.value);
  };
  const handleDepartmentType = (event) => {
    setDepartmentType(event.target.value);
  };
  const handleLocationType = (event) => {
    setLocationType(event.target.value);
  };
  const handleCloseModal = () => {
    setModal(false);
  };

  const handleOpenModal = () => {
    setModal(true);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="w-full h-full flex gap-4 flex-col justify-center items-start relative">
      <div className="w-full flex gap-3 justify-end items-center">
        <FormControl style={{ minWidth: "160px" }}>
          <InputLabel id="demo-simple-select-label">Data Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={dataType}
            label="Data Type"
            onChange={handleChange}
          >
            <MenuItem value={"allData"}>All Data</MenuItem>
            <MenuItem value={"reporteeData"}>Reportee's Data</MenuItem>
            <MenuItem value={"directData"}>Direct's Data</MenuItem>
            <MenuItem value={"myData"}>My Data</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained">Add Employee(s)</Button>
        <IconButton onClick={handleOpenModal}>
          <IoFilter />
        </IconButton>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {" "}
            <HiOutlineDotsHorizontal />
          </IconButton>
          <Menu
            id="basic-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>
              <FaLongArrowAltUp />
              Import
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FaLongArrowAltDown />
              Export
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FaLongArrowAltUp />
              History Export
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <FaLongArrowAltDown />
              Bulk File Upload
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="w-full h-full">{EmployeeTable()}</div>
      <div className="w-full h-full">
        <Grid className="w-full h-full flex flex-row justify-between items-center ">
          <div>
            <h1>Total Record Count : 5</h1>
          </div>
          <div className="flex flex-row gap-5 justify-between items-center">
            <div>
              <FormControl>
                <InputLabel id="record-per-page">Record Per Page</InputLabel>
                <Select
                  className="min-w-40"
                  labelId="record-per-page"
                  id="record-per-page"
                  value={10}
                  label="Record Per Page"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="flex flex-row gap-5 justify-center items-center text-center">
              <IconButton>
                <FaLessThan />
              </IconButton>
              <h1>1 - 4</h1>
              <IconButton>
                <FaGreaterThan />
              </IconButton>
            </div>
          </div>
        </Grid>
      </div>
      <div>
        <Modal
          open={modal}
          onClose={handleCloseModal}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <Grid
            sx={{
              padding: 2,
              backgroundColor: "background.default",
              justifyContent: "start",
              justifyItems: "start",
              alignItems: "start",
              flexDirection: "column",
              minHeight: "100dvw",
            }}
            className="absolute top-0 right-0 w-80 flex gap-4"
          >
            <div>
              <h1>Filter</h1>
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="system-filter"
                  id="system-filter"
                >
                  System Filter
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col gap-6">
                    <FormControl style={{ minWidth: "180px" }}>
                      <InputLabel id="department">Department</InputLabel>
                      <Select
                        labelId="department"
                        id="department"
                        value={departmentType}
                        label="Department"
                        onChange={handleDepartmentType}
                      >
                        <MenuItem value={"allDepartment"}>
                          All Department
                        </MenuItem>
                        <MenuItem value={"management"}>Management</MenuItem>
                        <MenuItem value={"marketing"}>Marketing</MenuItem>
                        <MenuItem value={"it"}>IT</MenuItem>
                        <MenuItem value={"hr"}>HR</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl style={{ minWidth: "180px" }}>
                      <InputLabel id="location">Location</InputLabel>
                      <Select
                        labelId="location"
                        id="location"
                        value={locationType}
                        label="Location"
                        onChange={handleLocationType}
                      >
                        <MenuItem value={"allLocation"}>All Location</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="field-filter"
                  id="field-filter"
                >
                  Field Filter
                </AccordionSummary>
                <AccordionDetails>
                  <div className="flex flex-col gap-6">
                    {fieldFilterOptions.map((item) => {
                      return (
                        <FormGroup key={item.label}>
                          <FormControlLabel
                            required
                            control={<Switch checked={true} />}
                            label={item.label}
                          />
                        </FormGroup>
                      );
                    })}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Modal>
      </div>
    </div>
  );
}
