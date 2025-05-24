import React from 'react'
import styles from '../styles/DateField.module.css'

const DateField = React.forwardRef(
    function DateField(props, ref) {
        const {...rest} = props;
        return(
                <input type="date" ref={ref} {...rest} placeholder='Put deadline' className={styles.inputField}/>
        )
    }
)
export default DateField;