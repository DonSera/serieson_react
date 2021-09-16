import styles from './Advertise.module.css'

function Advertise(props){
return(
    <div className={styles[`adver`]} style={{width: props.width, height: props.height}}>광고</div>
)
}

export default Advertise;