import './App.css';
import MovieCard from "./component/MovieCard";
import MovieCardSlider from "./component/MovieCard/MovieCardSlider";
import MovieCardSide from "./component/MovieCard/MovieCardSide";
import Advertise from "./component/Advertise/Advertise";
import SmallWindow from "./component/Window/SmallWindow";
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

    const footerInfo = [
        `시리즈온에서 판매되는 콘텐츠의 저작권은 제공처에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 처벌될 수 있습니다.`,
        `사업자등록번호 669-86-01888 통신판매업 신고번호 2020-성남분당B-0719 (사업자정보 확인) 대표이사 김준구`,
        `주소 경기도 성남시 분당구 분당내곡로 117, 9층 (백현동, 크래프톤 타워) 고객센터 1588-3820 이메일 ccnaver@naver.com`,
        `© NAVER WEBTOON Limited`
    ]

    const settings = {
        className: 'slider-css',
        dots: true,
        speed: 500,
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
                    <div style={{position: 'absolute', bottom: 5, right: 5}}>추천하기</div>
                </section>

                <section className={`movie-info`}>
                    <section className={`main-info`}>
                        <div className={`adveres`}>
                            <Advertise width={'48%'} height={'100%'} dirction={'left'}/>
                            <Advertise width={'48%'} height={'100%'} dirction={'right'}/>
                        </div>
                        <SmallWindow width={`100%`}
                                     height={`43%`}
                                     header={`25px`}
                                     contents={sugestInfo.map((obj, index) => {
                                         if (index > 9) return '';
                                         else return <MovieCard key={`recent_${obj.name}_${index}`} obj={obj}/>;
                                     })}/>
                        <SmallWindow width={`100%`}
                                     height={`43%`}
                                     header={`25px`}
                                     contents={sugestInfo.map((obj, index) => {
                                         if (index > 9) return '';
                                         else return <MovieCard key={`discount_${obj.name}_${index}`} obj={obj}/>;
                                     })}/>
                    </section>

                    <section className={`side-info`}>
                        <Advertise width={'100%'} height={'20%'}/>
                        <SmallWindow width={'100%'}
                                     height={'70%'}
                                     header={'25px'}
                                     contents={sugestInfo.map((obj, index) => {
                                         if (index > 9) return '';
                                         else return <MovieCardSide key={`side_${obj.name}_${index}`} obj={obj}/>;
                                     })}/>
                        <Advertise width={'100%'} height={'8%'}/>
                    </section>
                </section>

                <section className={`app-service`}>
                    <span className={`event`}/>
                    <span className={`service`}/>
                </section>

                <section className={`footer`}>
                    <div className={`footer-info`}>
                        {footerInfo.map(text => <div>{text}</div>)}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;
