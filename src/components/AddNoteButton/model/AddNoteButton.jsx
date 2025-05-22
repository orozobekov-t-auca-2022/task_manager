import { useState } from 'react';
import plusIcon from '../../../assets/plusIcon.svg'
import styles from '../styles/AddNoteButton.module.css'
import TextField from '../../../widgets/TextField/module/TextField';
import { useForm } from 'react-hook-form';
import DescriptionField from '../../../widgets/DescriptionField/model/DescriptionField';
import { yupResolver } from '@hookform/resolvers/yup';
import DateField from '../../../widgets/DateField/model/DateField';
import { NoteStatus } from '../../Note/config/NoteStatus';
import { schema } from '../../config/schema';

function AddNoteButton(){
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema)
    });
    const [isFormOpen, setFormOpen] = useState(false);
    function openForm(){
        setFormOpen(true);
    }
    function closeForm(){
        setFormOpen(false);
    }
    function createNote(){
        
    }
    function onSubmit(data){
        console.log(JSON.stringify(data));
        const localNotes = JSON.parse(localStorage.getItem('notes')) || [];
        const formData = {
            id: Date.now(),
            title: data.title,
            description: data.description,
            deadline: data.deadline,
            status: NoteStatus.NEW
        }        
        const updatedNotes = [...localNotes, formData];
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
        window.dispatchEvent(new Event('notes-updated'));
    }
    return(
        <div>
            <button className={styles.addBtn} onClick={openForm}>
                <img src={plusIcon} alt="" />
            </button>
            {
                isFormOpen && (
                    <div className={styles.shadedBackground}>
                        <div className={styles.container}>
                            <form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
                                <h3>New Note</h3>
                                <div className={styles.addFormInput}>
                                    <TextField hasSearchIcon={false} placeholder={"Input your note..."} width={"440px"} {...register('title')}/>
                                </div>
                                <div>
                                    <DescriptionField placeholder={"Add description..."} width={"440px"} {...register('description')}/>
                                </div>
                                <div className={styles.dateField}>
                                    <DateField {...register('deadline')}/>
                                </div>
                                <div className={styles.buttonOptions}>
                                    <button onClick={closeForm} className={styles.cancelFormBtn}>cancel</button>
                                    <button onClick={createNote} className={styles.addFormBtn} type='submit'>apply</button>
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