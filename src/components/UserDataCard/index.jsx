import React from 'react';
import PropTypes from 'prop-types';
import BaseCard from '../BaseCard';
import './index.css';

const UserDataCard = ({
  data,
  label,
  onClick,
}) => (
  <BaseCard
    className="user-data-card"
    onClick={onClick}
  >
    {
      data ? (
        <React.Fragment>
          <div className="user-data-card__label">
            {label}
          </div>
          <div className="user-data-card__info-container">
            {data || 'No data provided'}
          </div>
        </React.Fragment>
      ) : (
        emptyState
      )
    }
  </BaseCard>
);

UserDataCard.propTypes = {
  data: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

UserDataCard.defaultProps = {
  onClick: () => {},
};

export default UserDataCard;
