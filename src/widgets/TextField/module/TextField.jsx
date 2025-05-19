import styles from '../styles/TextField.module.css'
import searchIcon from '../../../assets/Vector.svg';

function TextField(props) {
    console.log(props.hasSearchIcon);
    
    return(
        <div className={styles.searchBarContainer} style={{width: props.width}}>
            <input type="text" className={styles.input} placeholder={props.placeholder}/>
            {props.hasSearchIcon ?
                <img src={searchIcon} className={styles.icon} alt="Search" /> :
                <></>
            }
        </div>
    )
}

export default TextField;