import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './Container.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = contact => {
    if (
      this.state.contacts.some(
        contactItem =>
          contactItem.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      alert(`Oops, ${contact.name} is already in contacts!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { ...contact, id: nanoid() }],
      };
    });
  };

  handleDeleteContacts = event => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== event.target.id
        ),
      };
    });
  };

  handleFilterContacts = ({ target: { value } }) => {
    this.setState({
      filter: value,
    });
  };

  render() {
    const filterContacts = this.state.contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .trim()
        .includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1 className={css.phonebook}>Phonebook</h1>
        <ContactForm onSubmit={this.addContacts} />
        <h2 className={css.contacts}>Contacts</h2>
        <Filter
          onFilterChange={this.handleFilterContacts}
          value={this.state.filter}
        />
        <ContactList
          contacts={filterContacts}
          onButtonDelete={this.handleDeleteContacts}
        />
      </div>
    );
  }
}
