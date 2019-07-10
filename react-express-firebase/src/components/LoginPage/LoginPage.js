import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../redux/actions/auth';

import styles from './LoginPage.module.scss';

export const LoginPage = ({ startLogin }) => (
  <div className={styles.boxLayout}>
    <div className={styles.boxLayoutBox}>
      <h1 className={styles.boxLayoutTitle}>React Boilerplate</h1>
      <p>Insert tag line here...</p>
      <button className={styles.button} onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
