import styles from "./Title.module.css";
import Quality from "../../Icon/Quality";
import SubTitle from "../../Icon/SubTitle";
import Youth from "../../Icon/Youth";

function Title({obj, type = 'info'}) {
    return (
        <a href={obj['url']}>
            {type === 'info'
                ? <img className={`${styles[`img`]} ${styles['info']}`}
                       alt={`영화 이미지`}
                       src={obj.img}
                />
                : <img className={`${styles[`img`]} ${styles['slider']}`}
                       alt={`영화 이미지`}
                       src={obj.img}
                />}

            <div className={styles[`title`]}>
                <Quality text={obj.type}/>
                {obj["subTitle"] ? <SubTitle/> : <></>}
                {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                <span className={styles['main-title']}>{obj["mainTitle"]}</span>
            </div>
        </a>
    )
}

export default Title;