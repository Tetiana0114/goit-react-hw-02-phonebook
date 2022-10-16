import PropTypes from 'prop-types';

const SearchField = ({ onChange }) => {
    return (
    <label> Find contacts by the name:
        <input 
        type="text" 
        name="filter" 
        onChange={onChange} />
    </label>
        );
    }

SearchField.propTypes = {
    onChange: PropTypes.func.isRequired,
};

export default SearchField;
