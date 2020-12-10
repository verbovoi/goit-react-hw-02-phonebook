import React from 'react';
import s from './Filter.module.css';

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
