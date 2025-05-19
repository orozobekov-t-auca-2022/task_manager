import styles from '../styles/DropDownButton.module.css'
import icon from "../../../../assets/chevron-top.svg"
import { useState } from 'react';

function DropDownButton() {
    let [isOpen, setOpen] = useState(false);

    const toggleList = () => {
        setOpen((prev) => !prev);
    }
    return (
        <>
            <button className={styles.dropBtn} onClick={toggleList}>ALL
                <img src={icon} className={styles.icon} alt=""/>
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
        </>
    )
}
export default DropDownButton;