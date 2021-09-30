import styles from './Advertise.module.css'

function Advertise({width, height, urlImg, imgSize='100%', urlLink, float = 'top'}) {
    if (urlImg) {
        return <a className={styles[`adver`]} href={urlLink} style={{
            width: width,
            height: height,
            float: float,
        }}>
            <img style={{width: imgSize}} src={urlImg} alt={'광고'}/>
        </a>;
    } else {
        return <div className={styles[`adver`]} style={{
            width: width,
            height: height,
            float: float,
        }}>광고</div>;
    }
}

export default Advertise;