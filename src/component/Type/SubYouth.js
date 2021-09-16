import styles from './SubYouth.module.css'

function SubYouth(props){
    if(props.youth === false){
        return <span className={styles[`youth`]}>청불</span>;
    }
    else if(props.sub === true){
        return <span className={styles[`sub`]}>자막</span>;
    }

    return <></>;
}

export default SubYouth;