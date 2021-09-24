import styles from "./Price.module.css";

function Price({obj}) {
    return (
        <div>
            <span>{obj["priceType"]}</span>
            <span className={styles['price']}>{obj["price"] >= 1000
                ? `${Math.floor(obj["price"] / 1000)},${obj["price"] % 1000}`
                : obj["price"]}</span>
        </div>
    )
}

export default Price;