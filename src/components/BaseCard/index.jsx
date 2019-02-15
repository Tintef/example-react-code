import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

const BaseCard = ({ children, className, onClick }) => (
  <div
    className={`base-card ${className}`}
    onClick={onClick}
    role="presentation"
  >
    {children}
  </div>
);

BaseCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

BaseCard.defaultProps = {
  children: null,
  className: '',
  onClick: () => { },
};

export default BaseCard;
