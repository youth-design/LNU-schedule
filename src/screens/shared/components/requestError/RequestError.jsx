import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { showRequestError, hideRequestError } from "state/requestError/actions";

import styles from "./RequestError.module.sass";
import { CSSTransition } from "react-transition-group";

class RequestError extends Component {
  hideRequestError = () => {
    this.props.hideRequestError();
  };

  render() {
    const { isShow } = this.props.requestError;
    return (
      <CSSTransition timeout={300} in={isShow} classNames={"fade"}>
        <div className={styles.main}>
          <div>
            <h4>Не удалось выполнить запрос</h4>
          </div>
          <div onClick={this.hideRequestError} className={styles.closeButton}>
            X
          </div>
        </div>
      </CSSTransition>
    );
  }
}

RequestError.propTypes = {
  requestError: PropTypes.object.isRequired
};

const mapStateToProps = store => ({
  requestError: store.requestErrorReducer
});

const mapDispatchToProps = {
  showRequestError,
  hideRequestError
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestError);
