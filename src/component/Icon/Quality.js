import styles from './Quality.module.css'

function Quality({text}){
        return <span className={styles[`quality`]}>{text}</span>;
}

export default Quality