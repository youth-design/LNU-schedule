import React, { Component } from "react";
import { connect } from "react-redux";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/es/Button/Button";
import { Transition } from "react-transition-group";

import styles from "./CachedScheduleDialog.module.sass";
import scheduleReducer from "../../../../../../state/schedule/reducer";

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
    isShow: true
  }

  switchMessage = () => this.setState(({isShow}) => ({isShow: !isShow}));

  render() {
    return (
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
                  <Button variant={"contained"}>Переподключиться</Button>
                </Grid>
                <Grid item>
                  <Button variant={"contained"} onClick={this.switchMessage}>Загрузить</Button>
                </Grid>
              </Grid>
            </Grid>
          </div>
        )}
      </Transition>
    );
  }
}

const mapStateToProps = ({ scheduleReducer }) => ({
  scheduleReducer
});

export default connect(mapStateToProps)(CachedScheduleDialog);
