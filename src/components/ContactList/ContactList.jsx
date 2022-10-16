import PropTypes from 'prop-types';
import ContactListElement from 'components/ContactListElement';

const ContactList = ({ contacts, onClick }) => {
    return (
        <ul>{contacts.map(contact => (
            <ContactListElement
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onClick={() => onClick(contact.id)}
            />
            ))}
        </ul>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.string.isRequired,
    }))
    
  };

export default ContactList;