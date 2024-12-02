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
  Tooltip,
  Avatar,
  Modal,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useMessage } from "../../components/Header";
import { ServerImage } from "../../components/Images";
import useModal from "../../hooks/useModal";
import DeleteOrganization from "./DeleteOrganization";
import { setCookie } from "../../utilities/cookies";
// Tabs Section
const ListOrganization = () => {
  const navigate = useNavigate();
  const [organizations, setOrganization] = useState([]);
  const [deleteOrg, setDeleteOrg] = useState(null);
  const { showError, showSuccess } = useMessage();
  const { modalState, openModal, closeModal } = useModal();

  async function handleDelete(org) {
    try {
      const response = await axios.delete(`/hr/organization/${org._id}`);

      let data = response.data;
      if (data.success) {
        getOrganizations();
        showSuccess("Organization Delete Successfully");
        setDeleteOrg(null);
        // setShowMessage({
        //   show: true,
        //   message: ,
        //   severity: "success",
        // });
      }
    } catch (e) {
      console.log("Error Deleting Organization ", e);
      showError("Error Deleting Organization ");
    }
  }

  function openDeleteBox(org) {
    openModal();
    setDeleteOrg(org);
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
          setCookie("orgToken", data.data);
          localStorage.setItem("org", JSON.stringify(org));
          setTimeout(() => {
            navigate("/");
          }, [1000]);
        }
      } catch (e) {
        console.log("Error select of Organization", e);
        showError("Error select of Organization");
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

  const getOrganizations = async () => {
    try {
      const response = await axios.get(`/hr/organization`);
      let data = response.data;
      if (data.success) {
        if (data.data.length === 0) {
         // navigate("/createOrganization");
          
         setOrganization([]);

        } else {
          setOrganization(data.data);
        }
      }
    } catch (e) {
      console.log("Error List of Organization", e);
    }
  };

  useEffect(() => {
    getOrganizations();
  }, []);

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
            <Grid key={index} container sx={{ p: 1, minWidth: 565 }}>
              <Grid item xs={7} sm={8}>
                <div className="flex flex-row gap-2">
                  <Avatar sx={{ width: 30, height: 30, fontSize: 12 }}>
                    {" "}
                    <ServerImage src={org?.logo ?? ""} width="30" height="30" />
                  </Avatar>
                  <div
                    className="px-3 py-1 mr-2 truncate rounded-lg hover:text-sky-600 active:text-blue-600 "
                    onClick={() => handleSelect(org)}
                  >
                    {org.name}
                  </div>
                </div>
              </Grid>
              <Grid item xs={2} sm={2}>
               <div
  className={`px-3 py-1 rounded-lg w-fit`}
  style={{
    backgroundColor: org.status ? "#003300" : "#330000", // Dark green for active, dark red for inactive
    color: org.status ? "lime" : "tomato", // Text color: Lime for active, tomato for inactive
  }}
>
  {org.status ? "Active" : "In-active"}
</div>
              </Grid>
              <Grid item xs={3} sm={2}>
                

                <Tooltip title="Delete Organization">
                  <IconButton variant="outlined">
                    <DeleteIcon
                      color="error"
                      onClick={() => openDeleteBox(org)}
                    />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          ))}
        </Box>
      </Box>
      <Modal
        sx={{
          overflowY: "scroll",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        open={modalState}
        onClose={closeModal}
      >
        <DeleteOrganization
          onClose={closeModal}
          onDelete={handleDelete}
          org={deleteOrg}
        />
      </Modal>
    </Box>
  );
};

export default ListOrganization;
