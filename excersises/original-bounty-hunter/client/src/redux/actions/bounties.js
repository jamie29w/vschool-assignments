import axios from "axios";
const bountiesUrl = "http://localhost:8010/bounties/";

export function loadBounties() {
    return dispatch => {
        axios.get(bountiesUrl).then(response => {
            dispatch({
                type: "LOAD_BOUNTIES",
                bounties: response.data
            });
        });
    };
}

export function addBounty(bounty) {
    return dispatch => {
        axios.post(bountiesUrl, bounty).then(response => {
            dispatch({
                type: "ADD_BOUNTY",
                bounty
            });
        });
    };
}

export function deleteBounty(id) {
    return dispatch => {
        axios.delete(bountiesUrl + id).then(response => {
            dispatch({
                type: "DELETE_BOUNTY",
                id
            });
        });
    };
}

export function editBounty(id, editedBounty) {
    return dispatch => {
        axios.put(bountiesUrl + id, editedBounty).then(response => {
            dispatch({
                type: "EDIT_BOUNTY",
                editedBounty: response.data,
                id
            });
        });
    };
}
