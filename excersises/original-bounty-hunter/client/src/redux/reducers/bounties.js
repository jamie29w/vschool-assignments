export const bounties = function(prevBounties = [], action) {
    let newBounties = [...prevBounties];
    switch (action.type) {
        case "LOAD_BOUNTIES":
            return action.bounties.reverse();
        case "ADD_BOUNTY":
            return [action.bounty, ...newBounties];
        case "DELETE_BOUNTY":
            return newBounties.filter(bounty => {
                return bounty._id === action.id ? false : true;
            });
        case "EDIT_BOUNTY":
            return newBounties.map(bounty => {
                return bounty._id === action.id ? action.editedBounty : bounty;
            });
        default:
            return prevBounties;
    }
};
