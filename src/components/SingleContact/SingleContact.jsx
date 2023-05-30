import PropTypes from 'prop-types';
import css from './SingleContact.module.css';

const SingleContact = ({ name, number, contactId, onDeleteContact }) => {
    return (
    <>
      <p className={css.name}>{name}</p>
      <p className={css.number}>{number}</p>
      <button  className={css.delete} onClick={() => onDeleteContact(contactId)}>Delete</button>
    </>
 
)}

SingleContact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
  contactId: PropTypes.string.isRequired,
};

export default SingleContact;


