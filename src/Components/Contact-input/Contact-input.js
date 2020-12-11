import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Contact-input.module.css';
import PropTypes from 'prop-types';

export default class ContactInput extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.props.listNames.includes(this.state.name.toLowerCase())) {
      toast.warn('Такой абонент уже есть в базе((');
      return;
    }
    if (this.state.name.trim() === '' || this.state.number.trim() === '') {
      toast.error('Введите все данные!');
      return;
    }
    this.props.formInput(this.state.name, this.state.number);
    this.setState({ name: '' });
    this.setState({ number: '' });
  };

  render() {
    return (
      <div className={s.container}>
        <form onSubmit={this.handleSubmit} className={s.form}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
          <input
            type="tel"
            name="number"
            placeholder="Phone Number"
            value={this.state.number}
            onChange={this.handleNameChange}
          />
          <button type="submit" className={s.btn}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Add Contact
          </button>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

ContactInput.propTypes = {
  formInput: PropTypes.func.isRequired,
  listNames: PropTypes.arrayOf(PropTypes.string.isRequired),
};
