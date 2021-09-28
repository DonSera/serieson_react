import './App.css';
import {useMediaQuery} from 'react-responsive'
import MainPC from "./component/Main/MainPC";
import MainMobile from "./component/Main/MainMobile";
import Header from "./component/Header/Header";
import {useState, useEffect} from "react";
import {fetchHeader} from "./function/fetch";

function App() {
    const [header, setHeader] = useState({})

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
    }, [])

    return (
        <div>
            <section id={'header'}>
                <Header headerObj={header} type={'Mobile'}/>
            </section>
            {isPc && <MainPC/>}
            {isMobile && <MainMobile/>}
        </div>
    );
}

export default App;
