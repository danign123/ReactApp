import Button from '../Button/Button.js';
import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('title');
    const [icon, setIcon] = useState('icon');
    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_COLUMN', payload: {title, icon} });
        setTitle('');
        setIcon('');
    };

	return (
        <form onSubmit={handleSubmit} className={styles.columnForm}>
            
            <span className={styles.inputName}>Title:</span><input type="text" className={styles.input} value={title} onChange={e => setTitle(e.target.value)} />
            <span className={styles.inputName}>Icon:</span><input type="text" className={styles.input} value={icon} onChange={e => setIcon(e.target.value)} />
            
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;