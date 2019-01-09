import React, { Component } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from "./GroupChoice.module.sass";

export default class GroupChoice extends Component {
  componentDidMount() {
    this.props.fetchGroups(this.props.match.params.faculty);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.faculty !== this.props.match.params.faculty) {
      this.props.fetchGroups(this.props.match.params.faculty);
    }
  }

  render() {
    const { groups, isFetching } = this.props.groupsReducer;
    return (
      <React.Fragment>
        {isFetching ? (
          <span className={styles.loader}>
            <CircularProgress />
          </span>
        ) : (
          <div className={styles.group}>
            <label className={styles.label}>Выберите вашу группу:</label>
            <FormControl className={styles.select}>
              <InputLabel>Группа</InputLabel>
              <Select
                value={this.props.group}
                onChange={this.props.changeGroup}
              >
                {groups.map((group, id) => (
                  <MenuItem key={id} value={group.alias}>
                    {group.title}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        )}
      </React.Fragment>
    );
  }
}
