import './MainMobile.css';
import sortRank from "../../function/sortRank";
import MovieCardMobile from "../MovieCard/MovieCardMobile";
import {useEffect, useState} from "react";

function MainMobile({movieInfo}) {
    const [sort, setSort] = useState([])

    useEffect(() => {
        setSort(sortRank(movieInfo, "sales"));
    }, [movieInfo])


    function advertise() {
        return (
            <div className={'adver-background'}>
                <div className={'adver'}/>
            </div>
        )
    }

    return <div>
        {advertise()}
        {sort.map((obj, index) => {
            if (index === 4) {
                return (
                    <>
                        {advertise()}
                        <MovieCardMobile key={`side_${obj.name}_${index}`} obj={obj}/>
                    </>
                )
            }
            return <MovieCardMobile key={`side_${obj.name}_${index}`} obj={obj}/>
        })}
    </div>;
}

export default MainMobile;
