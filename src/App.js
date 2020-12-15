import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Section from './components/Section/Section';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const storegeContacts = localStorage.getItem('contacts');
    const parsedStorageContacts = JSON.parse(storegeContacts);

    if (parsedStorageContacts) {
      this.setState({ contacts: parsedStorageContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    const newContact = { name, number, id: uuidv4() };
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contId),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <Section>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Section>
    );
  }
}
