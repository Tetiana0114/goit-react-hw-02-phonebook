import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
import Section from 'components/Section';
import ContactForm from 'components/ContactForm';


export class App extends Component {
  state = {
    contacts: [],
    name: ''
  };

  // nameId = nanoid();


render () {
return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
  <Section title="Phonebook:">
  <ContactForm/>
  </Section>
      
    </div>
  );
}
};