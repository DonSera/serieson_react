import './Main.css';
import {fetchMovie} from "../../function/fetch";
import sortRank from "../../function/sortRank";
import MovieCardMobile from "../MovieCard/MovieCardMobile";
import {useEffect, useState} from "react";

function MainMobile() {
    const [sort, setSort] = useState([])

    useEffect(() => {
        fetchMovie().then(arr => {
                setSort(sortRank(arr, "sales"));
            }
        )
    }, [])

    return <div>
        {sort.map((obj, index) => <MovieCardMobile key={`side_${obj.name}_${index}`}
                                                   obj={obj}/>)}
    </div>;
}

export default MainMobile;
