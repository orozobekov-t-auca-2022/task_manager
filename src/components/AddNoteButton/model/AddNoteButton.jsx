import { useState } from 'react';
import plusIcon from '../../../assets/plusIcon.svg'
import styles from '../styles/AddNoteButton.module.css'
import TextField from '../../../widgets/TextField/module/TextField';

function AddNoteButton(){
    const [isFormOpen, setFormOpen] = useState(false);
    function openForm(){
        setFormOpen(true);
    }
    function closeForm(){
        setFormOpen(false);
    }
    function createNote(){

    }
    return(
        <div>
            <button className={styles.addBtn} onClick={openForm}>
                <img src={plusIcon} alt="" />
            </button>
            {
                isFormOpen && (
                    <div className={styles.shadedBackground}>
                        <div>
                            <form className={styles.addFormContainer}>
                                <h3>New Note</h3>
                                <div className={styles.addFormInput}>
                                    <TextField hasSearchIcon={false} placeholder={"Input your note..."} width={"440px"}/>
                                </div>
                                <div className={styles.buttonOptions}>
                                    <button onClick={closeForm} className={styles.cancelFormBtn}>cancel</button>
                                    <button onClick={createNote} className={styles.addFormBtn}>apply</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    
                )
            }
        </div>
    )
}

export default AddNoteButton;