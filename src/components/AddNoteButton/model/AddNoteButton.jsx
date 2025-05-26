import { useState } from 'react';
import styles from '../styles/AddNoteButton.module.css'
import TextField from '../../../widgets/TextField/ui/TextField';
import { useForm } from 'react-hook-form';
import DescriptionField from '../../../widgets/DescriptionField/model/DescriptionField';
import { yupResolver } from '@hookform/resolvers/yup';
import DateField from '../../../widgets/DateField/model/DateField';
import { NoteStatus } from '../../Note/config/NoteStatus';
import { schema } from '../../config/schema';
import { useDispatch } from 'react-redux';
import { addNote } from '../../Notes/slice/noteSlice';

function AddNoteButton(){
    const dispatch = useDispatch();
    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    });
    const [isFormOpen, setFormOpen] = useState(false);
    function openForm(){
        setFormOpen(true);
    }
    function closeForm(){
        setFormOpen(false);
    }
    function onSubmit(data){
        const formData = {
            id: Date.now(),
            title: data.title,
            description: data.description,
            deadline: data.deadline.toISOString(),
            status: NoteStatus.NEW
        }
        dispatch(addNote(formData))
        window.dispatchEvent(new Event('notes-updated'));
        setFormOpen(false);
    }
    return(
        <div>
            <button className={styles.addBtn} onClick={openForm}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.5 22.8916C10.5 23.2891 10.658 23.6704 10.9393 23.9514C11.2206 24.2325 11.6022 24.3904 12 24.3904C12.3978 24.3904 12.7794 24.2325 13.0607 23.9514C13.342 23.6704 13.5 23.2891 13.5 22.8916V13.8988H22.5C22.8978 13.8988 23.2794 13.7409 23.5607 13.4598C23.842 13.1787 24 12.7975 24 12.4C24 12.0025 23.842 11.6213 23.5607 11.3402C23.2794 11.0591 22.8978 10.9012 22.5 10.9012H13.5V1.90835C13.5 1.51084 13.342 1.12962 13.0607 0.848536C12.7794 0.567455 12.3978 0.409546 12 0.409546C11.6022 0.409546 11.2206 0.567455 10.9393 0.848536C10.658 1.12962 10.5 1.51084 10.5 1.90835V10.9012H1.5C1.10218 10.9012 0.720644 11.0591 0.43934 11.3402C0.158035 11.6213 0 12.0025 0 12.4C0 12.7975 0.158035 13.1787 0.43934 13.4598C0.720644 13.7409 1.10218 13.8988 1.5 13.8988H10.5V22.8916Z" fill="#F7F7F7"/>
                </svg>
            </button>
            {
                isFormOpen && (
                    <div className={styles.shadedBackground}>
                        <div className={styles.container}>
                            <form className={styles.addForm} onSubmit={handleSubmit(onSubmit)}>
                                <h3>New Note</h3>
                                <TextField className={styles.addFormInput} error={!!errors.title} hasSearchIcon={false} placeholder={"Input your note..."} width={"440px"} helperText={errors.title?.message} {...register('title', {required: 'Title is required'})}/>
                                <DescriptionField className={styles.addFormDescription} error={!!errors.title} placeholder={"Add description..."} helperText={errors.description?.message} {...register('description', {required: 'Description is required'})}/>
                                <div className={styles.dateField}>
                                    <DateField {...register('deadline', {required: 'Deadline is required'})} error={!!errors.title} helperText={errors.deadline?.message}/>
                                </div>
                                <div className={styles.buttonOptions}>
                                    <button onClick={closeForm} className={styles.cancelFormBtn}>cancel</button>
                                    <button className={styles.addFormBtn} type='submit'>apply</button>
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