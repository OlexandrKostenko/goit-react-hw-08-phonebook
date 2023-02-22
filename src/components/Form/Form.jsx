import PropTypes from 'prop-types';
import { Label, SubmitButton, FormWrapper, Input } from "./Form.styled";
import { useState } from "react";

export const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        break;
   }
    };

  const reset = () => {
    setName('');
    setNumber('');
      };
    
   const handleSubmit = (event) => {
        event.preventDefault();
     onSubmit({ name, number });
        reset();
      };
       
    return (
    <FormWrapper onSubmit={handleSubmit}>
        <label htmlFor="name">
          <Label>Name</Label>
          <Input type="text"
            id='name' 
            name="name" 
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange} />
        </label>
        <label htmlFor="phone">
          <Label>Number</Label>
        <Input
            type="tel"
            id='number'
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
/>
        </label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </FormWrapper>
    )};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};