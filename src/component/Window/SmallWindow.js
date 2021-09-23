import styles from './SmallWindow.module.css'

function SmallWindow({width, height = 0, header, contents}) {
    if (height) {
        return <div className={styles['window-background']} style={{width: width, height: height}}>
            <div className={styles['window-header']} style={{height: header}}> header </div>
            <div className={styles['window-main']}>{contents}</div>
        </div>;
    } else {
        return <div className={styles['window-background']} style={{width: width}}>
            <div className={styles['window-header']} style={{width: width, height: header}}>Header</div>
            <div className={styles['window-main']} style={{width: width}}>{contents}</div>
        </div>;
    }
}

export default SmallWindow;