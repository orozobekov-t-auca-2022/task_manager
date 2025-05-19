import Note from "../../Note/model/Note";
import styles from "../styles/Notes.module.css"

function Notes() {
    return(
        <div className={styles.list}>
            <Note/>
        </div>
    )
}

export default Notes;