import styles from './Advertise.module.css'

function Advertise({width, height, float='top'}) {
    return (
        <div className={styles[`adver`]} style={{
            width: width,
            height: height,
            float: float
        }}>광고</div>
    )
}

export default Advertise;