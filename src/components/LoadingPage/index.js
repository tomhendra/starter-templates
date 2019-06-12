// entry point for importing your Component. It contains nothing but an export statement that points to the topmost Component at any point in time, because the topmost Component changes often during development.
import React from 'react';
import style from './LoadingPage.scss';

const LoadingPage = () => (
  <div className={style['loader']}>
    <img src={require('../../assets/images/loader.gif')} className={style['loader__image']} />
  </div>
);

export default LoadingPage;