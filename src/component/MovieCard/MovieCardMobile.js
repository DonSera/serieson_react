import styles from './MovieCardMobile.module.css'
import SubTitle from "../Icon/SubTitle";
import Youth from "../Icon/Youth";
import CircleIcon from "../Icon";
import Quality from "../Icon/Quality";

function MovieCarMobile({obj}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <a className={`${styles[`movie-card`]} ${styles[`font-size`]}`} href={obj['url']}>
            {obj['hot']
                ? <CircleIcon text={'HOT'} diameter={'40px'} fontSize={'10px'}/>
                : obj['event']
                    ? <CircleIcon text={'Event'} diameter={'40px'} fontSize={'10px'}/>
                    : <></>
            }
            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <span className={styles[`info`]}>
                <section>
                    <Quality text={obj.type}/>
                    {obj["subTitle"] ? <SubTitle/> : <></>}
                    {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                    <span className={styles['main-title']}>{obj["mainTitle"]}</span>
                    <span>{`(${obj['priceType']})`}</span>
                </section>
                <section>
                    <span>{`${obj['info']['time']}분 | `}</span>
                    <span>{`${obj['info']['age']}세관람가`}</span>
                </section>
                <section>
                    <span>{obj['info']['actors'].join(', ')}</span>
                </section>
                <section>
                    <span>{obj['info']['open']}</span>
                </section>
                <section>
                    <span>{obj['priceType']}</span>
                    <span>{obj['price']}</span>
                </section>
            </span>
        </a>
    )

}

export default MovieCarMobile;