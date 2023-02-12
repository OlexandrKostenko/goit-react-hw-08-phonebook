import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { Item, DeleteButton } from './ContactItem.styled';

export const ContactItem = ({ id, name, number }) => {
    const dispatch = useDispatch();
    
    const handleDelete = id => {
        dispatch(deleteContact(id))
    };

    return (
        <Item>{name}: {number}
        <DeleteButton 
        type="button"
        onClick={()=> handleDelete(id)}
        >Delete</DeleteButton>
        </Item>
        
    )
};

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};