import CheckBox from "../../../widgets/CheckBox/ui/CheckBox";
import styles from "./Note.module.css"
import { NoteStatus } from "../model/NoteStatus";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import TextField from "../../../widgets/TextField/ui/TextField";
import DescriptionField from "../../../widgets/DescriptionField/ui/DescriptionField";
import DateField from "../../../widgets/DateField/ui/DateField";
import { useDispatch } from "react-redux";
import { editNote, removeNote, changeTaskStatus, showUndo } from "../../Notes/model/noteSlice";
import { schema } from "../../AddNoteButton/model/schema";

function Note(props){
    const dispatch = useDispatch();
    const [clickedEdit, setClickedEdit] = useState(false);
    const {register, handleSubmit, formState: { errors }, reset} = useForm({
            defaultValues: props.note,
            resolver: yupResolver(schema)
        });
    function changeStatus(){
        dispatch(changeTaskStatus(props.note));
        window.dispatchEvent(new Event('notes-updated'))
    }
    function removeTask(){
        dispatch(showUndo(true));
        setTimeout(() => {
            dispatch(showUndo(false));
        }, 4000)
        dispatch(removeNote(props.selectedIndex));
        window.dispatchEvent(new Event('notes-updated'));
    }
    function closeForm(){
        setClickedEdit(false);
        reset();
    }
    function onSave(data) {
        data.deadline = data.deadline.toISOString()
        const formData = {
            "data": data,
            "index": props.selectedIndex
        }
        dispatch(editNote(formData))
        window.dispatchEvent(new Event('notes-updated'));
        setClickedEdit(false);
    }
    
    return(
        <>
            <div className={styles.container} style={props.style}>
                <CheckBox onChange={changeStatus} status={props.note.status}/>
                <h2 className={(props.note.status === NoteStatus.DONE) ? (styles.crossedTitle) : (styles.ordinaryTitle)}>{props.note.title}</h2>
                <div className={styles.editIcon} onClick={() => {setClickedEdit(true)}}>
                    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.editBtn} d="M7.67272 3.49106L1 10.1637V13.5H4.33636L11.0091 6.82736M7.67272 3.49106L10.0654 1.09837L10.0669 1.09695C10.3962 0.767585 10.5612 0.602613 10.7514 0.540824C10.9189 0.486392 11.0993 0.486392 11.2669 0.540824C11.4569 0.602571 11.6217 0.767352 11.9506 1.09625L13.4018 2.54738C13.7321 2.87769 13.8973 3.04292 13.9592 3.23337C14.0136 3.40088 14.0136 3.58133 13.9592 3.74885C13.8974 3.93916 13.7324 4.10414 13.4025 4.43398L13.4018 4.43468L11.0091 6.82736M7.67272 3.49106L11.0091 6.82736" stroke="#CDCDCD" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className={styles.deleteIcon} onClick={removeTask}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g className={styles.iconGroup}>
                            <path d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z" />
                            <path d="M14.625 3.75H3.375" strokeLinecap="round" />
                            <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" />
                            <path d="M10.5 9V12.75" strokeLinecap="round" />
                            <path d="M7.5 9V12.75" strokeLinecap="round" />
                        </g>
                    </svg>
                </div>
            </div>
            {
                clickedEdit && (
                    <div className={styles.shadedBackground}>
                        <div className={styles.formContainer}>
                            <form className={styles.addForm} onSubmit={handleSubmit(onSave)}>
                                <h3>New Note</h3>
                                <div>
                                    <span>Title</span>
                                    <TextField className={`${styles.addFormInput} ${errors.title ? styles.error : ''}`} hasSearchIcon={false} placeholder={"Input your note..."} {...register('title')} error={!!errors.title} helperText={errors.title?.message}/>
                                </div>
                                <div className={styles.description}>
                                    <span>Description</span>
                                    <DescriptionField className={`${styles.addFormDescription} ${errors.description ? styles.error : ''}`} placeholder={"Add description..."} {...register('description')}  error={!!errors.description} helperText={errors.description?.message}/>
                                </div>
                                <div className={styles.dateField}>
                                    <span>Deadline</span>
                                    <DateField {...register('deadline')} error={!!errors.deadline} helperText={errors.deadline?.message}/>
                                </div>
                                <div className={styles.buttonOptions}>
                                    <button onClick={closeForm} className={styles.cancelFormBtn}>cancel</button>
                                    <button className={styles.addFormBtn} type='submit'>save</button>
                                </div>
                            </form>
                        </div>
                    </div>  
                )
            }
        </>
    )
}

export default Note;