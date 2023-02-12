import { ContactItem } from "components/ContactItem/ContactItem"
import { nanoid } from "nanoid";
import React from "react";
import PropTypes from 'prop-types';
import { List } from "./ContactsList.styled";


export const ContactsList = ({ contacts }) => {
    return (
        <div>
        
        <List>
          {contacts.map(({name, phone, id}) => {
            return (
                
        <ContactItem 
          key={nanoid()} 
          id={id} 
          name={name} 
          number={phone}
          ></ContactItem>
          )}
          )}
        </List>
      </div>
    )
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
};