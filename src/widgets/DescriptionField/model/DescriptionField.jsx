import React from 'react'
import styles from '../styles/DescriptionField.module.css'

const DescriptionField = React.forwardRef(
    function DescriptionField(props, ref) {
        const { placeholder, ...rest} = props;
        return(
            <div className={styles.container}>
                <textarea type="text" className={styles.descriptionInput} placeholder={placeholder} ref={ref} {...rest}/>
            </div>
        )
    }
)

export default DescriptionField