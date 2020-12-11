import React, { Component } from 'react';
import s from './Contact-list.module.css';
import { FiTrash2 } from 'react-icons/fi';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

export default class ContactList extends Component {
  getDeleteId = id => {
    this.props.deleteContact(id);
  };

  render() {
    const contacts = this.props.visibleList;
    return (
      <div>
        <ul className={s.bullet}>
          {contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name}</span>
              <span>
                {contact.number}
                <button
                  className={s.btn}
                  type="button"
                  onClick={() => this.getDeleteId(contact.id)}
                >
                  <IconContext.Provider
                    value={{
                      color: 'black',
                      size: '18',
                    }}
                  >
                    <FiTrash2 />
                  </IconContext.Provider>
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  visibleList: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
