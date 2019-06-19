import React from 'react';

import loaderImage from '../../assets/images/loader.gif';
import style from './LoadingPage.scss';

const LoadingPage = () => (
  <div className={style['loader']}>
    <img className={style['loader__image']} src={loaderImage} alt="Loader animation"></img>
  </div>
);

export default LoadingPage;