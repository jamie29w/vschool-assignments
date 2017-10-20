export function memes(prevMemes, action) {
    let newMemes = [...prevMemes];
    switch (action.type) {
        case "ADD_MEME":
            newMemes.push(action.meme);
            return newMemes;
        default:
            return prevMemes;
    }
}
