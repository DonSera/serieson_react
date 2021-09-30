import styles from "./Title.module.css";
import {Quality, SubTitle, Youth} from "../../Icon/InfoIcon"

function Title({obj, type = 'info'}) {
    return (
        <a href={obj['url']}>
            {type === 'info' && <img className={`${styles[`img`]} ${styles['info-img']}`}
                                     alt={`영화 이미지`}
                                     src={obj.img}/>}
            {type === 'slider' && <img className={`${styles[`img`]} ${styles['slider-img']}`}
                                       alt={`영화 이미지`}
                                       src={obj.img}/>}
            <div className={styles[type === 'slider' ? 'slider-title' : type === 'info' && 'info-title']}>
                <Quality text={obj.type}/>
                {obj["subTitle"] ? <SubTitle/> : <></>}
                {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                <span className={styles['main-title']}>{obj["mainTitle"]}</span>
            </div>
        </a>
    )
}

export default Title;