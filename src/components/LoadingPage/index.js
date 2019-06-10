// entry point for importing your Component. It contains nothing but an export statement that points to the topmost Component at any point in time, because the topmost Component changes often during development.
import React from 'react';

const LoadingPage = () => (
  <div className="loader">
    <img className="loader__image" src="/images/loader.gif" />
  </div>
);

export default LoadingPage;