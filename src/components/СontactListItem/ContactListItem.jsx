import PropTypes from 'prop-types';
import styles from '../СontactListItem/ContactListItem.module.css';

export const ContactListItem = ({ name, number }) => {
  return (
    <li>
      <p className={styles.contactText}>
        {name}: {number}
      </p>
    </li>
  );
};

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}

