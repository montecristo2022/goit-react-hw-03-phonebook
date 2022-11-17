import Input from './Input/Input';
import { ContactList } from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Mykola Trush', number: '777-77-77' },
      { id: 'id-2', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-3', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-4', name: 'Eden Clements', number: '645-17-79' },
    ],
    // name: '',
    // number: '',
    filter: '',
  };

  newContact = data => {
    const oneContact = {
      id: nanoid(),
      ...data,
    };

    this.alreadyExistName(oneContact);
  };

  alreadyExistName = oneContact => {
    const { contacts } = this.state;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === oneContact.name.toLowerCase()) {
        alert(`${oneContact.name} is already in contacts`);

        return;
      }
    }

    return this.setState(({ contacts }) => ({
      contacts: [oneContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  componentDidMount() {
    console.log('это ДИД МАУНТ');

    const contactsLocalStorage = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contactsLocalStorage);

if(parsedContacts !== true) {
  this.setState({ contacts: parsedContacts });
}


    
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('это ДИД АПДЕЙТ');
    if (this.state.contacts !== prevState.contacts) {
      console.log('Изменено!!');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    console.log('Рендер в АПП');
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',

          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <Input onSubmit={this.newContact} test={this.state.contacts} />

          <Filter value={this.state.filter} onChange={this.changeFilter} />

          <ContactList
            data={this.visibleContacts()}
            deleteContact={this.deleteContact}
          />
        </div>
      </div>
    );
  }
}
