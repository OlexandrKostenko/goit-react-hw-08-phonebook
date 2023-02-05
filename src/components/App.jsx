import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Wrapper } from "./App.styled";
import { useDispatch, useSelector } from 'react-redux';
import { addContactAction, removeContactAction } from 'redux/contactSlice';
import { filteredContact } from 'redux/filterSlice';


export const App = () => {

  const dispatch = useDispatch();

  const filter = useSelector(state => state.contact.filter);
  const contacts = useSelector(state => state.contact.contact);

  const addNewContact = data => {
    if (checkContact(data.name)) {
      return alert(`${data.name} is already in contacts`)
    };
    dispatch(addContactAction({id: nanoid(), name: data.name, number: data.number}));
  };

  const checkContact = contact => {
    return contacts.find(
      element => element.name.toLowerCase() === contact.toLowerCase()
    );
  };

  const changeFilter = (event) => {
    dispatch(filteredContact(event.currentTarget.value));
  };

  const handleDelete = id => {
    dispatch(removeContactAction(id));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={addNewContact}></Form>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      <ContactsList contacts={filteredContacts()} handleDelete={handleDelete} />
    </Wrapper>
  );
};
