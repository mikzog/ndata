import cx from 'classnames';
import React from 'react';
import './alert.css';

interface Props {
  type: 'error' | 'success' | 'warning' | 'info';
  message?: string;
  description?: string;
}

export const Alert: React.FC<Props> = ({ type, message, description }) => {
  const classNames = cx('nd-alert', {
    [`nd-alert-${type}`]: type,
  });

  return (
    <div className={classNames}>
      <div className="nd-alert-message">{message}</div>
      <div className="nd-alert-description">{description}</div>
    </div>
  );
};

Alert.defaultProps = {
  type: 'error',
};

export default Alert;
