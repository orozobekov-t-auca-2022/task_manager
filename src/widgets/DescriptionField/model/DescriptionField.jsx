import React from 'react'
import styles from '../styles/DescriptionField.module.css'

const DescriptionField = React.forwardRef(
    function DescriptionField(props, ref) {
        const { placeholder, helperText, error, ...rest} = props;
        return(
            <>
                <textarea type="text" className={`${styles.descriptionInput} ${error ? styles.error : ''}`} placeholder={placeholder} ref={ref} {...rest}/>        
                {helperText && 
                    <div className={styles.helperText}>{helperText}</div>
                }
            </>
            )
    }
)

export default DescriptionField