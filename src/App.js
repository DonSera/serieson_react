import './App.css';

function App() {
    return (
        <div className="App">
            <section className={`header`}>
                <div className={`app-logo`}/>
                <div className={`app-search`}/>
            </section>
            <section className={`movie-suggestion`}>
                <div className={`suggestion`}/>
            </section>
            <section className={`movie-info`}>
                <div className={`recent`}/>
                <div className={`discount`}/>
                <div className={`top10`}/>
                <div className={`advertisement`}/>
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
