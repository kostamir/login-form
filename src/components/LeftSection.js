import React from "react";
import logo from "../logo.png";
import image from "../image.png";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function LeftSection() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.logo}>
        <Box>
          <img src={logo} alt="logo" />
        </Box>
      </Grid>
      <Grid item xs={12} className={classes.device}>
        <Box>
          <img src={image} alt="device" width="100%" />
        </Box>
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  logo: {
    position: "absolute",
    alignSelf: "flex-start",
  },
  device: {
    alignSelf: "center",
  },
}));
