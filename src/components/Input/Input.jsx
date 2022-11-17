import styles from '../Input/Input.module.css';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state)

    this.props.onSubmit(this.state);

    this.checkTest();
  };

  checkTest = () => {
    let countTest = 0;
    const tests = this.props.test;
    // eslint-disable-next-line array-callback-return
    tests.map(test => {
      if (this.state.name === test.name) {
        countTest += 1;
      }
    });
    if (countTest === 0) {
      this.reset();
    }
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <h2 className={styles.mainText}>Телефонная книга</h2>
        <form className={styles.formWrapper} onSubmit={this.handleSubmit}>
          <label>
            <p className={styles.text}> Имя </p>
            <input
              className={styles.input}
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            ></input>

            <p className={styles.text}> Номер </p>
            <input
              className={styles.input}
              name="number"
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            ></input>
          </label>

          <div>
            <button className={styles.button} type="submit">
              Добавить контакт
            </button>
          </div>
        </form>
      </div>
    );
  }
}

Input.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
