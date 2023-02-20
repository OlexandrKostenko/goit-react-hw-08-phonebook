import { Form } from "../Form/Form";
import { ContactsList } from "../ContactsList/ContactsList";
import { Filter } from "../Filter/Filter";
import { useDispatch, useSelector } from 'react-redux';
import { filteredContact } from 'redux/filterSlice';
import { useEffect } from 'react';
import { addContact, fetchContacts } from 'redux/operations';

export const Contacts = () => {
    const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filter = useSelector(state => state.filter.filter);
  const contacts = useSelector(state => state.contact.items);

  const addNewContact = data => {
    if (checkContact(data.name)) {
      return alert(`${data.name} is already in contacts`)
    };
    dispatch(addContact(data));
  };

  const checkContact = contact => {
    return contacts.find(
      element => element.name.toLowerCase() === contact.toLowerCase()
    );
  };

  const changeFilter = (event) => {
    dispatch(filteredContact(event.currentTarget.value));
  };

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });
  };

    return (
        <>
      <h1>Phonebook</h1>
      <Form onSubmit={addNewContact}></Form>

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

            <ContactsList contacts={filteredContacts()} />
            </>)
}