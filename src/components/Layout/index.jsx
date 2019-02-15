import React from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import './index.css';

const Layout = ({ children, className }) => (
  <div className={`layout ${className}`}>
    {children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

Layout.defaultProps = {
  children: null,
  className: '',
};

export default withRouter(Layout);
