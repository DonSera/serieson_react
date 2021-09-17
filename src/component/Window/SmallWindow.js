import styles from './SmallWindow.module.css'

function SmallWindow({width, height, header, contents}) {
    return (
        <div className={styles['window-background']} style={{width: width, height:height}}>
            <div className={styles['window-header']} style={{height: header}}/>
            <div className={styles['window-main']}>{contents}</div>
        </div>
    );
}

export default SmallWindow;