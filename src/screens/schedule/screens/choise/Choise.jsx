import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import Header from "screens/shared/components/header/Header";

import styles from "./Choise.module.sass";

export default class Choise extends Component {
  state = {
    activeStep: 0,
    faculty: ""
  };

  changeSelectDecorator = fieldName => e => {
    this.setState({ [fieldName]: e.target.value });
  };

  render() {
    const { activeStep, faculty } = this.state;
    return (
      <Grid direction="column" className={styles.main} container>
        <Grid item>
          <Header withMenuButton>Выбор факультета</Header>
        </Grid>
        <Grid justify="center" container>
          <Grid xs={12} item>
            <Stepper className={styles.stepper} activeStep={activeStep}>
              <Step>
                <StepLabel>Выбор факультета</StepLabel>
              </Step>
              <Step>
                <StepLabel>Выбор группы</StepLabel>
              </Step>
              <Step>
                <StepLabel>Получение расписания</StepLabel>
              </Step>
            </Stepper>
          </Grid>
        </Grid>
        <Grid
          className={styles.content}
          direction="column"
          alignItems="center"
          justify="center"
          container
        >
          <Paper className={styles.paper}>
            <label>Выберите ваш факультет:</label>
            <FormControl className={styles.select}>
              <InputLabel>Факультет</InputLabel>
              <Select
                value={faculty}
                onChange={this.changeSelectDecorator("faculty")}
              >
                <MenuItem value="1">Раз</MenuItem>
                <MenuItem value="2">Два</MenuItem>
                <MenuItem value="3">Три</MenuItem>
              </Select>
            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}
