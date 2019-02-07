import React from "react";
import PropTypes from "prop-types";

import Grid from "@material-ui/core/Grid";

// eslint-disable-next-line import/no-unresolved
import Menu from "screens/shared/components/menu/Menu";

import styles from "./Header.module.sass";

export default function Header(props) {
  const { children, withMenuButton } = props;
  return (
    <Grid className={styles.main} alignItems="center" container>
      {withMenuButton && (
        <Grid xs="auto" sm={1} className={styles.menu} item>
          <Menu />
        </Grid>
      )}
      <Grid xs="auto" sm={11} className={styles.children} item>
        {children}
      </Grid>
    </Grid>
  );
}

Header.defaultProps = {
  children: "",
  withMenuButton: false
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  withMenuButton: PropTypes.bool
};
