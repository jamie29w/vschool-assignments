function timer(prevTimer, action) {
    switch (action.type) {
        case "ADD_TIME":
            let count = prevTimer.count + 1000;
            let now = new Date(count);
            let minutes = now.getMinutes();
            let seconds = now.getSeconds();
            return {
                count,
                minutes,
                seconds
            };
        default:
            return prevTimer;
    }
}

export function addTime(prevState, action) {
    let count = prevState.count + 1000;
    let now = new Date(count);
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    return {
        count,
        minutes,
        seconds
    };
}

//click start
//trigger function, which calls a setInterval, which calls an action every 1000 mils

let interval;
//from within react container:
function handleStart() {
    interval = setInterval(addTime, 1000);
}

function handlePause() {
    clearInterval(interval);
}

let interval = setInterval(action, 1000);
