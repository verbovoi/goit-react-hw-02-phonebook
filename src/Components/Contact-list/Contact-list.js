import React, { Component } from 'react';
import s from './Contact-list.module.css';

export default class ContactList extends Component {
  render() {
    const contacts = this.props.visibleList;
    return (
      <div>
        <ul className={s.bullet}>
          {contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <span>{contact.number}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
