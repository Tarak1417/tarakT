import React, { useState } from "react";
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
  Alert,
  AlertTitle,
  Stack,
  Snackbar,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import TaskAltIcon from "@mui/icons-material/TaskAlt";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";
import useSnack from "../../hooks/useSnack";
import { useNavigate } from "react-router-dom";
// import TaskAltIcon from '@mui/icons-material/CheckCircleOutline';

const CardSection = () => {
  // const classes = useStyles();
  // const { SnackBar, showMessage } = useSnack();
  const [plan, setPlan] = React.useState("Current Plan");
  const [name, setName] = useState("");
  const [showMessage, setShowMessage] = useState({
    show: true,
    message: "",
    severity: "",
  });
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    setShowMessage({
      show: true,
      message: "Subscribe Successfully",
      severity: "success",
    });
    setTimeout(() => {
      navigate("/");
    }, [4000]);
    event.preventDefault();
    // showMessage(`Offer letter successfully send to ${handlers.values.nameOfEmployee}`);
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: {
        name: "Name ",
        address: {
          postal_code: "Zip",
        },
      },
    });

    if (error) {
      setShowMessage({
        show: true,
        message: "Error creating payment ",
        severity: "error",
      });
      console.error("Error creating payment method:", error);
    } else {
      try {
        const response = await axios.post(`/hr/payment/subscriptions`, {
          name,
          email: "yogeshPawar123@gmail.com",
          paymentMethod: paymentMethod.id,
        });

        if (response.ok) {
          let data = response.json();
          setShowMessage({
            show: true,
            message: "Subscribe Successfully",
            severity: "success",
          });
          console.log("Payment method created:", data);
        }
      } catch (e) {
        console.log("Payment method created:", e);
        setShowMessage({
          show: true,
          message: "Error creating Subscriptions ",
          severity: "error",
        });
      }
      console.log("Payment method created:", paymentMethod);
      // You can use paymentMethod.id to complete the payment
    }
  };
  const handleClose = (event) => {
    setShowMessage({ show: false, message: " ", severity: "" });
  };
  const handlePlanChange = (event, newPlan) => {
    setPlan(newPlan);
  };

  return (
    <Box
      sx={{
        // display:"flex",
        // justifyContent:"center",
        margin: "2rem",
      }}
    >
      <Snackbar
        open={showMessage.show}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert
          severity={showMessage.severity}
          variant="filled"
          sx={{ width: "100%" }}
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
        >
          <AlertTitle> {showMessage.severity}</AlertTitle>
          {showMessage.message}
        </Alert>
      </Snackbar>

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
              <ToggleButtonGroup
                color="primary"
                value={plan}
                exclusive
                aria-label="Platform"
                onChange={handlePlanChange}
              >
                <ToggleButton className="py-3" value="Current Plan">Current </ToggleButton>
                <ToggleButton className="py-3" value="Clikkle Plus">clikkle Plus</ToggleButton>
              </ToggleButtonGroup>

              <div className="text-base font-black mt-4 mb-1">
                <Typography variant="h6" component="h2">
                  {plan}
                </Typography>
              </div>
              <Typography variant="body2" color="textSecondary" gutterBottom>
                7 days free trial, then $49/month
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
              <Typography
                variant="h6"
                component="h2"
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
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Full Name"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    Card Number
                    <CardNumberElement className="border border-zinc-300 p-4 hover:border-2 hover:border-blue-500" />
                    {/* <TextField
                      placeholder="Card Number"
                      fullWidth
                      variant="outlined"
                      className=""
                    /> */}
                  </Grid>
                  <Grid item xs={6} md={4}>
                    Expiration Date
                    <CardExpiryElement className="border border-zinc-300 p-4 hover:border-2 hover:border-blue-500 " />
                    {/* <TextField
                      placeholder="01/09"
                      fullWidth
                      variant="outlined"
                      className=""
                    /> */}
                  </Grid>
                  <Grid item xs={6} md={4}>
                    CVV
                    <CardCvcElement className=" leading-3 border border-zinc-300 p-4 hover:border-2 hover:border-blue-500" />
                    {/* <TextField
                      placeholder="123"
                      fullWidth
                      variant="outlined"
                      className=""
                    /> */}
                  </Grid>
                  <Grid item xs={12} md={4}>
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
                  onClick={handleSubmit}
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
              <Typography
                variant="h6"
                component="h2"
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
                  <ListItem className="pb-7" sx={{ marginBottom: "10px" }}>
                    <ListItemIcon>
                      <TaskAltIcon sx={{ fontSize: "2rem" }} color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#3B84D9" }}
                      primary="CREATE AN ACCOUNT"
                      secondary="You successfully created your free account."
                    />
                  </ListItem>
                  <ListItem className="pb-7" sx={{ marginBottom: "10px" }}>
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
                  <ListItem className="pb-7" sx={{ marginBottom: "10px" }}>
                    <ListItemIcon>
                      <MoreTimeIcon sx={{ fontSize: "2rem" }} color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      primary="DAY 4: FREE TRIAL REMINDER"
                      secondary="We'll send you an email/notification 3 days before billing. Cancel anytime :)"
                    />
                  </ListItem>
                  <ListItem className="pb-7" sx={{ marginBottom: "10px" }}>
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
