import styles from './MovieCardMobile.module.css'
import {Quality, SubTitle, Youth, Rank} from "../Icon/InfoIcon"
import EventCircle from "./CardEle/EventCircle";


function MovieCarMobile({obj, rank = 0}) {
    function title() {
        return (
            <>
                {obj["subTitle"] && <SubTitle/>}
                {obj["info"]["age"] > 18 && <Youth/>}
                <span className={styles['main-title']}>{obj["mainTitle"]}</span>
            </>
        )
    }

    function actorNames() {
        return (
            <section>
                <span>{obj['info']['actors'].join(', ')}</span>
            </section>
        )
    }

    function movieInfo() {
        return (
            <section>
                <span>{`${obj['info']['time']}분 | `}</span>
                <span>{obj['info']['age'] === 0 ? '전체관람가' : `${obj['info']['age']}세관람가`}</span>
            </section>
        )
    }

    function moviePrice() {
        return (
            <section>
                <span>{obj['priceType']}</span>
                <span>{obj['price']}</span>
            </section>
        )
    }

    function render() {
        if (rank) {
            return (
                <a className={`${styles[`movie-card`]}`} href={obj['url']}>
                    <img className={`${styles[`img`]}`} alt={`영화 이미지`} src={obj.img}/>
                    <span className={styles[`info`]}>
                        <Rank num={rank}/>
                        {title()}
                        {actorNames()}
                    </span>
                </a>
            );
        } else {
            return (
                <a className={`${styles[`movie-card`]} ${styles['mobile-card']}`} href={obj['url']}>
                    <EventCircle obj={obj} size={40}/>
                    <img className={`${styles[`img`]}  ${styles[`mobile-img`]}`} alt={`영화 이미지`} src={obj.img}/>
                    <span className={styles[`info`]}>
                        <section>
                            <Quality text={obj.type}/>
                            {title()}
                            <span>{`(${obj['priceType']})`}</span>
                        </section>
                        {movieInfo()}
                        {actorNames()}
                        {moviePrice()}
                    </span>
                </a>);
        }
    }

    return render();
}

export default MovieCarMobile;