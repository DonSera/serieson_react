import styles from './CircleIcon.module.css'
function CircleIcon({text}){
    return(
        <div className={styles[`circle-icon`]}>{text}</div>
    )
}
export default CircleIcon;