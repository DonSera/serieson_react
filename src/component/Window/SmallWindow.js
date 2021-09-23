import styles from './SmallWindow.module.css'

function SmallWindow({windowWidth, windowHeight = 0, headerHeight, headerText, contents, url}) {
    function renderContent() {
        return <div className={styles['window-main']}>{contents}</div>;
    }

    function renderHeader(){
        return <div className={styles['window-header']} style={{height: headerHeight}}>
            <span className={styles['header-text']}>{headerText}</span>
            {url ? <a className={styles['header-link']} href={url}>더보기 ></a> : ''}
        </div>
    }

    if (windowHeight) {
        return <div className={styles['window-background']} style={{width: windowWidth, height: windowHeight}}>
            {renderHeader()}
            {renderContent()}
        </div>;
    } else {
        return <div className={styles['window-background']} style={{width: windowWidth}}>
            {renderHeader()}
            {renderContent()}
        </div>;
    }
}

export default SmallWindow;