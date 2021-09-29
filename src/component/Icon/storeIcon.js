import styles from './storeIcon.module.css'

export function GooglePlay() {
    return <a href={'https://play.google.com/store/apps/details?id=com.nhn.android.navertv'}
              id={styles['googlePlay']}
              className={styles['play-icon']}/>
}

export function AppleStore() {
    return <a href={'https://apps.apple.com/kr/app/id530059576'}
              id={styles['appleStore']}
              className={styles['play-icon']}/>
}

export function WindowsPlayer() {
    return <a href={'https://appdown.pstatic.net/naver/NaverMediaPlayer/setup/SeriesPlayerInst.exe'}
              id={styles['windowsPlayer']}
              className={styles['play-icon']}/>
}

export function IconTitle(){
    return <div id={styles['IconTitle']}
                className={styles['play-icon']}/>
}