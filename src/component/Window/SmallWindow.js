import styles from './SmallWindow.module.css'

function SmallWindow(props) {
    return (
        <div className={styles['window-background']} style={{width: props.width, height:props.height}}>
            <div className={styles['window-header']} style={{height: props.header}}/>
            <div className={styles['window-main']}>{props.contents}</div>
        </div>
    );
}

export default SmallWindow;