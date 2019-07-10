import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';

import styles from './Header.module.scss';

export const Header = ({ startLogout }) => (
  <header className={styles.header}>
    <div className={styles.contentContainer}>
      <div className={styles.headerContent}>
        <Link className={styles.headerTitle} to="/dashboard">
          <h1>React boilerplate</h1>
        </Link>
        <button className={styles.headerButton} onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);