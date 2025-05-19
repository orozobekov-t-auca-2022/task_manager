import AddNoteButton from "../components/AddNoteButton/model/AddNoteButton"
import Notes from "../components/Notes/model/Notes"
import SearchBar from "../components/SearchBar/model/SearchBar"
import TodoManager from "../components/TodoManager/model/TodoManager"
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