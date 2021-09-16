import styles from './CircleIcon.module.css'
function CircleIcon(props){
    return(
        <div className={styles[`circle-icon`]}
             style={{width : props.diameter,
                 height: props.diameter,
                 fontSize: props.fontSize}}>
            {props.text}
        </div>
    )
}
export default CircleIcon;