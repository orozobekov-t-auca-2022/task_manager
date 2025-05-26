import AddNoteButton from "../../AddNoteButton/ui/AddNoteButton"
import Notes from "../../Notes/ui/Notes"
import styles from "./TodoManager.module.css"
import { useSelector } from "react-redux";
import UndoButton from "../../../widgets/UndoButton/ui/UndoButton";

function TodoManager() {
    const notes = useSelector((state) => state.notes.undo)

    return(
        <div className={styles.container}>
            <Notes/>
            <AddNoteButton className={styles.addNewNote}/>
            {
                notes ? <UndoButton/> : <></>
            }
        </div>
    )
}
export default TodoManager