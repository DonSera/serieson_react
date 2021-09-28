const pubSubArray = {}

export function publish(eventName, data) {
    // 실행
    if (!Array.isArray(pubSubArray[eventName])) {
        // 없으면 아무일도 없음
        console.log('noting do')
        return
    }
    pubSubArray[eventName].forEach(func => {
        func(data)
    })
}

export function subscribe(eventName, func) {
    // 저장
    if (!Array.isArray(pubSubArray[eventName])) {
        // 없으면 새로 자리를 만들고 push
        pubSubArray[eventName] = []
    }
    pubSubArray[eventName].push(func)
}