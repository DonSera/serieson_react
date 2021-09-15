import './App.css';
import MovieCard from "./component/MovieCard";

function App() {
    return (
        <div className="App">
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
                    <div className={`top10`}>
                        <div className={`movie-card`}/>
                        <div className={`movie-card`}/>
                        <div className={`movie-card`}/>
                        <div className={`movie-card`}/>
                        <div className={`movie-card`}/>
                        <div className={`movie-card`}/>
                        <div className={`movie-card`}/>
                        <div className={`movie-card`}/>
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
    );
}

export default App;
