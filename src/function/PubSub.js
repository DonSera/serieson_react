import {useState} from "react";

function PubSub() {
    const [subscribes, setSubscribes] = useState({});

    function publish(eventName, data) {
        if (!Array.isArray(subscribes[eventName])) {
            // 없으면 아무일도 없음
            console.log('noting do')
            return
        }
        subscribes[eventName].forEach((callback) => {
            callback(data)
        })
    }

    function subscribe(eventName, callback) {
        const copy = subscribes;
        if (!Array.isArray(subscribes[eventName])) {
            // 없으면 새로 자리를 만들고 push
            copy[eventName] = []
        }
        copy[eventName].push(callback)
        setSubscribes(copy)
    }

    return {
        publish,
        subscribe,
    }

}

export default PubSub;