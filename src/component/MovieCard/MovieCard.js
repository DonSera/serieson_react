import styles from './MovieCard.module.css'
import Quality from "../Type/Quality";
import SubYouth from "../Type/SubYouth";
import CircleIcon from "../Icon";

function MovieCard({obj}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            <div className={styles[`wrap`]}>
                <CircleIcon text={"Event"} diameter={'40px'} fontSize={'10px'}/>
                <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
                <div className={styles[`info`]}>
                    <Quality text={obj.type}/>
                    {obj["subTitle"] ? <SubYouth sub={obj.subTitle}/> : <></>}
                    {obj["youth"] ? <></> : <SubYouth youth={obj.youth}/>}
                    <span>{obj["mainTitle"]}</span>
                </div>
                <div className={styles[`grad`]}>
                    <span>별 개수 </span>
                    <span>{obj["grad"]}</span>
                </div>
                <div className={styles[`price`]}>
                    <span>{obj["priceType"]}</span>
                    <span>{obj["price"]}</span>
                </div>
            </div>
        </section>
    )

}

export default MovieCard;