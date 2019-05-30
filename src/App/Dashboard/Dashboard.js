import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Routes from "../../Routes";
import { Switch, Route, withRouter } from "react-router-dom";


import Charts from "./Charts"
import Calendar from "../Calendar/Calendar"
import Services from "../Services/Services";
import Staff from "../Staff/Staff";
import Customers from "../Customers/Customers";
import Marketing from "../Marketing/Marketing";
import Quotes from "../Quotes/Quotes";
import Invoices from "../Invoices/Invoices";
import Reports from "../Reports/Reports";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
});

class Dashboard extends React.Component {
  state = {
    open: true
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Header drawerOpen={open} handleDrawerOpen={this.handleDrawerOpen} />
        <Sidebar
          routes={Routes}
          drawerOpen={open}
          handleDrawerClose={this.handleDrawerClose}
        />
        <main className={classNames(classes.content, classes.contentShift)}>
          <div className={classes.drawerHeader} />
          <Switch>
            <Route exact path="/dashboard" component={Charts} />
            <Route path="/dashboard/calendar" component={Calendar} />
            <Route path="/dashboard/services" component={Services} />
            <Route path="/dashboard/staff" component={Staff} />
            <Route path="/dashboard/customers" component={Customers} />
            <Route path="/dashboard/marketing" component={Marketing} />
            <Route path="/dashboard/quotes" component={Quotes} />
            <Route path="/dashboard/invoices" component={Invoices} />
            <Route path="/dashboard/reports" component={Reports} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default withRouter(
  withStyles(styles, { withTheme: true })(Dashboard)
);
