import React from 'react';
import styles from '../ContactList/ContactList.module.css';
import PropTypes from 'prop-types';
import { ContactListItem } from '../СontactListItem/ContactListItem';

export const ContactList = ({ data, deleteContact }) => {
  return (
    <ul>
      {data.map(({ name, number, id }) => (
        <div className={styles.contactWrapper} key={id}>
          <ContactListItem name={name} number={number} />
          <button
            type="button"
            onClick={() => {
              deleteContact(id);
            }}
          >
            Удалить
          </button>
        </div>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
