import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import styles from './Header.module.sass';

export default function Header(props) {
  const { children } = props;
  return (
    <Grid className={styles.main} alignItems="center" container>
      <Grid className={styles.children} item>
        {children}
      </Grid>
    </Grid>
  );
}

Header.defaultProps = {
  children: '',
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};
