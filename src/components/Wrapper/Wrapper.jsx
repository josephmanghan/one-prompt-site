import React from 'react';

const Wrapper = ({ children }) => (
  <div className="wrapper">
    <div className="wrapper__inner">{children}</div>
  </div>
);

export default Wrapper;
