import React, { useEffect, useState } from "react";
import {
  Box,
  Tab,
  TabList,
  TabContext,
  TabPanel,
  Card,
  CardContent,
  Typography,
  Button,
  Input,
  TextField,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// Tabs Section
const ListOrganization = () => {
  const navigate = useNavigate();
  const [organizations, setOrganization] = useState([]);

  async function handleDelete(org) {
    try {
      const response = await axios.delete(`/hr/organization/${org._id}`);

      let data = response.data;
      if (data.success) {
        getOrganizations();
        // setShowMessage({
        //   show: true,
        //   message: "Subscribe Successfully",
        //   severity: "success",
        // });
      }
    } catch (e) {
      console.log("Payment method created:", e);
      // setShowMessage({
      //   show: true,
      //   message: "Error creating Subscriptions ",
      //   severity: "error",
      // });
    }
    return { name: "" };
  }

  function handleEdit(org) {
    return { name: "" };
  }

  async function handleSelect(org) {
    if (org.status) {
      try {
        const response = await axios.post(`/hr/organization/select`, {
          organizationId: org._id,
        });
        let data = response.data;
        if (data.success) {
          localStorage.setItem("org", JSON.stringify(org));
          navigate("/");
        }
      } catch (e) {
        console.log("Error select of Organization", e);
      }
    }
  }

  const getColor = (status = false) => {
    if (status) {
      return "bg-green-300 text-green-700";
    } else {
      return "bg-red-300 text-red-700";
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);

  const getOrganizations = async () => {

    let organizationName =  localStorage.getItem("tempOrganization" )
    setOrganization([  { name:"Test Org" , status : true } , { name:organizationName , status : true }]);

    try {
      const response = await axios.get(`/hr/organization`);
      let data = response.data;
      if (data.success) {
        setOrganization(data.data);
      }
    } catch (e) {
      console.log("Error List of Organization", e);
    }
  };

  return (
    <Box
      className="h-screen"
      sx={{
        backgroundColor: "background.main",
        paddingX: { xs: 3, sm: 5 },
        paddingY: 10,
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <Box sx={{ paddingRight: { xs: 0, sm: 25 } }}>
        <Typography variant="h4">Organization List</Typography>
        <Typography sx={{ marginTop: ".7rem", color: "text.three" }}>
          HR organization refers to the style of coordination, communication and
          management, a team or an employee uses through out his/her contract
          with the organization.
        </Typography>
        <Typography sx={{ marginTop: 5, color: "text.three" }}>
          Total Organization
        </Typography>
        <Typography
          variant="h4"
          sx={{ marginTop: ".2rem", marginBottom: 5, color: "text.three" }}
        >
          {organizations.length}
        </Typography>
      </Box>

      <Box className="px-2" sx={{ overflowX: "auto" }}>
        <Grid container sx={{ p: 1, minWidth: 525 }}>
          <Grid item xs={8}>
            Organization
          </Grid>
          <Grid item xs={2}>
            Status
          </Grid>
          <Grid item xs={2}>
            Action
          </Grid>
        </Grid>
        <Divider sx={{ minWidth: 525 }} />
        <Box>
          {organizations.map((org, index) => (
            <Grid container sx={{ p: 1, minWidth: 525 }}>
              <Grid item xs={8}>
                <div onClick={() => handleSelect(org)}>{org.name}</div>
              </Grid>
              <Grid item xs={2}>
                <div
                  className={`px-3 py-1 rounded-lg w-fit ${getColor(
                    org.status
                  )} `}
                >
                  {org.status ? "Active" : "In-active"}
                </div>
              </Grid>
              <Grid item xs={2}>
                <EditIcon
                  sx={{ color: "blue", marginRight: 1.5 }}
                  onClick={() => handleEdit(org)}
                />
                <DeleteIcon color="error" onClick={() => handleDelete(org)} />
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ListOrganization;
