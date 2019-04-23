import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchScheduleFromCache, reconnect } from "state/schedule/actions";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/es/Button/Button";
import Snackbar from "@material-ui/core/Snackbar";
import { Transition } from "react-transition-group";

import styles from "./CachedScheduleDialog.module.sass";

const defaultStyle = {
  transition: `all 300ms ease-in-out`
};

const transitionStyles = {
  entering: { bottom: "2rem" },
  entered: { bottom: "2rem" },
  exiting: { bottom: "-10rem" },
  exited: { bottom: "-10rem" }
};

class CachedScheduleDialog extends Component {
  state = {
    snackbarIsOpen: this.props.scheduleReducer.fetchFromCacheError
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      prevProps.scheduleReducer.fetchFromCacheError !==
      this.props.scheduleReducer.fetchFromCacheError
    ) {
      console.log("кря");
      this.setState({
        snackbarIsOpen: this.props.scheduleReducer.fetchFromCacheError
      });
    }
  }

  handleClose = () =>
    this.setState(({ snackbarIsOpen }) => ({
      snackbarIsOpen: !snackbarIsOpen
    }));

  render() {
    return (
      <React.Fragment>
        <Snackbar
          open={this.state.snackbarIsOpen}
          onClose={this.handleClose}
          message={
            <div>
              <i className="fas fa-exclamation-triangle" /> Расписание не
              найдено
            </div>
          }
          autoHideDuration={3000}
          className={styles.snackbar}
          anchorOrigin={{
            horizontal: "right",
            vertical: "top"
          }}
        />
        <Transition in={this.props.scheduleReducer.isError} timeout={100}>
          {state => (
            <div
              className={styles.plashque}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <Grid
                alignItems={"center"}
                spacing={8}
                direction={"column"}
                container
              >
                <Grid item>Не удалось загрузить расписание из интернета</Grid>
                <Grid item>Загрузить последнюю сохранённую версию?</Grid>
                <Grid
                  className={styles.buttonsContainer}
                  justify="space-around"
                  container
                >
                  <Grid item>
                    <Button
                      variant={"contained"}
                      onClick={this.props.reconnect}
                    >
                      Переподключиться
                    </Button>
                  </Grid>
                  <Grid item>
                    {!this.props.scheduleReducer.fetchFromCacheError && (
                      <Button
                        variant={"contained"}
                        onClick={() =>
                          this.props.fetchScheduleFromCache(
                            this.props.groupReducer.group
                          )
                        }
                      >
                        Загрузить
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          )}
        </Transition>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ scheduleReducer, groupReducer }) => ({
  scheduleReducer,
  groupReducer
});

const mapDispatchToProps = {
  fetchScheduleFromCache,
  reconnect
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CachedScheduleDialog);
