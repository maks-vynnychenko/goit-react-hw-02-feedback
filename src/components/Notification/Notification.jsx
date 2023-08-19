import PropTypes from 'prop-types';

import notification from './Notification.module.css';

const Notification = ({ message }) => {
  return <p className={notification.notification}>{message}</p>;
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};