import React from "react";
import { withRouter } from "react-router-dom";
import { CssBaseline, Paper, Typography } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import logo from "../../Static/logo.png";

import Login from "./Login";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  logo: {
    width: 200
  }
});

function PreAuth(props) {
  const { classes } = props;

  const onLogin = () => {
    localStorage.setItem("token", "test");
    props.history.push("/dashboard");
  }

  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Login
          onLogin={onLogin}
          error={props.error}
          loading={props.loading}
          login={props.login}
        />
      </Paper>
    </main>
  );
}

export default withStyles(styles, { withTheme: true })(PreAuth)
