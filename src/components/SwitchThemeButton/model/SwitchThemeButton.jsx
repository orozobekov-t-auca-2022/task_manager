import darkIcon from '../../../assets/darkMode.svg'
import styles from '../ui/SwitchTheme.module.css'

function SwitchThemeButton() {
    return(
        <button className={styles.btn}>
            <img src={darkIcon} alt="" />
        </button>
    )
}
export default SwitchThemeButton