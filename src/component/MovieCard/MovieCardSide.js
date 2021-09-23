import styles from './MovieCardSide.module.css'
import SubTitle from "../Icon/SubTitle";
import Rank from "../Icon/Rank";
import Youth from "../Icon/Youth";

function MovieCardSide({obj, rank}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <a className={`${styles[`movie-card`]} ${styles[`font-size`]}`} href={obj['url']}>
            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <span className={styles[`info`]}>
                <div>
                <Rank num={rank}/>
                    {obj["subTitle"] ? <SubTitle/> : <></>}
                    {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                    <span className={styles['main-title']}>{obj["mainTitle"]}</span>
                </div>
                <div>
                    <span>{obj['info']['actors']}</span>
                </div>

            </span>
        </a>
    )

}

export default MovieCardSide;