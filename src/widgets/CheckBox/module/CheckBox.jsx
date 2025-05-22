import React from 'react'
import styles from '../styles/CheckBox.module.css'
import { NoteStatus } from '../../../components/Note/config/NoteStatus';

const CheckBox = React.forwardRef(
    function CheckBox(props, ref){
        const {status, ...rest} = props;        
        return(
            <input className={styles.input} type='checkbox' {...rest} ref={ref} checked={status === NoteStatus.DONE}/>
        )
    }
)

export default CheckBox