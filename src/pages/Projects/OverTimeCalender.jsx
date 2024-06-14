import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  ListItemAvatar,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
  Select,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import useErrorHandler from "../../hooks/useErrorHandler";
import { Form, Submit, useForm } from "../../hooks/useForm/useForm";
import axios from "axios";
import { useMessage } from "../../components/Header";
import { SelectWithSearch } from "../../components/Select";
import { Input } from "../../hooks/useForm/inputs";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import view from "../ReceivedApp/viewicon.png";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const OverTime = () => {
  const [employees, setEmployees] = useState({});
  const [currentScreen, setCurrentScreen] = useState(1);

  const handlePrevScreen = () => {
    if (currentScreen > 1) {
      setCurrentScreen(currentScreen - 1);
    }
  };

  const handleNextScreen = () => {
    if (currentScreen < 2) {
      setCurrentScreen(currentScreen + 1);
    }
  };

  const userData = [
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:50 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:50 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Holiday",
      clockIn: "-- -- --",
      clockOut: "-- -- --",
      progress: "Present & Late",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Present",
      clockIn: "09:00 AM",
      clockOut: "05:00 PM",
      progress: "Present",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
    {
      Id: "#29",
      date: "2024-04-18",
      Project: "Monday",
      status: "Late",
      clockIn: "09:09 AM",
      clockOut: "05:00 PM",
      progress: "Holiday",
      action: <img src={view} alt="view" className="w-4 h-4" />,
    },
  ];

  const getColor = (status) => {
    switch (status) {
      case "Present":
        return { bgColor: "bg-green-950", textColor: "text-green-500" };
      case "Holiday":
        return { bgColor: "bg-sky-950", textColor: "text-sky-500" };
      case "Late":
        return { bgColor: "bg-red-950", textColor: "text-red-500" };
      default:
        return { bgColor: "bg-gray-900", textColor: "text-gray-500" };
    }
  };

  const getProgressBarStyle = (status) => {
    switch (status) {
      case "Present":
        return { width: "100%", backgroundColor: "#34D399" };
      case "Holiday":
        return { width: "100%", backgroundColor: "#6B7280" };
      case "Late":
        return { width: "75%", backgroundColor: "#34D399" };
      case "Present & Late":
        return { width: "75%", backgroundColor: "#34D399" };
      default:
        return { width: "100%", backgroundColor: "#6B7280" };
    }
  };

  const avatarData = [
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
    {
      alt: "Remy Sharp",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&s",
    },
  ];

  const Months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };
  const [date, setDate] = useState({
    employeeId: "",
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const Years = Array(41)
    .fill(1)
    .map((el, i) => i + 2009);

  const [tab, setTab] = useState("task");

  const handleTabChange = (newTab) => {
    setTab(newTab);
  };

  console.log(tab);
  const errorHandler = useErrorHandler();
  const navigate = useNavigate();

  const handlers = useForm(
    useMemo(
      () => ({
        employeeId: { required: true },
        from: { required: true },
        to: { required: true },
        salary: { required: true },
        status: { required: true, value: "unPaid" },
        hraAllowance: { required: true },
        conveyance: { required: true },
        medicalAllowance: { required: true },
        bonusAllowance: { required: true },
        pf: { required: true },
        professionalTax: { required: true },
        tds: { required: true },
        loanAndOthers: { required: true },
      }),
      []
    ),
    { Input: TextField }
  );

  const values = handlers.values;
  const setValues = handlers.setValues;

  const fetchEmployees = useCallback(
    async (employeeSearch = "") => {
      try {
        const response = await axios.get(
          `/hr/employee?pageSize=10${
            employeeSearch ? `&searchBy=firstName&search=${employeeSearch}` : ""
          }`
        );

        setEmployees([]);
        const employees = response.data.employees;

        const formattedEmployees = {};

        employees.forEach(
          (employee) =>
            (formattedEmployees[
              employee._id
            ] = `${employee.firstName} ${employee.lastName}`)
        );

        setEmployees(formattedEmployees);
      } catch (e) {
        console.log(e);
      }
    },
    [setEmployees]
  );

  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  const handleChangeQuery = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ [name]: value });
  };

  const { showSuccess, showError } = useMessage();
  const submit = (res) => {
    const { success } = res.data;
    if (!success) return showError("payroll not added");
    navigate("/employee-salary");
    showSuccess("Add payroll successfully");
  };

  const calculatedSalary = useMemo(() => {
    const {
      hraAllowance,
      medicalAllowance,
      conveyance,
      bonusAllowance,
      pf,
      professionalTax,
      tds,
      loanAndOthers,
      salary,
    } = values;
    const totalAllowance =
      parseFloat(hraAllowance) +
        parseFloat(medicalAllowance) +
        parseFloat(conveyance) +
        parseFloat(bonusAllowance) || 0;
    const totalDeduction =
      parseFloat(pf) +
        parseFloat(professionalTax) +
        parseFloat(tds) +
        parseFloat(loanAndOthers) || 0;
    const netSalary = parseInt(salary) + totalAllowance - totalDeduction || 0;

    return { totalAllowance, totalDeduction, netSalary };
  }, [values]);

  return (
    <>
      <Box
        sx={{ backgroundColor: "background.main" }}
        className="h-full overflow-hidden "
      >
        <Box sx={{ mt: 3 , ml:3 }}>
          <Grid container spacing={4} display="flex" alignItems="center">
            <Grid item xs>
              <Typography variant="h5">Overview Calender</Typography>
            </Grid>

            <Grid item display="flex" alignItems="center">
              <Box sx={{ ml: 2 }}>
                <button className="  items-center text-white font-bold text-[10px] md:text-[12px] py-1 md:py-1 px-2 md:px-3 rounded bg-sky-500 hover:bg-sky-700">
                  Create New Projet
                </button>
                <Tooltip title="info" placement="top">
                  <IconButton disableRipple variant="navIcon" sx={{ mr: 0 }}>
                    <InfoOutlinedIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <div>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar slotProps={{ textField: { size: "big" } }} />
          </LocalizationProvider>
        </div>
        <div
          className="h-full"
          style={{ overflowY: "auto", paddingRight: "1px" }}
        >
          <Grid container justifyContent="center" height="100%">
            <Grid item xs={11}>
              <Box mb={4}>
                <Card elevation={0}>
                  <CardContent>
                    <Box pb={8}>
                      <Form
                        handlers={handlers}
                        onSubmit={submit}
                        onError={errorHandler}
                        action="/hr/rules"
                        method="post"
                      >
                        <Typography>Task OverView This month</Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <div className="mt-[20px]">
                              <Typography
                                variant="subtitle1"
                                component="p"
                                mb={1}
                                mx={1}
                              >
                                Form
                              </Typography>
                            </div>

                            <Input
                              name="field3"
                              fullWidth
                              size="small"
                              type="date"
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <div className="mt-[20px]">
                              <Typography
                                variant="subtitle1"
                                component="p"
                                mb={1}
                                mx={1}
                              >
                                to
                              </Typography>
                            </div>

                            <Input
                              name="field4"
                              fullWidth
                              size="small"
                              type="date"
                            />
                          </Grid>

                          <Grid item xs={12} md={12}>
                            <Typography
                              variant="subtitle1"
                              component="p"
                              mb={1}
                              mx={1}
                            >
                              Assigned Team{" "}
                            </Typography>
                            <Select
                              name="priority"
                              fullWidth
                              variant="outlined"
                              size="small"
                            >
                              <MenuItem value="High">High</MenuItem>
                              <MenuItem value="Medium">Medium</MenuItem>
                              <MenuItem value="Low">Low</MenuItem>
                            </Select>
                          </Grid>
                        </Grid>
                        <Submit>
                          {(loader) => (
                            <Button
                              type="submit"
                              variant="contained"
                              disabled={loader}
                              sx={{ float: "right", my: 4 }}
                            >
                              Search
                            </Button>
                          )}
                        </Submit>
                      </Form>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </div>
        <style jsx>{`
          .h-full::-webkit-scrollbar {
            display: none;
          }
          .h-full {
            scrollbar-width: none;
          }
        `}</style>
      </Box>
    </>
  );
};

export default OverTime;
