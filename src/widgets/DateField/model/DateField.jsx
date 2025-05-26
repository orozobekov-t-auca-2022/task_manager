import React from 'react'
import styles from '../styles/DateField.module.css'

const DateField = React.forwardRef(
    function DateField(props, ref) {
        const {helperText, error, ...rest} = props;
        return(
            <>
                <div>
                    <input type="date" ref={ref} {...rest} placeholder='Put deadline' className={`${styles.inputField} ${error ? styles.error : ''}`}/>
                </div>
                {helperText && 
                    <div className={styles.helperText}>{helperText}</div>
                }
            </>
        )
    }
)
export default DateField;