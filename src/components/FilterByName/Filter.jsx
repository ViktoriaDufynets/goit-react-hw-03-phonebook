import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filter, changeFilter }) => {
    return (
        <div>
        <h2 className={css.contacts}>Contacts</h2>
      <label>
        <p>Find contacts by name</p>
        <input
          type="text"
          value={filter}
          onChange={changeFilter}
        />
      </label>
      </div>
    );
  }

  Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };

export default Filter;