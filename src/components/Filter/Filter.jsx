import PropTypes from 'prop-types';
import css from './Filter.module.css';

export function Filter({ value, onFilterChange }) {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        className={css.inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
