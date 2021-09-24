import './Main.css';
import MovieCard from '../MovieCard'
import Advertise from "../Advertise/Advertise";
import SmallWindow from "../Window/SmallWindow";
import Header from "../Header/Header";

import {fetchHeader, fetchMovie} from "../../function/fetch";
import sortRank from "../../function/sortRank";
import select from "../../function/select";

import {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCardMobile from "../MovieCard/MovieCardMobile";


function MainPC() {
    const [header, setHeader] = useState({})
    const [info, setInfo] = useState([])
    const [sort, setSort] = useState([])
    const [recent, setRecent] = useState([])
    const [selectEvent, setSelectEvent] = useState([])

    useEffect(() => {
        fetchMovie().then(arr => {
            setInfo(arr);
            setSort(sortRank(arr, "sales", 10));
            setSelectEvent(select(arr, 'event', 10));
            setRecent(sortRank(arr, ['info', 'open'], 10));

        })

        fetchHeader().then(obj => {
            setHeader(obj)
        })

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

    const event = [
        '이벤트 첫번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 두번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 세번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 네번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 다섯번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용'
    ]

    function RenderTest() {
        function eventMap() {
            return event.map((text, index) => <li key={`event_text_${index}`}>{text}</li>);
        }

        return <div className={'event-wrap'}> {eventMap()} </div>;
    }

    return (
        <div className="App">
            <section id={'topBackground'}/>
            <section className={`header`}>
                <Header headerObj={header}/>
            </section>


            <div className={`main`}>
                <section className={`movie-suggestion`}>
                    <div className={`suggestion`}>
                        <Slider {...settings}>
                            {info.map((obj, index) => {
                                return (
                                    <MovieCard key={`suggestion_${obj.name}_${index}`}
                                               obj={obj} type={'slider'}/>
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
                                       urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                                       urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}
                                       float={'left'}/>
                            <Advertise width={'48%'}
                                       height={'100%'}
                                       float={'right'}/>
                        </div>
                        <div className={`windows`}>
                            <div className={`margin`}/>
                            <SmallWindow windowWidth={`100%`}
                                         height={`49%`}
                                         headerHeight={`30px`}
                                         headerText={'최신영화'}
                                         url={"https://serieson.naver.com/movie/recentList.nhn"}
                                         contents={recent.map((obj, index) => {
                                             if (index > 9) return '';
                                             else return <MovieCard key={`recent_${obj.name}_${index}`}
                                                                    obj={obj} type={'info'}/>;
                                         })}/>
                            <div className={`margin`}/>
                            <SmallWindow windowWidth={`100%`}
                                         height={`49%`}
                                         headerHeight={`30px`}
                                         headerText={'할인 영화'}
                                         url={"https://serieson.naver.com/movie/categoryList.nhn?categoryCode=300003"}
                                         contents={selectEvent.map((obj, index) =>
                                             <MovieCard key={`discount_${obj.name}_${index}`}
                                                        obj={obj} type={'info'}/>
                                         )}/>
                        </div>
                    </section>

                    <section className={`right-info`}>
                        <Advertise width={'100%'}
                                   height={'20%'}/>
                        <div className={`margin`}/>
                        <SmallWindow windowWidth={'100%'}
                                     headerHeight={'30px'}
                                     headerText={'영화 스토어 TOP10'}
                                     url={"https://serieson.naver.com/movie/top100List.nhn"}
                                     contents={sort.map((obj, index) => {
                                         if (index > 9) return '';
                                         else return <MovieCardMobile key={`side_${obj.name}_${index}`}
                                                                      obj={obj}
                                                                      rank={index + 1}/>;
                                     })}/>
                        <div className={`margin`}/>
                        <Advertise width={'100%'} height={'8%'}/>
                    </section>
                </section>

                <section className={`app-service`}>
                    <SmallWindow windowWidth={'35%'}
                                 headerHeight={'20px'}
                                 headerText={'이벤트'}
                                 contents={<RenderTest/>}
                    />
                    <SmallWindow windowWidth={'65%'}
                                 windowHeight={'90%'}
                                 headerHeight={'20px'}
                                 headerText={'서비스 이용 안내'}/>
                </section>

                <section className={`footer`}>
                    <div className={`footer-info`}>
                        {footerInfo.map((text, index) => <div key={`footer_info_${index}`}>{text}</div>)}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default MainPC;
