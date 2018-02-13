import axios from 'axios';

const bountiesUrl = 'http://localhost:8010/bounties/';

const addBounty = bounty => {
  return dispatch => {
    axios.post(bountiesUrl, bounty).then(response => {
      dispatch({
        type: 'ADD_BOUNTY',
        bounty
      });
    });
  };
};

const deleteBounty = id => {
  return dispatch => {
    axios.delete(bountiesUrl + id).then(response => {
      dispatch({
        type: 'DELETE_BOUNTY',
        id
      });
    });
  };
};

const editBounty = (id, editedBounty) => {
  return dispatch => {
    axios.put(bountiesUrl + id, editedBounty).then(response => {
      dispatch({
        type: 'EDIT_BOUNTY',
        editedBounty: response.data,
        id
      });
    });
  };
};

const loadBounties = () => {
  return dispatch => {
    axios.get(bountiesUrl).then(response => {
      dispatch({
        type: 'LOAD_BOUNTIES',
        bounties: response.data
      });
    });
  };
};

export const bountyActions = {
  addBounty,
  deleteBounty,
  editBounty,
  loadBounties
};

export default function bounties(prevBounties = [], action) {
  let newBounties = [...prevBounties];
  switch (action.type) {
    case 'LOAD_BOUNTIES':
      return action.bounties.reverse();
    case 'ADD_BOUNTY':
      return [action.bounty, ...newBounties];
    case 'DELETE_BOUNTY':
      return newBounties.filter(bounty => {
        return bounty._id === action.id ? false : true;
      });
    case 'EDIT_BOUNTY':
      return newBounties.map(bounty => {
        return bounty._id === action.id ? action.editedBounty : bounty;
      });
    default:
      return prevBounties;
  }
}
