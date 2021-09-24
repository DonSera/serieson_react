import './MainMobile.css';
import {fetchHeader, fetchMovie} from "../../function/fetch";
import sortRank from "../../function/sortRank";
import MovieCardMobile from "../MovieCard/MovieCardMobile";
import {useEffect, useState} from "react";
import Header from "../Header/Header";

function MainMobile() {
    const [sort, setSort] = useState([])
    const [header, setHeader] = useState({})

    useEffect(() => {
        fetchMovie().then(arr => {
                setSort(sortRank(arr, "sales"));
            }
        )

        fetchHeader().then(obj => {
            setHeader(obj)
        })
    }, [])


    function advertise(){
        return(
            <div className={'adver-background'}>
                <div className={'adver'}/>
            </div>
        )
    }

    return <div>
        <Header headerObj={header} type={'Mobile'}/>
        {advertise()}
        {sort.map((obj, index) => {
            if(index === 4){
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
