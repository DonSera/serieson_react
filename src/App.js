import './App.css';
import {useMediaQuery} from 'react-responsive'
import MainPC from "./component/Main/MainPC";
import MainMobile from "./component/Main/MainMobile";
import Header from "./component/Header/Header";
import {useState, useEffect} from "react";
import {fetchHeader, fetchMovie} from "./function/fetch";
import Footer from "./component/Footer/Footer";


function App() {
    const [header, setHeader] = useState({})
    const [info, setInfo] = useState([]) // 영화정보 저장 (현재 추천에 사용)

    const isPc = useMediaQuery({
        query: "(min-width:1040px)"
    });

    const isMobile = useMediaQuery({
        query: "(max-width:1039px)"
    });

    useEffect(() => {
        Promise.all([fetchHeader(), fetchMovie()]).then(([obj, arr]) => {
            setHeader(obj);
            setInfo(arr);
        });
        // 로딩 만들기
    }, [])

    return (
        <div id={'App'}>
            <section id={'header'}>
                <Header headerObj={header} type={'Mobile'}/>
            </section>

            <section id={'main'}>
                {isPc && <MainPC movieInfo={info}/>}
                {isMobile && <MainMobile movieInfo={info}/>}
            </section>

            <section id={`footer`}>
                <Footer/>
            </section>
        </div>
    );
}

export default App;
