import './App.css';
import MovieCard from "./component/MovieCard";
import MovieCardSlider from "./component/MovieCard/MovieCardSlider";
import MovieCardSide from "./component/MovieCard/MovieCardSide";
import Advertise from "./component/Advertise/Advertise";
import SmallWindow from "./component/Window/SmallWindow";
import fetch from "./function/fetch";
import sortRank from "./function/sortRank";
import select from "./function/select";
import {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
    const [info, setInfo] = useState([]);
    const [sort, setSort] = useState([])
    const [selectEvent, setSelectEvent] = useState([])

    useEffect(() => {
        fetch().then(arr => {
                setInfo(arr);
                setSort(sortRank(arr, 10));
                setSelectEvent(select(arr, 'event', 10));
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
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
    };


    return (
        <div className="App">
            <section id={'top'}/>
            <div id={'divider'} style={{width: '100vw', top: '55px'}}/>
            <div id={'divider'} style={{width: '100vw', top: '105px'}}/>
            <div id={'divider'} style={{width: '100vw', top: '145px'}}/>
            <div className={`main`}>
                <section className={`header`}>
                    <ul id={'logo'} className={`header-ul`}>
                        <li>Naver</li>
                        <li>SERIES_on</li>
                        <li>로그인</li>
                        <li>메뉴</li>
                    </ul>
                    <div className={`margin`}/>
                    <ul id={'category'} className={`header-ul`}>
                        <li>영화</li>
                        <li>방송</li>
                        <li>장르.소설 만화</li>
                        <li className={`divide-li`}>My</li>
                        <li>장바구니</li>
                        <li>검색</li>
                    </ul>
                    <div className={`margin`}/>
                    <ul id={'list'} className={`header-ul`}>
                        <li>영화홈</li>
                        <li>카테고리</li>
                        <li>인기순위 Top100</li>
                        <li>이벤트</li>
                        <li>무료</li>
                        <li>천원관</li>
                        <li>구매혜택</li>
                    </ul>
                </section>

                <section className={`movie-suggestion`}>
                    <div className={`suggestion`}>
                        <Slider {...settings}>
                            {info.map((obj, index) => {
                                return (
                                    <MovieCardSlider key={`suggestion_${obj.name}_${index}`}
                                                     obj={obj}/>
                                );
                            })}
                        </Slider>
                    </div>
                    <div style={{position: 'absolute', bottom: 5, right: 5}}>추천하기</div>
                </section>

                <section className={`movie-info`}>
                    <section className={`left-info`}>
                        <div className={`advers`}>
                            <Advertise width={'48%'}
                                       height={'100%'}
                                       float={'left'}/>
                            <Advertise width={'48%'}
                                       height={'100%'}
                                       float={'right'}/>
                        </div>
                        <div className={`windows`}>
                            <div className={`margin`}/>
                            <SmallWindow width={`100%`}
                                         height={`49%`}
                                         header={`5%`}
                                         contents={info.map((obj, index) => {
                                             if (index > 9) return '';
                                             else return <MovieCard key={`recent_${obj.name}_${index}`}
                                                                    obj={obj}/>;
                                         })}/>
                            <div className={`margin`}/>
                            <SmallWindow width={`100%`}
                                         height={`49%`}
                                         header={`5%`}
                                         contents={selectEvent.map((obj, index) =>
                                             <MovieCard key={`discount_${obj.name}_${index}`}
                                                        obj={obj}/>
                                         )}/>
                        </div>
                    </section>

                    <section className={`right-info`}>
                        <Advertise width={'100%'}
                                   height={'20%'}/>
                        <div className={`margin`}/>
                        <SmallWindow width={'100%'}
                                     height={'65%'}
                                     header={'3%'}
                                     contents={sort.map((obj, index) => {
                                         if (index > 9) return '';
                                         else return <MovieCardSide key={`side_${obj.name}_${index}`}
                                                                    obj={obj}
                                                                    rank={index + 1}/>;
                                     })}/>
                        <div className={`margin`}/>
                        <Advertise width={'100%'} height={'8%'}/>
                    </section>
                </section>

                <section className={`app-service`}>
                    <SmallWindow width={'35%'}
                                 height={'100%'}
                                 header={'10%'}/>
                    <SmallWindow width={'65%'}
                                 height={'100%'}
                                 header={'10%'}/>
                </section>

                <section className={`footer`}>
                    <div className={`footer-info`}>
                        {footerInfo.map(text => <div>{text}</div>)}
                    </div>
                </section>
            </div>
        </div>
    )
        ;
}

export default App;
