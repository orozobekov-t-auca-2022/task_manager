import styles from './SearchBar.module.css';
import DropDownButton from '../../DropdownButton/DropdwonButton/ui/DropdownButton';
import SwitchThemeButton from '../../SwitchThemeButton/ui/SwitchThemeButton';
import { useDispatch } from 'react-redux';
import { filterOnType } from '../../Notes/model/noteSlice';
import TextField from '../../../widgets/TextField/ui/TextField';

function SearchBar() {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <TextField onChange={e => dispatch(filterOnType(e.target.value))} hasSearchIcon={true} placeholder={"Search note..."} className={styles.textField} />
            <DropDownButton />
            <SwitchThemeButton/>
        </div>
    );
}

export default SearchBar;
