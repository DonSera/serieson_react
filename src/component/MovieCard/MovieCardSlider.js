import styles from './MovieCardSlider.module.css'
import CircleIcon from "../Icon";
import Quality from "../Icon/Quality";
import SubTitle from "../Icon/SubTitle";
import Youth from "../Icon/Youth";
import StarRatings from "react-star-ratings";

function MovieCardSlider({obj}) {
    // obj : 이미지, 이름 , 별점, 가격, +a
    return (
        <section className={`${styles[`movie-card`]} ${styles[`font-size`]}`}>
            {obj['hot']
                ? <CircleIcon text={'HOT'} diameter={'50px'} fontSize={'15px'}/>
                : obj['event']
                    ? <CircleIcon text={'Event'} diameter={'50px'} fontSize={'15px'}/>
                    : <></>}
            <a className={'link'} href={obj['url']}>
                <img className={styles[`img`]} alt={`영화 이미지`} src={obj.img}/>
                <div className={styles[`title`]}>
                    <Quality text={obj.type}/>
                    {obj["subTitle"] ? <SubTitle/> : <></>}
                    {obj["info"]["age"] < 19 ? <></> : <Youth/>}
                    <span className={styles['main-title']}>{obj["mainTitle"]}</span>
                </div>
            </a>
            <div className={styles[`grad`]}>
                <StarRatings
                    rating={obj["grad"]/2}
                    starEmptyColor={'grey'}
                    starRatedColor={'red'}
                    numberOfStars={5}
                    starDimension="17px"
                    starSpacing="1px"
                />
                <span>{obj["grad"]%1 ? obj["grad"] : `${obj["grad"]}.0`}</span>
            </div>
            <div className={styles[`price`]}>
                <span>{obj["priceType"]}</span>
                <span id={styles['price']}>{obj["price"] >= 1000
                    ? `${Math.floor(obj["price"] / 1000)},${obj["price"] % 1000}`
                    : obj["price"]}</span>
            </div>
        </section>
    )

}

export default MovieCardSlider;