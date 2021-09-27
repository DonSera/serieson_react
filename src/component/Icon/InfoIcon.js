import styles from './InfoIcon.module.css'

export function Quality() {
    return <span id={styles['HD']} className={styles['ico_mv_lst6']}/>
}

export function Rank({num}) {
    const positionPxNum = (400+num*20+4) *(-1)
    return <span id={styles['rank']} className={styles['sp_home_new_v3']}
    style={{backgroundPosition: `${positionPxNum}px -521px`}}/>
}

export function SubTitle() {
    return <span id={styles['subTitle']} className={styles['ico_mv_lst6']}/>;
}

export function Youth() {
    return <span id={styles['youth']} className={styles['spr_adult_ico_v2']}/>;
}
