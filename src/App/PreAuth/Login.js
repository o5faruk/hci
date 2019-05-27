import React from "react";
import {
  FormControlLabel,
  FormControl,
  Input,
  InputLabel,
  Checkbox,
  Button,
  FormHelperText
} from "@material-ui/core";

import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

const Login = props => {
  const { classes } = props;

  const login = () => {
    props.onLogin();
  };

  return (
    <form className={classes.form} onSubmit={login}>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="email">Email Address</InputLabel>
        <Input
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
        />
      </FormControl>
      <FormControl margin="normal" required fullWidth>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"    
        />
      </FormControl>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Sign in
      </Button>
    </form>
  );
};

export default withStyles(styles)(Login);
