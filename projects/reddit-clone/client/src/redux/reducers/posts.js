export const posts = function(prevPosts = [], action) {
    let newPosts = [...prevPosts];
    switch (action.type) {
        case "LOAD_POSTS":
            return action.posts.reverse();
        case "ADD_POST":
            return [action.post, ...newPosts];
        case "DELETE_POST":
            return newPosts.filter(post => {
                return post._id === action.id ? false : true;
            });
        case "EDIT_POST":
            return newPosts.map(post => {
                return post._id === action.id ? action.editedPost : post;
            });
        default:
            return prevPosts;
    }
};
