import styles from '../styles/DropDownButton.module.css'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import { showAll, showIncompleted, showCompleted } from '../../../Notes/slice/noteSlice';

function DropDownButton() {
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();

    const toggleList = () => {
        setOpen((prev) => !prev);
    }
    
    return (
        <div>
            <button className={styles.dropBtn} onClick={toggleList}>ALL
                {!isOpen ? (
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.63077 4L1.26154 1" stroke="#F7F7F7" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8 1L4.63077 4" stroke="#F7F7F7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                ) : (
                    <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.63077 1L8 4" stroke="#F7F7F7" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M1.26154 4L4.63077 1" stroke="#F7F7F7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                )}
                
            </button>
            {isOpen && (
                <div className={styles.list}>
                    <ul>
                        <li onClick={() => dispatch(showAll())}>ALL</li>
                        <li onClick={() => dispatch(showCompleted())}>Complete</li>
                        <li onClick={() => dispatch(showIncompleted())}>Incomplete</li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default DropDownButton;