import styles from './Rank.module.css'

function Rank({num}){
    return <span className={styles[`rank`]}>{num}</span>;
}

export default Rank;