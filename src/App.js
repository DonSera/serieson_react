import './App.css';
import MovieCard from "./component/MovieCard";
import MovieCardSide from "./component/MovieCard/MovieCardSide";

function App() {
    return (
        <div className="App">
            <div className={`main`}>
                <section className={`header`}>
                    <div className={`app-logo`}/>
                    <div className={`app-search`}/>
                </section>
                <section className={`movie-suggestion`}>
                    <div className={`suggestion`}>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                        <MovieCard/>
                    </div>
                    <div>추천하기</div>
                </section>
                <section className={`movie-info`}>
                    <section className={`main-info`}>
                        <div className={`adveres`}>
                            <span className={`advertisement`}/>
                            <span className={`advertisement`}/>
                        </div>
                        <div className={`recent`}>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                        </div>
                        <div className={`discount`}>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                            <MovieCard/>
                        </div>
                    </section>
                    <section className={`side-info`}>
                        <div className={`adver2`}/>
                        <div className={`top10`}>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                            <MovieCardSide/>
                        </div>
                        <div className={`adver2`}/>
                    </section>
                </section>
                <section className={`app-service`}>
                    <div className={`event`}/>
                    <div className={`service`}/>
                </section>
                <section className={`footer`}/>
            </div>
        </div>
    );
}

export default App;
