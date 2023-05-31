import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './FilterByName/Filter'
import Message from './Message/Message';
import Modal from './Modal/Modal';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal
    }))
  }

  addContact = ({name, number}) => {
    const {contacts} = this.state;
    const newContact = {id: nanoid(), name, number};
    const isExistingContact = contacts.some( 
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase() 
    ); 
 
    if (isExistingContact) { 
      alert(`${newContact.name} is already in contacts`); 
      return; 
    }
      this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],

        }));
//        console.log(newContact);
  }


  deleteContact = contactId => {
     this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
     }))
  }

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filtredContacts = () => {
    const { filter, contacts } = this.state;
    const filterByName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
    name.toLowerCase().includes(filterByName)
    );
  };

  componentDidUpdate = (prevProps, prevState, snapshot) => {
    console.log(prevState);
    console.log(this.state);

    if(this.state.contacts !== prevState.contacts) {
      console.log("yessa");
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentDidMount = () => {
    console.log('roar');
    const contacts = localStorage.getItem('contacts');
    console.log(contacts);
    const parsedContacts = JSON.parse(contacts);
      if (parsedContacts) {
        this.setState({contacts: parsedContacts});
      }
  }

  render() {
    const { filter, showModal } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const filtredContacts = this.filtredContacts();
    const length = this.state.contacts.length;
    return (
<div>
<div className={css.container}>
  <h1>Phonebook</h1>
  <button className={css.openButton} type="button" onClick={this.toggleModal}>Add contact 📲</button>
  {showModal &&
  <Modal onClose={this.toggleModal}>
  <div className={css.header}>
    <h2 className={css.add}>Add contact</h2>
    <button  className={css.closeButton} type="button" onClick={this.toggleModal}>Close</button>
    </div>
    <Form onSubmit={ addContact } />
  </Modal>} 

  </div>
  <div className={css.container}>
  <Filter filter={filter} changeFilter={changeFilter}/>
  {length > 0 ? (
  <ContactsList
    contacts = {filtredContacts}
    onDeleteContact = {this.deleteContact}
  />
        ) : (
          <Message text="Contact list is empty."/>
        )}
      
        </div>
</div>
    )
  }
}

export default App;
