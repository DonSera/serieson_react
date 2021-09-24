import './App.css';
import { useMediaQuery } from 'react-responsive'
import MainPC from "./component/Main/MainPC";
import MainMobile from "./component/Main/MainMobile";

function App() {
    const isPc = useMediaQuery({
        query : "(min-width:768px)"
    });

    const isMobile = useMediaQuery({
        query : "(max-width:767px)"
    });

    return (
        <div>
            {isPc && <MainPC/>}
            {isMobile && <MainMobile/>}
        </div>
    );
}

export default App;
