import styles from './InfoIcon.module.css'

export function Quality({text}){
    return <span className={styles[`quality`]}>{text}</span>;
}

export function Rank({num}){
    return <span className={styles[`rank`]}>{num}</span>;
}

export function SubTitle() {
    return <span className={styles[`sub`]}>자막</span>;
}

export function Youth(){
    return <span className={styles[`youth`]}>청불</span>;
}
