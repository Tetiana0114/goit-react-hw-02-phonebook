// import PropTypes from 'prop-types';

const ContactList = ({ contacts, onClick }) => {
    return (
        <ul>{contacts.map(contact => (
        <li key={contact.id}>
            <p>
            {contact.name}:  
            </p>
            <span>
            {contact.number} 
            </span>
            <button type="button" onClick={() => onClick(contact.id)}>Delete</button>
        </li>
            ))}
        </ul>
    );
}
export default ContactList;