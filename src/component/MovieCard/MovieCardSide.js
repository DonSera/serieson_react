import styles from './MovieCardSide.module.css'
import CircleIcon from "../Icon";

function MovieCardSide({obj}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            <CircleIcon text={"Event"} width={'30px'} height={'30px'}/>
            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <span className={styles[`info`]}>
                <span className={styles[`type`]}>{obj.type}</span>
                {obj.subTitle ? <span>자막</span> : <></>}
                {obj.youth ? <></> : <span>청불</span>}
                <span>{obj.mainTitle}</span>
            </span>
        </section>
    )

}

export default MovieCardSide;