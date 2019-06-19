import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../../redux/actions/auth';

import style from './LoginPage.scss';

export const LoginPage = ({ startLogin }) => (
  <div className={style['box-layout']}>
    <div className={style['box-layout__box']}>
      <h1 className={style['box-layout__title']}>React Boilerplate</h1>
      <p>Insert tag line here...</p>
      <button className={style['button']} onClick={startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage);
