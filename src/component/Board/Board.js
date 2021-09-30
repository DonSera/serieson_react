import styles from './Board.module.css'

function Board({boardWidth, boardHeight = 0, headerHeight, headerText, contents, url}) {
    function renderContent() {
        if (boardHeight) {
            return <div className={styles['board-main']}>
                <div className={styles['contents-center']}>{contents}</div>
            </div>;
        } else {
            return <div className={styles['board-main']}>{contents}</div>;
        }
    }

    function renderHeader() {
        return <div className={styles['board-header']} style={{height: headerHeight}}>
            <span className={styles['header-text']}>{headerText}</span>
            {url && <a className={styles['header-link']} href={url}>더보기 ></a>}
        </div>
    }

    if (boardHeight) {
        return <div className={styles['board-background']} style={{width: boardWidth, height: boardHeight}}>
            {renderHeader()}
            {renderContent()}
        </div>;
    } else {
        return <div className={styles['board-background']} style={{width: boardWidth}}>
            {renderHeader()}
            {renderContent()}
        </div>;
    }
}

export default Board;