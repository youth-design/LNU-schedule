import React, { Component } from "react";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

import styles from "./GroupChoise.module.sass";

export default class GroupChoise extends Component {
  componentDidMount() {
    if (this.props.faculty !== this.props.match.params.faculty) {
      this.props.history.push("/schedule");
    }
  }
  render() {
    return (
      <FormControl className={styles.select}>
        <InputLabel>Факультет</InputLabel>
        <Select value="1" onChange={() => {}}>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
          <MenuItem value="3">3</MenuItem>
        </Select>
      </FormControl>
    );
  }
}
