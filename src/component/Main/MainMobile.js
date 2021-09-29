import './MainMobile.css';
import sortRank from "../../function/sortRank";
import MovieCardMobile from "../MovieCard/MovieCardMobile";
import Advertise from "../Advertise/Advertise";
import {useEffect, useState} from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useMediaQuery} from "react-responsive";

function MainMobile({movieInfo}) {
    const [sort, setSort] = useState([])

    useEffect(() => {
        setSort(sortRank(movieInfo, "sales"));
    }, [movieInfo])


    const two = useMediaQuery({
        query: "(min-width:400px)"
    });

    const one = useMediaQuery({
        query: "(max-width:400px)"
    });

    const settingsOne = {
        arrows: false,
        draggable: true,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
    };
    const settingsTwo = {
        arrows: false,
        draggable: true,
        dots: false,
        speed: 500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
    };


    function advertiseTop() {
        return (
            <Slider {...settingsOne}>
                <Advertise width={'100%'}
                           height={'40%'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'100%'}
                           height={'40%'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'100%'}
                           height={'40%'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
            </Slider>
        )
    }

    function advertiseTwo() {
        return (
            <Slider {...settingsTwo}>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
            </Slider>
        )
    }

    function advertiseOne() {
        return (
            <Slider {...settingsOne}>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
                <Advertise width={'400px'}
                           height={'150px'}
                           urlImg={"https://nstore-phinf.pstatic.net/20210914_293/nstore_adm_1631619930201MrJSw_JPEG/4onPC_344X129.jpg"}
                           urlLink={"https://serieson.naver.com/event/details.nhn?eventNo=13564"}/>
            </Slider>
        )
    }

    return <div>
        {advertiseTop()}
        {sort.map((obj, index) => {
            if (index === 4) {
                return (
                    <>
                        {one && advertiseOne()}
                        {two && advertiseTwo()}
                        <MovieCardMobile key={`side_${obj.name}_${index}`} obj={obj}/>
                    </>
                )
            }
            return <MovieCardMobile key={`side_${obj.name}_${index}`} obj={obj}/>
        })}
    </div>;
}

export default MainMobile;
