import styles from './MovieCardSide.module.css'
import SubYouth from "../Icon/SubYouth";
import Rank from "../Icon/Rank";

function MovieCardSide({obj}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <span className={styles[`info`]}>
                <Rank num={obj['rank']}/>
                {obj["subTitle"] ? <SubYouth sub={obj["subTitle"]}/> : <></>}
                {obj["youth"] ? <></> : <SubYouth youth={obj.youth}/>}
                <span>{obj["mainTitle"]}</span>
            </span>
        </section>
    )

}

export default MovieCardSide;