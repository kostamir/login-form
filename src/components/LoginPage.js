import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import { Divider, Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function LoginPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Hidden smDown>
        <Grid item xs={5} lg={4}>
          <LeftSection />
        </Grid>
        <Divider orientation="vertical" flexItem className={classes.divider} />
      </Hidden>
      <Grid item md={5} lg={4}>
        <RightSection />
      </Grid>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10px",
  },
  divider: {
    width: "2px",
    background:
      "linear-gradient(to bottom, #fafafa 0%,#ecedf0 21%,#dadbe2 49%,#edeef1 80%,#fafafa 100%)",
  },
}));
