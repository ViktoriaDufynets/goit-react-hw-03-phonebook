import PropTypes from 'prop-types';
import css from './Form.module.css';
import { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };


  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>

      <form className={css.form} onSubmit={this.handleSubmit}>
        <label>
          <span className={css.field}>Name</span>
          <input
            onChange={this.handleChange}
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          <span className={css.field1}>Number</span>
          <input
            onChange={this.handleChange}
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </form>
      </div>
    );
  }
}

Form.propTypes = { 
   handleChange: PropTypes.func, 
   handleSubmit: PropTypes.func,
   reset: PropTypes.func, 
 };


export default Form;
  
