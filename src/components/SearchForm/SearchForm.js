import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput.js';
import Button from '../Button/Button.js';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const SearchForm = () => {

    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'UPDATE_SEARCHSTRING', payload: {searchString} });
        setSearchString('');
    }

    return (
        <form onSubmit={handleSubmit} className={styles.searchForm}>
            <TextInput placeholder="Search..." 
                value={searchString}
                onChange = {e => setSearchString(e.target.value)}/>
            <Button>
                <span className="fa fa-search" />
            </Button>
        </form>
    );
    
  };

  export default SearchForm;