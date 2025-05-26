import AddNoteButton from "../components/AddNoteButton/ui/AddNoteButton"
import Notes from "../components/Notes/ui/Notes"
import SearchBar from "../components/SearchBar/ui/SearchBar"
import TodoManager from "../components/TodoManager/ui/TodoManager"
import styles from "./MainPage.module.css"

function MainPage() {
    return(
        <div className={styles.container}>
            <h1>Todo list</h1>
            <SearchBar/>
            <TodoManager/>
        </div>
    )
}
export default MainPage