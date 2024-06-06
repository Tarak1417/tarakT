import React from "react";
import {
  Box,
  Card,
  CardContent,
  Tab,
  CardActions,
  ListItemIcon,
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Grid,
} from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
// import TaskAltIcon from '@mui/icons-material/CheckCircleOutline';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     // maxWidth: 300,
//     padding: "1rem",
//   },
//   title: {
//     fontSize: "1rem",
//     fontWeight: "900",
//     marginTop: "1rem",
//     marginBottom: ".3rem",
//   },
//   actionArea: {
//     backgroundColor: theme.palette.primary.main,
//     borderRadius: "0 0 4px 4px",
//     padding: theme.spacing(2),
//   },
//   textField: {
//     "& .MuiOutlinedInput-root": {
//       borderRadius: 4,
//       // border: "0.5px solid black",
//     },
//   },
//   buttonContainer: {
//     display: "flex",
//     justifyContent: "flex-end",
//     marginTop: theme.spacing(2),
//   },
//   listItem: {
//     padding: "0 0 30px 0",
//   },
// }));

const CardSection = () => {
  // const classes = useStyles();

  return (
    <Box
      sx={{
        // display:"flex",
        // justifyContent:"center",
        margin: "2rem",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",

          // margin:'2rem'
        }}
      >
        {/* Card One */}
        <Grid item md={4} lg={4}>
          <Card
            className="p-4"
            sx={{
              backgroundColor: "background.cardView",
              height: "100%",
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Tab
                  label="current Plan"
                  sx={{
                    border: "1px solid #000",
                  }}
                />
                <Tab
                  label="clikkle Plus"
                  sx={{
                    border: "1px solid #000",
                  }}
                />
              </Box>
              <div 
               className="text-base font-black mt-4 mb-1"
              
              >
                <Typography variant="h6" component="h2">
                  Current Plan
                </Typography>
              </div>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                7 days free trial, then $50/month
              </Typography>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontWeight: "600",
                  marginTop: "1rem",
                }}
              >
                All Features Included:
              </Typography>
              <List dense>
                <ListItem className="d-flex justify-between">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Document Management System"
                  />
                </ListItem>
                <ListItem className="d-flex">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Compliance Management"
                  />
                </ListItem>
                <ListItem className="d-flex  ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Employee Self-Service Portal"
                  />
                </ListItem>
                <ListItem className="d-flex justify-between ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Automated Payroll Processing"
                  />
                </ListItem>
                <ListItem className="d-flex  ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Time and Attendance Tracking"
                  />
                </ListItem>
                <ListItem className="d-flex  ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Performance Management"
                  />
                </ListItem>
                <ListItem className="d-flex  ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Recruitment and Onboarding"
                  />
                </ListItem>
                <ListItem className="d-flex justify-between ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Customizable Reports and Analytics"
                  />
                </ListItem>
                <ListItem className="d-flex justify-between ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="Real-Time Notifications and Alerts on Desktop and Mobile Device."
                  />
                </ListItem>
                <ListItem className="d-flex justify-between ">
                  <TaskAltIcon
                    color="primary"
                    sx={{
                      fontSize: "18px",
                    }}
                  ></TaskAltIcon>
                  <ListItemText
                    className="ps-2"
                    primary="24/7 Customer Support"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>
        {/* card two */}
        <Grid item md={4} lg={4}>
          <Card
            className="p-4"
            sx={{
              height: "100%",
              backgroundColor: "background.card",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" 
               className="text-base font-black mt-4 mb-1"
              >
                Billing Information
              </Typography>
              <Box
                sx={{
                  marginTop: "2rem",
                }}
              >
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    Full Name on card
                    <TextField
                      // label="Full Name"
                      placeholder="Full Name"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    Card Number
                    <TextField
                      placeholder="Card Number"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                  <Grid item xs={4}>
                    Expiration Date
                    <TextField
                      placeholder="01/09"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                  <Grid item xs={4}>
                    CVV
                    <TextField
                      placeholder="123"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                  <Grid item xs={4}>
                    Billing Zip Code
                    <TextField
                      placeholder="411047"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      placeholder="Coupon (Optional)"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box
                sx={{
                  marginTop: "1rem",
                  textAlign: "center",
                }}
              >
                <Button  
                className="bg-[#fff]"
                  sx={{
                    color: "custom.menu",
                    width: "100%",
                  }}
                  variant="contained"
                >
                  Start my 7-day trial
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        {/* card three */}
        <Grid item md={4} lg={4}>
          <Card
            className="p-4"
            sx={{
              backgroundColor: "background.cardView",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" 
               className="text-base font-black mt-4 mb-1"
              >
                How your free trial works
              </Typography>
              <Box
                sx={{
                  marginTop: "1.5rem",
                }}
              >
                <List>
                  <ListItem
                     className="pb-7"
                    sx={{ marginBottom: "10px" }}
                  >
                    <ListItemIcon>
                      <TaskAltIcon sx={{ fontSize: "2rem" }} color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#3B84D9" }}
                      primary="CREATE AN ACCOUNT"
                      secondary="You successfully created your free account."
                    />
                  </ListItem>
                  <ListItem
                     className="pb-7"
                    sx={{ marginBottom: "10px" }}
                  >
                    <ListItemIcon>
                      <VpnKeyOutlinedIcon
                        sx={{ fontSize: "2rem" }}
                        color="primary"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="TODAY: GET INSTANT ACCESS"
                      secondary="Get instant access to all our packages and enjoy the seamless flows and interactions."
                    />
                  </ListItem>
                  <ListItem
                     className="pb-7"
                    sx={{ marginBottom: "10px" }}
                  >
                    <ListItemIcon>
                      <MoreTimeIcon sx={{ fontSize: "2rem" }} color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="DAY 4: FREE TRIAL REMINDER"
                      secondary="We'll send you an email/notification 3 days before billing. Cancel anytime :)"
                    />
                  </ListItem>
                  <ListItem
                     className="pb-7"
                    sx={{ marginBottom: "10px" }}
                  >
                    <ListItemIcon>
                      <AutoAwesomeIcon
                        sx={{ fontSize: "2rem" }}
                        color="primary"
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary="DAY 7: FREE TRIAL ENDS"
                      secondary="You will be billed for the Business monthly plan ($50/mo) on May 13. :)"
                    />
                  </ListItem>
                </List>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CardSection;
