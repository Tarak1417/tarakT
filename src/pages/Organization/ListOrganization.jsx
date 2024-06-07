import React, { useState } from "react";
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
} from "@mui/material";

// Tabs Section
const ListOrganization = () => {
  const [activeTab, setActiveTab] = useState(1); // Start with the second tab active
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [createData("test" , "Active" , "edit ")];

  return (
    <Box
      className="h-screen"
      sx={{ backgroundColor: "background.main", paddingX: 5, paddingY: 10 }}
    >
      <Box sx={{ paddingRight: 25 }}>
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
      <TableContainer
        component={Paper}
        sx={{ backgroundColor: "background.main" ,  minHeight: 330,}}
      >
        <Table
          sx={{
            minWidth: 650,
            backgroundColor: "background.main",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "50%" }}>Organization</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ListOrganization;
