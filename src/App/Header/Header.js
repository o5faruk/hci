import React, { useState } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import {
  IconButton,
  AppBar,
  Toolbar,
  Typography,
  Menu,
  MenuItem
} from "@material-ui/core";
import { Menu as MenuIcon, AccountCircleOutlined, ChatOutlined, NotificationsOutlined, ContactSupportOutlined, PowerSettingsNewOutlined } from "@material-ui/icons";
import { drawerWidth } from "../../constants";

const styles = theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  grow: {
    flexGrow: 1
  },
});

const Header = props => {
  const { classes, drawerOpen, handleDrawerOpen } = props;

  const [anchorEl, setAnchorEl] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleMenuOpen = e => {
    setAnchorEl(e.currentTarget)
    setMenuOpen(true)
  }
  const logOut = () => {
    localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <AppBar
      position="fixed"
      className={classNames(classes.appBar, {
        [classes.appBarShift]: drawerOpen
      })}
    >
      <Toolbar disableGutters={!drawerOpen}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={handleDrawerOpen}
          className={classNames(classes.menuButton, {
            [classes.hide]: drawerOpen
          })}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.grow} />
        <div>
          <IconButton
            aria-owns={menuOpen ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <ChatOutlined />
          </IconButton>
          <IconButton
            aria-owns={menuOpen ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <NotificationsOutlined />
          </IconButton>
          <IconButton
            aria-owns={menuOpen ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircleOutlined />
          </IconButton>
          <IconButton
            aria-owns={menuOpen ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <ContactSupportOutlined />
          </IconButton>
          <IconButton
            aria-owns={menuOpen ? 'menu-appbar' : undefined}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <PowerSettingsNewOutlined />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={menuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <MenuItem onClick={() => logOut()}>Log Out</MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles, { withTheme: true })(Header);
