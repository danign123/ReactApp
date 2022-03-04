import Button from '../Button/Button.js';
import TextInput from '../TextInput/TextInput.js';
import styles from './CardForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCard } from '../../redux/store.js';

const CardForm = props => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addCard({title, columnId: props.columnId}) );
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