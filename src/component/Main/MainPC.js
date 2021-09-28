import './MainPC.css';
import MovieCard from "../MovieCard/MovieCard";
import MovieCardMobile from "../MovieCard/MovieCardMobile";
import Advertise from "../Advertise/Advertise";
import SmallWindow from "../Window/SmallWindow";
import {publish} from "../../function/PubSub";

import sortRank from "../../function/sortRank";
import select from "../../function/select";

import {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainPC({movieInfo}) {
    const [sort, setSort] = useState([]) // 영화 판매순으로 정렬 (10개)
    const [recent, setRecent] = useState([]) // 영화 최신순으로 정렬 (10개)
    const [selectEvent, setSelectEvent] = useState([]) // 영화 event 하는 것만 10개뽑기

    useEffect(() => {
        setSort(sortRank(movieInfo, "sales", 10));
        setSelectEvent(select(movieInfo, 'event', 10));
        setRecent(sortRank(movieInfo, ['info', 'open'], 10));
    }, [movieInfo])


    const event = [
        '이벤트 첫번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 두번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 세번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 네번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용',
        '이벤트 다섯번째 줄. 말을 적는다. 한줄이 넘어가길 바라며. 넘었다용'
    ]

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
    };

    function RenderTest() {
        function eventMap() {
            return event.map((text, index) =>
                <li key={`event_text_${index}`}>{text}</li>);
        }

        return <div className={'event-wrap'}> {eventMap()} </div>;
    }

    return (
        <div className="MainPC">
            <section id={'topBackground'}/>

            <section className={`main`}>
                <section className={`movie-suggestion`}>
                    <div className={`suggestion`}>
                        <Slider {...settings}>
                            {movieInfo.map((obj, index) => {
                                return (
                                    <MovieCard key={`suggestion_${obj.name}_${index}`}
                                               obj={obj} type={'slider'}/>
                                );
                            })}
                        </Slider>
                    </div>
                    <div style={{position: 'absolute', bottom: 5, right: 5}}>추천하기</div>
                    <button type={'button'} onClick={() =>
                        publish('set-header-true-index', [0, 0])}>클릭
                    </button>
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
                                 headerText={'서비스 이용 안내'}
                                 contents={<div className={'sp_home_bottom_ui'}>
                                     <div className={'service-title'}/>
                                     <a href={'https://play.google.com/store/apps/details?id=com.nhn.android.navertv'}
                                        id={'googlePlay'}/>
                                     <a href={'https://apps.apple.com/kr/app/id530059576'}
                                        id={'appleStore'}/>
                                     <a href={'https://appdown.pstatic.net/naver/NaverMediaPlayer/setup/SeriesPlayerInst.exe'}
                                        id={'windowsPlayer'}/>
                                     <div className={`margin`}/>
                                 </div>}/>
                </section>
            </section>
        </div>
    );
}

export default MainPC;
