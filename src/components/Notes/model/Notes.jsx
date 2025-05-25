import Note from "../../Note/model/Note";
import styles from "../styles/Notes.module.css"
import noNotes from "../../../assets/DetectiveCheckFootprint.png"
import { useSelector } from "react-redux";

function Notes() {
    const notes = useSelector((state) => state.notes.visibleNotes)
    
    return(
        <div className={styles.listContainer}>
            {notes ? (notes.map((key, index) => (
                <div className={styles.list} key={notes[index].id}>
                    <Note note={notes[index]} selectedIndex={index} style={index !== notes.length - 1 ? { borderBottom: "1px solid #6C63FF" } : {}}/>
                </div>)
                )
            ) : (
                <div className={styles.noNotesContainer}>
                    <div className={styles.noNotesSection}>
                        <img src={noNotes} alt="" />
                    </div>
                    <div className={styles.noNotesSection}>
                        <h3>Empty...</h3>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Notes;