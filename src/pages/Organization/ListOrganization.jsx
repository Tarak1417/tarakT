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
// Tabs Section
const ListOrganization = () => {
  const navigate = useNavigate();
  const [organizations, setOrganization] = useState([{ ide: 1 }]);

  function handleDelete() {
    return { name: "" };
  }

  function handleEdit() {
    return { name: "" };
  }

  function handleSelect() {
    navigate("/");
  }

  const getColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-green-300 text-green-700";
      case "In-active":
        return "bg-red-300 text-red-700";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

   useEffect(()=>{
    getOrganizations();
   },[])

   const getOrganizations = async ()=>{
    let organizationName  = localStorage.getItem("tempOrganization") ?? "N/A";
    setOrganization(  [{ name : organizationName , state : "Active" } ])
   }

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [createData("test", "Active", "edit ")];

  return (
    <Box
      className="h-screen"
      sx={{
        backgroundColor: "background.main",
        paddingX: { xs : 3,sm : 5 },
        paddingY: 10,
        width: "100vw",
        minHeight: "100vh",
      }}
    >
      <Box sx={{  paddingRight:  { xs : 0  ,  sm : 25 }  }}>
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
          {rows.length}
        </Typography>
      </Box>

      <Box className="px-2" sx={ {   overflowX: 'auto'} }  >
      <Grid container sx={{ p: 1 , minWidth : 525  }}>
        <Grid item  xs={8}>
          Organization
        </Grid>
        <Grid item  xs={2}>
          Status
        </Grid>
        <Grid item  xs={2}>
          Action
        </Grid>
      </Grid>
      <Divider sx={{  minWidth : 525  }} />
      <Box>
        {organizations.map((org, index) => (
          <Grid container sx={{ p: 1 , minWidth : 525  }}>
            <Grid item  xs={8} >
              <div onClick={handleSelect} >
              {org.name}
              </div>
            </Grid>
            <Grid item  xs={2} >
              <div className={`px-3 py-1 rounded-lg w-fit ${getColor(org.state)} `}  >
              {org.state}
              </div>
            </Grid>
            <Grid item  xs={2} >
              <EditIcon  sx={{ color: "blue", marginRight: 1.5 }} onClick={handleEdit} />
              <DeleteIcon color="error" onClick={handleDelete} />
            </Grid>
          </Grid>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default ListOrganization;
