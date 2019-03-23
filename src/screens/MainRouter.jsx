import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { getFaculty } from "state/faculties/faculty/actions";
import { getGroup } from "state/groups/group/actions";

import ScheduleRouter from "./schedule/ScheduleRouter";

import NotFound from "screens/shared/screens/notFound/NotFound";
import Choice from "./choice/Choice";

class MainRouter extends Component {
  componentWillMount() {
    this.props.getFaculty(this.props.history);
    this.props.getGroup(this.props.history);
  }

  render() {
    return (
      <React.Fragment>
        {!this.props.isFetching && (
          <Switch>
            <Route path="/" exact component={ScheduleRouter} />
            <Route path="/choice" component={Choice} />
            <Route component={NotFound} />
          </Switch>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = ({ facultyReducer, groupReducer }) => ({
  isFetching: facultyReducer.isFetching || groupReducer.isFetching
});

const mapDispatchToProps = {
  getFaculty,
  getGroup
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MainRouter)
);
