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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
let ClikklePlan = [
  "All features in Current Plan",
  "Access to all Clikkle Products",
  "Customizable Reports and Analytics",
  "Real Time Notifications and Alerts",
  "Document Management System",
  "Mobile App Access",
  "Automated Payroll Processing",
  "Employee Self-Service Portal",
  "AI Powered Candidate Matching",
  "Integrated Video Interviewing",
  "Project Management Tools",
];

let CurrentPlan = [
  "Full HR platform",
  "Recruiting / ATS",
  "Time off Management",
  "HR Analytics",
  "Time and Attendance Tracking",
  "Performance Management",
  "New Hire Onboarding",
  "Job Offers",
  "Surveys and Training",
  "24/7 Customer Support",
];

const CardSection = () => {
  // const classes = useStyles();
  // const { SnackBar, showMessage } = useSnack();
  const [plan, setPlan] = useState("Private"); // Initialize with a default plan
  const [name, setName] = useState("");
  const [zip, setZip] = useState(0);
  const [planData, setPlanData] = useState({ amount: 49, period: "mon" });
  const [showMessage, setShowMessage] = useState({
    show: true,
    message: "",
    severity: "",
  });
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // setShowMessage({
    //   show: true,
    //   message: "Subscribe Successfully",
    //   severity: "success",
    // });
    // setTimeout(() => {
    //   navigate("/createOrganization");
    // }, [4000]);
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
        name: name,
        address: {
          postal_code: zip,
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
      const { token, error } = await stripe.createToken(cardElement, {
        name,
        address_zip: zip,
      });

      if (error) {
        setShowMessage({
          show: true,
          message: "Error creating Subscriptions ",
          severity: "error",
        });
        console.error(error.message);
      } else {
        // Save token and process payment
        try {
          const response = await axios.post(`/user/subscription/subscribe`, {
            name,
            email: "yogeshPawar123@gmail.com",
            paymentMethod: paymentMethod.id,
            tokenId: token.id,
            card: token.card,
            plan: "private",
            amount:planData.amount
          });

          if (response.status === 200) {
            let data = response.data;
            localStorage.setItem("subscriptionId" ,data.subscriptionId)
            setShowMessage({
              show: true,
              message: "Subscribe Successfully",
              severity: "success",
            });
            setTimeout(() => {
              navigate("/createOrganization");
            }, [1000]);
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
    }
  };
  const handleClose = (event) => {
    setShowMessage({ show: false, message: " ", severity: "" });
  };
  const handlePlanChange = (event, newPlan) => {
    setPlan(newPlan);
    switch (newPlan) {
      case "Private":
        setPlanData({ amount: 49, period: "mon" });
        break;
      case "Business":
        setPlanData({ amount: 149, period: "mon" });
        break;
      case "Enterprise":
        setPlanData({ amount: 249, period: "mon" });
        break;
      default:
        setPlanData({ amount: 99, period: "mon" });
    }
  };

  const [cardNumberComplete, setCardNumberComplete] = useState(false);
  const [cardExpiryComplete, setCardExpiryComplete] = useState(false);
  const [cardCvcComplete, setCardCvcComplete] = useState(false);

  const handleCardNumberChange = (event) => {
    setCardNumberComplete(event.complete);
  };

  const handleCardExpiryChange = (event) => {
    setCardExpiryComplete(event.complete);
  };

  const handleCardCvcChange = (event) => {
    setCardCvcComplete(event.complete);
  };

  React.useEffect(() => {
    let tempPlanData = localStorage.getItem("planData");
  
    if (tempPlanData) {
      tempPlanData = JSON.parse(tempPlanData);
      console.log("tempPlanData " ,tempPlanData)
      setPlanData(tempPlanData);
      switch (tempPlanData.amount) {
        case 49:
          setPlan("Private");
          break;
        case 149:
          setPlan("Business");
          break;
        case 249:
          setPlan("Enterprise");
          break;
        case 249:
          setPlan("Clikkle Plus");
          break;  
        default:
          break;

      }
    }
  }, []);

  const isButtonDisabled =
    name === "" ||
    zip.length !== 6 ||
    !cardNumberComplete ||
    !cardExpiryComplete ||
    !cardCvcComplete;



    const [age, setAge] = useState('Private'); // Initialize with a default value

    const handleSelectChange = (event) => {
      setPlan(event.target.value);
      console.log("plan" , plan)
      switch (event.target.value) {
        case "Private":
          setPlanData({ amount: 49, period: "mon" });
          break;
        case "Business":
          setPlanData({ amount: 149, period: "mon" });
          break;
        case "Enterprise":
          setPlanData({ amount: 249, period: "mon" });
          break;
        default:
          setPlanData({ amount: 49, period: "mon" });
      }
    };

    const getBillingDate = () => {
      const date = new Date();
      date.setDate(date.getDate() + 7);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
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
               
             
             <Box sx={{ minWidth: 120 , borderRadius:0 }}>
             <FormControl fullWidth>
                  <Select
                    labelId="demo-customized-select-label"
                    id="demo-customized-select"
                    value={plan}
                    onChange={handleSelectChange}
                    style={{color:'gray' , border:'1px solid #e7e3e3' , borderRadius:'3px'}}
                  >
                    <MenuItem disabled value="Clikkle Plus">CURRENT PLAN </MenuItem>
                    <MenuItem value="Private" >PRIVATE</MenuItem>
                    <MenuItem value="Business">BUSINESS</MenuItem>
                    <MenuItem value="Enterprise">ENTERPRISE</MenuItem>
                   
                  </Select>
                </FormControl>
                 </Box>


                <ToggleButton className="py-3" value="Clikkle Plus">
                  clikkle Plus
                </ToggleButton>
              </ToggleButtonGroup>

              <div className="text-base font-black mt-4 mb-1">
                <Typography variant="h6" component="h2">
                  {plan}
                </Typography>
              </div>
              <Typography variant="body2" color="textSecondary" gutterBottom>
              7 days free trial, then $
              {planData.amount}/month
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
                {(plan == "Current Plan" ? CurrentPlan : ClikklePlan).map(
                  (item, index) => (
                    <ListItem key={index} className="d-flex justify-between">
                      <TaskAltIcon
                        color="primary"
                        sx={{
                          fontSize: "18px",
                        }}
                      ></TaskAltIcon>
                      <ListItemText className="ps-2" primary={item} />
                    </ListItem>
                  )
                )}
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
                      value={name}
                      placeholder="Full Name"
                      fullWidth
                      variant="outlined"
                      className=""
                    />
                  </Grid>
                  <Grid item xs={12}>
                    Card Number
                    <CardNumberElement
                      className="border border-zinc-300 p-4 hover:border-2 hover:border-blue-500"
                      onChange={handleCardNumberChange}
                    />
                    {/* <TextField
                      placeholder="Card Number"
                      fullWidth
                      variant="outlined"
                      className=""
                    /> */}
                  </Grid>
                  <Grid item xs={6} md={4}>
                    Expiration Date
                    <CardExpiryElement
                      className="border border-zinc-300 p-4 hover:border-2 hover:border-blue-500 "
                      onChange={handleCardExpiryChange}
                    />
                    {/* <TextField
                      placeholder="01/09"
                      fullWidth
                      variant="outlined"
                      className=""
                    /> */}
                  </Grid>
                  <Grid item xs={6} md={4}>
                    CVV
                    <CardCvcElement
                      className="leading-3 border border-zinc-300 p-4 hover:border-2 hover:border-blue-500"
                      onChange={handleCardCvcChange}
                    />
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
                      placeholder="Zip Code"
                      onChange={(e) => setZip(e.target.value)}
                      value={zip}
                      fullWidth
                      variant="outlined"
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
                  disabled={isButtonDisabled}
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
                secondary={`You will be billed for the ${plan} plan ($${planData.amount}/mo) on ${getBillingDate()}.`}
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
