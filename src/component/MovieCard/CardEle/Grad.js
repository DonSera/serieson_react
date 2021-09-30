import styles from './Grad.module.css'
import {Star} from "../../Icon/InfoIcon";

function Grad({obj, size}) {
    return (
        <div className={styles['grad']}>
            <section className={styles['star-wrap']}
                     style={size === 'big' ? {zoom: 1}
                         : size === 'small' && {zoom: 0.8}}>
                <Star bolColor={false}/>
                <Star bolColor={true} percent={obj['grad']}/>
                <span className={styles['grad-num']}>
                {obj['grad'] % 1 ? obj['grad'] : `${obj['grad']}.0`}
                </span>

            </section>
        </div>
    )
}

export default Grad;