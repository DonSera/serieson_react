import styles from './MovieCardSide.module.css'
import SubTitle from "../Icon/SubTitle";
import Rank from "../Icon/Rank";
import Youth from "../Icon/Youth";

function MovieCardSide({obj, rank}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <span className={styles[`info`]}>
                <Rank num={rank}/>
                {obj["subTitle"] ? <SubTitle/> : <></>}
                {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                <span className={styles['main-title']}>{obj["mainTitle"]}</span>
            </span>
        </section>
    )

}

export default MovieCardSide;