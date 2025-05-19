import AddNoteButton from "../../AddNoteButton/model/AddNoteButton"
import Notes from "../../Notes/model/Notes"
import styles from "../ui/TodoManager.module.css"

function TodoManager() {
    return(
        <div className={styles.container}>
            <Notes/>
            <AddNoteButton className={styles.addNewNote}/>
        </div>
    )
}
export default TodoManager