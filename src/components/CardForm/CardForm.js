import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CardForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();

        //props.action({ title: title}, props.columnId);
        dispatch({ type: 'ADD_CARD', payload: {title, columnId: props.columnId} });
        console.log('columnId: ', props.columnId)
        setTitle('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.cardForm}>
            <TextInput value={title} onChange={e => setTitle(e.target.value)} />
            <Button>Add new card</Button>
        </form>
	);
};

export default CardForm;