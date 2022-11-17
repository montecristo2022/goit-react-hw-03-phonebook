import React from 'react';
import styles from '../Filter/Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.labelText}>
      Поиск по имени{' '}
      <input
        className={styles.inputFilter}
        type="text"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
