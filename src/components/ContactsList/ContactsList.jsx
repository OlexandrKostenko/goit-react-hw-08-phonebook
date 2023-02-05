import { ContactItem } from "components/ContactItem/ContactItem"
import { nanoid } from "nanoid";
import React from "react";
import PropTypes from 'prop-types';
import { List } from "./ContactsList.styled";
import { useDispatch } from "react-redux";
import { removeContactAction } from "redux/contactSlice";


export const ContactsList = ({ contacts, handleDelete }) => {
  const dispatch = useDispatch();
    return (
        <div>
        
        <List>
          {contacts.map(({name, number, id}) => {
            return (
                
        <ContactItem 
          key={nanoid()} 
          id={id} 
          name={name} 
          number={number}
          handleDelete={() => dispatch(removeContactAction(id))}
          ></ContactItem>
          )}
          )}
        </List>
      </div>
    )
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};