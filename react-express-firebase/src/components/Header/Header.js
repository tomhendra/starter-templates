import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../../redux/actions/auth';

import style from './Header.scss';

export const Header = ({ startLogout }) => (
  <header className={style['header']}>
    <div className={style['content-container']}>
      <div className={style['header__content']}>
        <Link className={style['header__title']} to="/dashboard">
          <h1>React boilerplate</h1>
        </Link>
        <button className={style['header__button']} onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);