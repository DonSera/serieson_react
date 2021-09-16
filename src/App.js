import './App.css';
import MovieCard from "./component/MovieCard";
import MovieCardSlider from "./component/MovieCard/MovieCardSlider";
import MovieCardSide from "./component/MovieCard/MovieCardSide";
import Adver from "./component/Adver";
import fetch from "./function/fetch";
import {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const [sugestInfo, setsugestInfo] = useState([]);
    useEffect(() => {
        fetch().then(arr => {
                setsugestInfo(arr);
            }
        )
    }, [])

    const settings = {
        className: 'slider-css',
        dots: true,
        speed : 500,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
    };


    return (
        <div className="App">
            <div className={`main`}>
                <section className={`header`}>
                    <div className={`app-logo`}/>
                    <div className={`app-search`}/>
                </section>

                <section className={`movie-suggestion`}>
                    <div className={`suggestion`}>
                        <Slider {...settings}>
                            {sugestInfo.map((obj, index) => {
                                return (
                                        <MovieCardSlider key={`suggestion_${obj.name}_${index}`} obj={obj}/>
                                    );
                            })}
                        </Slider>
                    </div>
                    <div style={{position: 'absolute', bottom:5, right: 5}}>추천하기</div>
                </section>

                <section className={`movie-info`}>
                    <section className={`main-info`}>
                        <div className={`adveres`}>
                            <Adver width={"344px"} height={"131px"}/>
                            <Adver width={"344px"} height={"131px"}/>
                        </div>
                        <div className={`recent`}>
                            {sugestInfo.map((obj, index) => {
                                if (index > 9) return '';
                                else return <MovieCard key={`recent_${obj.name}_${index}`} obj={obj}/>;
                            })}
                        </div>
                        <div className={`discount`}>
                            {sugestInfo.map((obj, index) => {
                                if (index > 9) return '';
                                else return <MovieCard key={`discount_${obj.name}_${index}`} obj={obj}/>;
                            })}
                        </div>
                    </section>

                    <section className={`side-info`}>
                        <div className={`adver2`}/>
                        <div className={`top10`}>
                            {sugestInfo.map((obj, index) => {
                                if (index > 9) return '';
                                else return <MovieCardSide key={`side_${obj.name}_${index}`} obj={obj}/>;
                            })}
                        </div>
                        <div className={`adver2`}/>
                    </section>
                </section>

                <section className={`app-service`}>
                    <div className={`event`}/>
                    <div className={`service`}/>
                </section>

                <section className={`footer`}/>
            </div>
        </div>
    );
}

export default App;
