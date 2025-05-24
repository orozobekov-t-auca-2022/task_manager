import styles from '../styles/DropDownButton.module.css'
import { useState } from 'react';

function DropDownButton() {
    let [isOpen, setOpen] = useState(false);

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
                        <li>ALL</li>
                        <li>Complete</li>
                        <li>Incomplete</li>
                    </ul>
                </div>
            )}
        </div>
    )
}
export default DropDownButton;