import { useEffect, useState } from "react";
import Note from "../../Note/model/Note";
import styles from "../styles/Notes.module.css"

function Notes() {
    const [noteList, setNoteList] = useState([]);
    useEffect(() =>{
        function loadNotes() {
            setNoteList(JSON.parse(localStorage.getItem('notes')) || []);
        }
        window.addEventListener('notes-updated', loadNotes);
        loadNotes();
        return () => {
            window.removeEventListener('notes-updated', loadNotes);
        }
    }, [])

    return(
        <div>
            {noteList.length > 0 ? (noteList.map((key, index) => (
                <div className={styles.list} key={noteList[index].id}>
                    <Note note={noteList[index]} selectedIndex={index}/>
                </div>)
                )
            ) : (
                <>loading</>
            )}
        </div>
    )
}

export default Notes;