import React, { Component } from 'react';
import './App.css';
import Section from './Components/Section/Section';
import ContactInput from './Components/Contact-input/Contact-input';
import ContactList from './Components/Contact-list/Contact-list';
import Filter from './Components/Filter/Filter';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleFormSubmit = (name, number) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  };

  onDeleteContact = deleteId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
    }));
  };

  render() {
    const visibleList = this.getVisibleContacts();
    const listNames = this.state.contacts.map(({ name }) => name.toLowerCase());

    return (
      <div className="container">
        <h1>PhoneBook</h1>
        <Section title="Please input new contact">
          <ContactInput
            formInput={this.handleFormSubmit}
            listNames={listNames}
          />
        </Section>
        <Section title="Contacts">
          <Filter value={this.state.filter} onChange={this.changeFilter} />
          <ContactList
            list={this.state.contacts}
            visibleList={visibleList}
            deleteContact={this.onDeleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
