import { Component } from 'react';
// import css from './ContactForm.module.css'

const initialState = { name: '', number: '' };

class ContactForm extends Component {

state = { ...initialState };

onChangeInput = event => {
  this.setState({ [event.target.name]: event.target.value });
};
onSubmit = event => {
  event.preventDefault();
  this.props.onSubmit(this.state);
  this.setState(initialState);
};

render() {
  const { name, number } = this.state;

  return (
  <form onSubmit={this.onSubmit}>
    <label>Name:
     <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
  onChange={this.onChangeInput}
  value={name}
  /> 
    </label>
    <label>Number:
     <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  onChange={this.onChangeInput}
  value={number}
/> 
    </label>
  
  
<button type="submit">Add contact</button>
</form>
);
}
};

export default ContactForm;