// import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
    return (
        <ul>{contacts.map(contact => (
        <li key={contact.id}>
            <p>
            {contact.name}:  
            </p>
            <span>
            {contact.number} 
            </span>
        </li>
            ))}
        </ul>
    );
}
export default ContactList;