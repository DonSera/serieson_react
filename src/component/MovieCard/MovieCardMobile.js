import styles from './MovieCardMobile.module.css'
import SubTitle from "../Icon/SubTitle";
import Youth from "../Icon/Youth";
import Quality from "../Icon/Quality";
import EventCircle from "./CardEle/EventCircle";
import Rank from "../Icon/Rank";

function MovieCarMobile({obj, rank = 0}) {

    return (
        <a className={`${styles[`movie-card`]} ${styles[`font-size`]}`} href={obj['url']}>
            {!rank
                ? <EventCircle obj={obj} size={40}/>
                : <></>}

            <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
            <span className={styles[`info`]}>
                <section>
                    {rank ? <Rank num={rank}/> : <></>}
                    {!rank
                        ? <Quality text={obj.type}/>
                        : <></>}
                    {obj["subTitle"] ? <SubTitle/> : <></>}
                    {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                    <span className={styles['main-title']}>{obj["mainTitle"]}</span>
                    {!rank
                        ? <span>{`(${obj['priceType']})`}</span>
                        : <></>}
                </section>
                {!rank
                    ? <section>
                        <span>{`${obj['info']['time']}분 | `}</span>
                        <span>{`${obj['info']['age']}세관람가`}</span>
                    </section>
                    : <></>}

                <section>
                    <span>{obj['info']['actors'].join(', ')}</span>
                </section>

                {!rank
                    ? <section>
                        <span>{obj['priceType']}</span>
                        <span>{obj['price']}</span>
                    </section>
                    : <></>}
            </span>
        </a>
    )

}

export default MovieCarMobile;