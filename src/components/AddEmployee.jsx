import {
  Box,
  Button,
  Card,
  MenuItem,
  Select,
  TextField,
  Typography,
  Grid
} from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import useErrorHandler from "../hooks/useErrorHandler";
import { useMessage } from "./Header";
import { Form, Submit, useForm } from "../hooks/useForm/useForm";
import { Input } from "../hooks/useForm/inputs";

const AddEmployee = () => {
  const userId = "662a20af3cf627cfd7eb7090"; // Static userId
  const adminId = "666fc89dc53c1dde21a36a73"; // Static adminId
  const [departments, setDepartments] = useState([]);
  const { showError, showSuccess } = useMessage();
  const errorHandler = useErrorHandler();
  const [designation, setDesignation] = useState([]);
  const fetchDepartments = useCallback(
    async function () {
      try {
        const response = await axios.get(`/hr/department`);
        setDepartments(response.data.departments);
      } catch (e) {
        errorHandler(e);
      }
    },
    [errorHandler]
  );

  const [pageNo, setPageNo] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  const [verifyEmail, setVerifyEmail] = useState(true);
  const [jobs, setJobs] = useState(null);
  const [originalOrder, setOriginalOrders] = useState(null);
  const [offset, setOffset] = useState(0);

  const fetchJobListing = useCallback(
    async (search = "") => {
      try {
        const response = await axios.get(
          `/hr/job-listing?searchBy=title&search=${search}&sortBy=order&direction=-1&page=${pageNo}`
        );
        const body = response.data;
        const { jobs, pageData } = body;
        const { currentPage, pageSize } = pageData;
        setJobs(jobs);
        setOffset((currentPage - 1) * pageSize);
        setPageLimit(response.data.pageData.totalPages);
      } catch (e) {
        console.warn(e);
      }
    },
    [setJobs, pageNo]
  );

  const verifyUserByEmail =  async (email) => {
      try {
        var formData = new FormData();
          formData.append("email", email);
        const response = await fetch("https://accounts.clikkle.com:5000/api/auth/get_user_by_mail",
          {
              method: "POST",
              body: formData
          },

      );
      if (response.ok) {
       setVerifyEmail(false)
      } else {
        showError('user not found please use clikkle registered accounts')
          console.log('user not found')
      }
      } catch (e) {
        showError('User not found')
        console.warn(e);
      }
    }
  // console.log(jobs);

  useEffect(() => {
    fetchJobListing();
  }, [fetchJobListing]);

  const handlers = useForm(
    useMemo(
      () => ({
        userId: { final: () => userId },
        adminId: { final: () => adminId },
        firstName: { required: true },
        lastName: { required: true },
        email: {
          required: true,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        },
        dateOfBirth: { required: true },
        gender: { required: true },
        department: { required: true },
        designation: { required: true },
        jobType: { required: true },
        status: { required: true },
        startDate: { required: true },
        shiftStartTime: { required: true },
        shiftEndTime: { required: true },
        timezone: { required: true },
      }),
      []
    ),
    { Input: TextField }
  );

  const onSubmit = (res) => {
    const { success, message } = res.data;

    if (!success) return showError(message);

    showSuccess("Employee added successfully");
  };

  const onSelectHandler = (e) => {
    const { name, value } = e.target;
    handlers.setValues({ [name]: value });
  };

  useEffect(() => {
    fetchDepartments();
  }, [fetchDepartments]);

  // console.log("handlers.values.designation", handlers.values.designation);

  const handleBlur = () => {
     if (handlers.values.email) {
      verifyUserByEmail(handlers.values.email)
      // console.log("handlers ", handlers.values.email);
    //   setError('Input cannot be empty.');
     }
  };

  return (
    <Card
      sx={{
        boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        borderRadius: "8px",
        maxWidth: "900px",
        width: "100%",
        px: 4,
        py: 3,
        mx: 2,
        maxHeight: "85vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <Typography variant="h6" mb={3}>
        Add Employee
      </Typography>
      <Form
        handlers={handlers}
        onSubmit={onSubmit}
        action="/hr/employee/byadmin"
        method="post"
        final={(values) => ({
          ...values,
          shiftStart: {
            hour: values.shiftStartTime.split(":")[0],
            minute: values.shiftStartTime.split(":")[1],
          },
          shiftEnd: {
            hour: values.shiftEndTime.split(":")[0],
            minute: values.shiftEndTime.split(":")[1],
          },
          dateOfJoining: new Date(values.startDate),
        })}
        onError={errorHandler}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>First Name</Typography>
            <Input name="firstName" fullWidth type="text" size="small" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Last Name</Typography>
            <Input name="lastName" fullWidth type="text" size="small" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Email</Typography>
            <Input   onBlur={handleBlur} name="email" fullWidth type="email" size="small" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Date of Birth</Typography>
            <Input
              name="dateOfBirth"
              fullWidth
              type="date"
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Gender</Typography>
            <Select
              required
              name="gender"
              fullWidth
              size="small"
              displayEmpty
              sx={{ mb: 2 }}
              value={handlers.values.gender || ""}
              onChange={onSelectHandler}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
              <MenuItem value="Non-binary">Others</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Designation</Typography>
            <Select
              required
              name="designation"
              fullWidth
              displayEmpty
              size="small"
              sx={{ mb: 2 }}
              value={handlers.values.designation || ""}
              onChange={onSelectHandler}
            >
              {jobs &&
                jobs.map((job) => (
                  <MenuItem key={job._id} value={job._id}>
                    {job.title}
                  </MenuItem>
                ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Department</Typography>
            <Select
              required
              name="department"
              fullWidth
              displayEmpty
              size="small"
              sx={{ mb: 2 }}
              value={handlers.values.department || ""}
              onChange={onSelectHandler}
            >
              {departments.map((department) => (
                <MenuItem key={department._id} value={department._id}>
                  {department.name}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Job Type</Typography>
            <Select
              required
              name="jobType"
              fullWidth
              size="small"
              displayEmpty
              sx={{ mb: 2 }}
              value={handlers.values.jobType || ""}
              onChange={onSelectHandler}
            >
              <MenuItem value="Part Time">Part Time</MenuItem>
              <MenuItem value="Full Time">Full Time</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Status</Typography>
            <Select
              required
              name="status"
              fullWidth
              size="small"
              displayEmpty
              sx={{ mb: 2 }}
              value={handlers.values.status || ""}
              onChange={onSelectHandler}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Terminated">Terminated</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Start Date</Typography>
            <Input name="startDate" fullWidth type="date" size="small" required />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Shift Start</Typography>
            <Input
              name="shiftStartTime"
              size="small"
              type="time"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Shift End</Typography>
            <Input
              name="shiftEndTime"
              type="time"
              fullWidth
              size="small"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Time Zone</Typography>
            <Select
              onChange={onSelectHandler}
              value={handlers.values.timezone || ""}
              fullWidth
              required
              displayEmpty
              name="timezone"
              size="small"
            >
              {Intl.supportedValuesOf("timeZone")?.map((timezone) => (
                <MenuItem key={timezone} value={timezone}>
                  {timezone}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Box my={2} textAlign="right">
          <Submit>
            {(loader) => (
              <Button
                type="submit"
                variant="contained"
                disabled={Boolean(loader) && verifyEmail}
                endIcon={loader}
                sx={{
                  mt: 1,
                }}
              >
                Add Employee
              </Button>
            )}
          </Submit>
        </Box>
      </Form>
    </Card>
  );
};

export default AddEmployee;
