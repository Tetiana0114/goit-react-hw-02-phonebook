import PropTypes from 'prop-types';

const ContactListElement = ({ name, number, onClick } ) => {
  return <li>
            <p>{name}: <span>{number}</span></p>
            <button type="button" onClick={onClick}>Delete</button>
        </li>
};

ContactListElement.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactListElement;