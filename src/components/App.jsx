import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import SearchField from 'components/SearchField';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

onFormSubmit = ({ name, number }) => {
    const addedName = { id: nanoid(), name: name, number: number };
    this.state.contacts.find(contact => contact.name === name) ? window.alert(`${name} is already in contacts !`) : 
    this.setState(prevState => { return { contacts: [...prevState.contacts, addedName] };
    });
};

onFilteredNames = () => {
    return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter));
  };

handleFilter = event => {
  this.setState({ [event.target.name]: event.target.value.toLowerCase() });
}; 

onDelete = id => {
    this.setState({ contacts: this.state.contacts.filter(contact => contact.id !== id) });
  };

render () {
  const filteredName = this.onFilteredNames();
return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        color: '#010101'
      }}
    >
  <Section title="Phonebook:">
  <ContactForm onSubmit={this.onFormSubmit}/>
  </Section>
  <Section title="Contacts:">
  <SearchField onChange={this.handleFilter} />
  <ContactList contacts={filteredName} onClick={this.onDelete}/>
  </Section>
    </div>
  );
}
};