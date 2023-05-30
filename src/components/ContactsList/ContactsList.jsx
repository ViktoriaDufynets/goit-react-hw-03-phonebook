import PropTypes from 'prop-types';
import SingleContact from "components/SingleContact/SingleContact";
import css from './ContactsList.module.css';

const ContactsList = ({ contacts, onDeleteContact }) => {
    return (
    <>
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li  className={css.contact} key={id}>
            <SingleContact
              name={name}
              number={number}
              onDeleteContact={onDeleteContact}
              contactId={id}
            />
          </li>
        );
      })}
    </ul>
    </>
 
)}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;