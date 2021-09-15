import styles from './MovieCard.module.css'
import CircleIcon from "../Icon";

function MovieCard({objs}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    const obj = {
        img: `https://tvstore-phinf.pstatic.net/20210820_71/1629422353958lRDF0_JPEG/The_Suicide_Squad_STD_V_DD_KA_TT_2160x2880_300dpi_KR.jpg?type=f148_202`,
        mainTitle: `더 수어사이드 스쿼드`,
        subTitle: false,
        type: 'HD',
        grad: 7.1,
        price: 12000,
        youth: true,
        priceType: `구매`,
    }

    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            <CircleIcon text={"Event"}/>
            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <div className={styles[`info`]}>
                <span className={styles[`type`]}>{obj.type}</span>
                {obj.subTitle ? <span>자막</span> : <></>}
                {obj.youth ? <></> : <span>청불</span>}
                <span>{obj.mainTitle}</span>
            </div>
            <div className={styles[`grad`]}>
                <span>별 개수 </span>
                <span>{obj.grad}</span>
            </div>
            <div className={styles[`price`]}>
                <span>{obj.priceType}</span>
                <span>{obj.price}</span>
            </div>
        </section>
    )

}

export default MovieCard;