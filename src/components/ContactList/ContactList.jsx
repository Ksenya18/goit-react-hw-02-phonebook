import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { ContactListItem } from '../ContactListItem/ContactListItem';

export function ContactList({ contacts, onButtonDelete }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onButtonDelete={onButtonDelete}
          buttonId={id}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
