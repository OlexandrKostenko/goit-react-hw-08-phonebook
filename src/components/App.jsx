import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import { ContactsList } from "./ContactsList/ContactsList";
import { Filter } from "./Filter/Filter";
import { Wrapper } from "./App.styled";
import { useState } from "react";
import { useEffect } from "react";

  const contactsRandom = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) ?? contactsRandom);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = data => {
    if (checkContact(data.name)) {
      return alert(`${data.name} is already in contacts`)
    };
    setContacts(prev => [...prev, { id: nanoid(), ...data }]);
  };

  const checkContact = contact => {
    return contacts.find(
      element => element.name.toLowerCase() === contact.toLowerCase()
    );
  };

  const changeFilter = (event) => {
    setFilter(event.currentTarget.value);
  };

  const handleDelete = id => {
    setContacts(contacts.filter(contact => { return contact.id !== id; }))
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
