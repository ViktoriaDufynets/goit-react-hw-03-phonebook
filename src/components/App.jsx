import { Component } from 'react';
import { nanoid } from 'nanoid'
import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './FilterByName/Filter'
import Message from './Message/Message';
import css from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

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
        console.log(newContact);
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

  render() {
    const { filter } = this.state;
//    const {contacts } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const filtredContacts = this.filtredContacts();
    const length = this.state.contacts.length;
    return (
<div>
<div className={css.container}>
  <Form onSubmit={ addContact } />
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
