import { memes } from "./memes";

const state = {
    memes: []
};

function reducer(prevState = state, action) {
    return {
        memes: memes(prevState.memes, action)
    };
}

export default reducer;
