import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <label className={s.filterLabel}>
      <span className={s.filterTitle}>Find contacts by name</span>
      <input type="text" value={value} onChange={onChange}></input>
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
