import AddNoteButton from "../../AddNoteButton/model/AddNoteButton"
import Notes from "../../Notes/model/Notes"
import styles from "../ui/TodoManager.module.css"
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