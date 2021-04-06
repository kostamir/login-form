import React from "react";
import logo from "../logo.png";
import {
  Button,
  Box,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { nameInput, passwordInput, logIn } from "../redux/actions";

export default function RightSection() {
  const classes = useStyles();

  const form = useSelector((state) => state.form);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const handleNameChange = (name) => {
    dispatch(nameInput(name));
  };

  const handlePasswordChange = (pass) => {
    dispatch(passwordInput(pass));
  };

  const handleLogin = () => {
    if (form.name === "demo" && form.password === "demo") {
      dispatch(logIn());
      resetFields();
    } else {
      alert("Incorrect login data!");
    }
  };

  const resetFields = () => {
    dispatch(nameInput(""));
    dispatch(passwordInput(""));
  };

  return (
    <div>
      {!isLogged ? (
        <Grid container className={classes.root}>
          <Hidden mdUp>
            <Grid item xs={12} className={classes.logo}>
              <Box>
                <img src={logo} alt="logo" />
              </Box>
            </Grid>
          </Hidden>
          <Grid item className={classes.form} xs={12}>
            <Typography variant="h4" className={classes.h4text}>
              Login
            </Typography>
            <Typography variant="body1" className={classes.body1}>
              Name and Password should be stored in Redux state. Proceed to next
              screen if demo/demo is enterd.
            </Typography>
            <Box mt={2}>
              <TextField
                fullWidth
                label="Name"
                type="text"
                value={form.name}
                onChange={(event) => handleNameChange(event.target.value)}
              />
            </Box>
            <Box mt={2}>
              <TextField
                fullWidth
                color="primary"
                label="Password"
                type="password"
                value={form.password}
                onChange={(event) => handlePasswordChange(event.target.value)}
              />
            </Box>
          </Grid>
          <Grid item className={classes.button} xs={12}>
            <Button className={classes.buttonStyle} onClick={handleLogin}>
              Next
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid container className={classes.root}>
          <Hidden mdUp>
            <Grid item xs={12} className={classes.logo}>
              <Box>
                <img src={logo} alt="logo" />
              </Box>
            </Grid>
          </Hidden>
          <Grid item className={classes.success} xs={12}>
            <Typography variant="h4" className={classes.h4text}>
              Success
            </Typography>
            <Typography variant="body1" className={classes.body1}>
              Logged in as <strong>Name</strong>
            </Typography>
          </Grid>
        </Grid>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    [theme.breakpoints.up("md")]: {
      paddingLeft: "4vw",
    },
  },
  logo: {
    alignSelf: "flex-start",
    position: "absolute",
  },
  form: {
    alignSelf: "center",
    // marginBottom: "5vh",
  },
  success: {
    alignSelf: "center",
  },
  h4text: {
    fontWeight: 650,
  },
  body1: {
    color: theme.palette.grey[600],
  },
  button: {
    position: "absolute",
    alignSelf: "flex-end",
    marginBottom: "8vh",
  },
  buttonStyle: {
    background: theme.palette.primary.light,
    color: theme.palette.primary.main,
    padding: "5px 50px",
    borderRadius: 7,
    fontSize: "1.2em",
    textTransform: "none",
    fontWeight: 400,
  },
}));
