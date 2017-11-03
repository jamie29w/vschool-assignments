import axios from "axios";
const postsUrl = "http://localhost:8800/posts/";

export function loadPosts() {
    return dispatch => {
        axios.get(postsUrl).then(response => {
            dispatch({
                type: "LOAD_POSTS",
                posts: response.data
            });
        });
    };
}

export function addPost(post) {
    return dispatch => {
        axios.post(postsUrl, post).then(response => {
            dispatch({
                type: "ADD_POST",
                post
            });
        });
    };
}

export function deletePost(id) {
    return dispatch => {
        axios.delete(postsUrl + id).then(response => {
            dispatch({
                type: "DELETE_POST",
                id
            });
        });
    };
}

export function editPost(id, editedPost) {
    return dispatch => {
        axios.put(postsUrl + id, editedPost).then(response => {
            dispatch({
                type: "EDIT_POST",
                editedPost: response.data,
                id
            });
        });
    };
}

// export function upVote(id) {
//     return dispatch => {
//         axios.put(postsUrl + id).then(response => {
//             dispatch({
//                 type: "UP_VOTE"
//             });
//         });
//     };
// }
//
// export function downVote(id) {
//     return dispatch => {
//         axios.put(postsUrl + id).then(response => {
//             dispatch({
//                 type: "DOWN_VOTE"
//             });
//         });
//     };
// }
