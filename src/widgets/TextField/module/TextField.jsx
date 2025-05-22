import styles from '../styles/TextField.module.css'
import searchIcon from '../../../assets/Vector.svg';
import React from 'react';

const TextField = React.forwardRef(
    function TextField(props, ref) {   
        const { hasSearchIcon, placeholder, width, ...rest } = props; 
        return(
            <div className={styles.searchBarContainer} style={{width}}>
                <input type="text" className={styles.input} placeholder={placeholder} ref={ref} {...rest}/>
                {hasSearchIcon ?
                    <img src={searchIcon} className={styles.icon} alt="Search" /> :
                    <></>
                }
            </div>
        )
    }
)

export default TextField;