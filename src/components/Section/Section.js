import PropTypes from 'prop-types';
import s from './Section.module.css';

export default function Section({ children }) {
  return <div className={s.section}>{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node,
};
