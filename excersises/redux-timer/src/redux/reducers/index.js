import { timer } from "./timer";

//reducer/index.js
let state = {
    timer: {
        count: 0,
        minutes: 0,
        seconds: 0
    }
};

function reducer(prevState = state, action) {
    if (prevState === null) prevState = state;
    return {
        timer: timer(prevState.timer, action)
    };
}

export default reducer;
