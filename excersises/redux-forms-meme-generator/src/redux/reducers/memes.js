export function memes(prevMemes, action) {
    let newMemes = [...prevMemes];
    switch (action.type) {
        case "ADD_MEME":
            newMemes.push(action.meme);
            return newMemes;
        case "DELETE_MEME":
            newMemes.splice(action.index, 1);
            return newMemes;
        default:
            return prevMemes;
    }
}
