import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <>
      <ul className={s.contactList}>
        {contacts.map(contact => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
