import styles from '../styles/TextField.module.css'
import searchIcon from '../../../assets/Vector.svg';
import React from 'react';

const TextField = React.forwardRef(
    function TextField(props, ref) {   
        const { hasSearchIcon, placeholder, width, error, helperText, ...rest } = props; 
        return(
            <div className={styles.searchBarContainer} style={{width}}>
                <input type="text" className={`${styles.input} ${error ? styles.inputError : ''}`} placeholder={placeholder} ref={ref} {...rest}/>
                {hasSearchIcon ?
                    <img src={searchIcon} className={styles.icon} alt="Search" /> :
                    <></>
                }
                {helperText && 
                    <p className={styles.helperText}>{helperText}</p>
                }
            </div>
        )
    }
)

export default TextField;