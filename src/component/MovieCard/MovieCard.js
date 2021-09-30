import styles from './MovieCard.module.css'
import EventCircle from "./CardEle/EventCircle";
import Grad from "./CardEle/Grad";
import Price from "./CardEle/Price";
import Title from "./CardEle/Title";

function MovieCard({obj, type = 'info'}) {
    function render() {
        if (type === 'info') {
            return <section id={styles['info']} className={`${styles[`movie-card`]}`}>
                <EventCircle obj={obj} size={40}/>
                <Title obj={obj}/>
                <Grad obj={obj} size={'small'}/>
                <Price obj={obj}/>
            </section>;
        }

        if (type === 'slider') {
            return <section id={styles['slider']} className={`${styles[`movie-card`]}`}>
                <EventCircle obj={obj} size={50}/>
                <Title obj={obj} width={50} type={'slider'}/>
                <Grad obj={obj} size={'big'}/>
                <Price obj={obj}/>
            </section>;
        }
    }

    return render();
}

export default MovieCard;