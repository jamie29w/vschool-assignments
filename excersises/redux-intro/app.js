const redux = require("redux");

// console.log(redux);

const state = {
    counter: 0,
    contactList: []
};

function addContact(str) {
    return {
        type: "ADD_CONTACT",
        newContact: str
    };
}

function deleteCurrentContact() {
    return {
        type: "DELETE_CURRENT_CONTACT"
    };
}

function changeCounter(num) {
    return {
        type: "CHANGE_COUNTER",
        changeAmount: num
    };
}

function resetCounter() {
    return {
        type: "RESET_COUNTER"
    };
}

function reducer(prevState = state, action) {
    switch (action.type) {
        case "CHANGE_COUNTER":
            return {
                counter: prevState.counter + action.changeAmount,
                contactList: prevState.contactList
            };
        case "RESET_COUNTER":
            return {
                counter: 0,
                contactList: prevState.contactList
            };
        case "ADD_CONTACT":
            return {
                counter: prevState.counter,
                contactList: [...prevState.contactList, action.newContact]
            };
        case "DELETE_CURRENT_CONTACT":
            let newListDelCurrent = [...prevState.contactList];
            return {
                counter: prevState.counter,
                contactList: [...newListDelCurrent.slice(1)]
            };

        default:
            return prevState;
    }
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(changeCounter(5));
store.dispatch(resetCounter());
store.dispatch(addContact("Ben"));
store.dispatch(addContact("Dallin"));
store.dispatch(addContact("Arles"));
store.dispatch(deleteCurrentContact());
store.dispatch(deleteCurrentContact());
store.dispatch(addContact("Kit"));
store.dispatch(deleteCurrentContact());
store.dispatch(addContact("Nonnie"));
