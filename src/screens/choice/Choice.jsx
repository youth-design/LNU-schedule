import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { fetchFaculties } from "state/faculties/actions";
import { fetchGroups } from "state/groups/actions";
import { setFaculty } from "state/faculties/faculty/actions";
import { setGroup } from "state/groups/group/actions";

import {
  Grid,
  Paper,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  CircularProgress
} from "@material-ui/core";

import GroupChoice from "./components/groupChoice/GroupChoice";
import Header from "screens/shared/components/header/Header";

import styles from "./Choice.module.sass";

class Choice extends Component {
  state = {
    faculty: this.props.facultyReducer.faculty,
    group: this.props.groupReducer.group
  };

  componentDidMount() {
    this.props.actions.fetchFaculties();
  }

  changeFaculty = e => {
    this.setState({
      group: "",
      faculty: e.target.value
    });
    this.props.actions.setFaculty(e.target.value);
  };

  changeGroup = e => {
    this.setState({
      group: e.target.value
    });
    this.props.actions.setGroup(e.target.value);
  };

  render() {
    const { faculty } = this.state;
    const { faculties, isFetching } = this.props.facultiesReducer;
    return (
      <React.Fragment>
        <Header withMenuButton>Выбор факультета</Header>
        <Grid direction="row" className={styles.main} container>
          {isFetching ? (
            <span className={styles.loader}>
              <CircularProgress />
            </span>
          ) : (
            <Grid
              className={styles.content}
              direction="column"
              alignItems="center"
              justify="center"
              container
            >
              <Paper className={styles.paper}>
                <Grid direction="column" container>
                  <Grid item>
                    <label className={styles.label}>
                      Выберите ваш факультет:
                    </label>
                    <FormControl className={styles.select}>
                      <InputLabel>Факультет</InputLabel>
                      <Select value={faculty} onChange={this.changeFaculty}>
                        {faculties.map((faculty, id) => (
                          <MenuItem key={id} value={faculty.alias}>
                            {faculty.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    {this.state.faculty && (
                      <GroupChoice
                        faculty={this.state.faculty}
                        groupsReducer={this.props.groupsReducer}
                        fetchGroups={this.props.actions.fetchGroups}
                        changeGroup={this.changeGroup}
                        group={this.state.group}
                      />
                    )}
                    {this.state.group && (
                      <div className={styles.button}>
                        <Button
                          color="primary"
                          onClick={() => {
                            this.props.history.push("/");
                          }}
                        >
                          Перейти к расписанию
                        </Button>
                      </div>
                    )}
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          )}
        </Grid>
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({
  facultiesReducer,
  groupsReducer,
  facultyReducer,
  groupReducer
}) => ({
  facultiesReducer,
  groupsReducer,
  facultyReducer,
  groupReducer
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    { fetchFaculties, fetchGroups, setFaculty, setGroup },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Choice);
