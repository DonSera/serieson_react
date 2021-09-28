import './App.css';
import {useMediaQuery} from 'react-responsive'
import MainPC from "./component/Main/MainPC";
import MainMobile from "./component/Main/MainMobile";
import Header from "./component/Header/Header";
import {useState, useEffect} from "react";
import {fetchHeader, fetchMovie} from "./function/fetch";


function App() {
    const [header, setHeader] = useState({})
    const [info, setInfo] = useState([]) // 영화정보 저장 (현재 추천에 사용)

    const isPc = useMediaQuery({
        query: "(min-width:1000px)"
    });

    const isMobile = useMediaQuery({
        query: "(max-width:999px)"
    });

    useEffect(() => {
        fetchHeader().then(obj => {
            setHeader(obj)
        })
        fetchMovie().then(arr => {
            setInfo(arr);
        })
    }, [])

    return (
        <div>
            <section id={'header'}>
                <Header headerObj={header} type={'Mobile'}/>
            </section>
            {isPc && <MainPC movieInfo={info}/>}
            {isMobile && <MainMobile movieInfo={info}/>}
        </div>
    );
}

export default App;
