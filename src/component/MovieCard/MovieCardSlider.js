import styles from './MovieCardSlider.module.css'
import CircleIcon from "../Icon";
import Quality from "../Icon/Quality";
import SubTitle from "../Icon/SubTitle";
import Youth from "../Icon/Youth";

function MovieCardSlider({obj}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            {obj['hot']
                ? <CircleIcon text={'HOT'} diameter={'50px'} fontSize={'15px'}/>
                : obj['event']
                    ? <CircleIcon text={'Event'} diameter={'50px'} fontSize={'15px'}/>
                    : <></>}
            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <div className={styles[`info`]}>
                <Quality text={obj.type}/>
                {obj["subTitle"] ? <SubTitle/> : <></>}
                {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                <span className={styles['main-title']}>{obj["mainTitle"]}</span>
            </div>
            <div className={styles[`grad`]}>
                <span>별 개수 </span>
                <span>{obj["grad"]}</span>
            </div>
            <div className={styles[`price`]}>
                <span>{obj["priceType"]}</span>
                <span>{obj["price"]}</span>
            </div>
        </section>
    )

}

export default MovieCardSlider;