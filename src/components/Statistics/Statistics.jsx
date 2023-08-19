import PropTypes from 'prop-types';

import statistics from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={statistics.statisticsList}>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {positive}%</li>
    </ul>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positive: PropTypes.number,
};