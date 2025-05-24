import styles from '../styles/SearchBar.module.css';
import DropDownButton from '../../DropdownButton/DropdwonButton/model/DropdownButton';
import SwitchThemeButton from '../../SwitchThemeButton/model/SwitchThemeButton';
import TextField from '../../../widgets/TextField/module/TextField';

function SearchBar() {
    return (
        <div className={styles.container}>
            <TextField hasSearchIcon={true} placeholder={"Search note..."} className={styles.textField}/>
            <DropDownButton/>
            <SwitchThemeButton/>
        </div>
    );
}

export default SearchBar;
