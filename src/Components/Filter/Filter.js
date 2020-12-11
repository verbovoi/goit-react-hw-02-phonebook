import React from 'react';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <label>
      <input
        className={s.input}
        type="text"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
