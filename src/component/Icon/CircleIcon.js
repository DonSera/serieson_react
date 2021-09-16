import styles from './CircleIcon.module.css'
function CircleIcon(props){
    return(
        <div className={styles[`circle-icon`]}
             style={{width : props.width, height: props.height}}>
            {props.text}
        </div>
    )
}
export default CircleIcon;