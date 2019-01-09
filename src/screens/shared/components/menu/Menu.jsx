import React, { Component } from "react";

import { Link } from "react-router-dom";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import logo from "assets/images/logo.png";

import styles from "./Menu.module.sass";

export default class Menu extends Component {
  state = {
    isOpen: false
  };

  switchMenuState = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  render() {
    return (
      <React.Fragment>
        <Button className={styles.button} onClick={this.switchMenuState}>
          <i className="fas fa-bars" />
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={this.state.isOpen}
          onClose={this.switchMenuState}
          onOpen={this.switchMenuState}
          className={styles.menu}
        >
          <div className={styles.header}>Раписание ЛНУ им. В.Даля</div>
          <img src={logo} className={styles.logo} alt="Логотип" />
          <List component="nav" className={styles.navList}>
            <ListItem className={styles.listItem} button>
              <Link to="/schedule">
                <ListItemIcon>
                  <i className="fas fa-clock" />
                </ListItemIcon>
                <ListItemText>Перейти к расписанию</ListItemText>
              </Link>
            </ListItem>
            <ListItem className={styles.listItem} button>
              <Link to="/choice">
                <ListItemIcon>
                  <i className="fas fa-university" />
                </ListItemIcon>
                <ListItemText>Изменить факультет</ListItemText>
              </Link>
            </ListItem>
            <ListItem className={styles.listItem} button>
              <Link to="/choice">
                <ListItemIcon>
                  <i className="fas fa-users" />
                </ListItemIcon>
                <ListItemText>Изменить группу</ListItemText>
              </Link>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </React.Fragment>
    );
  }
}
