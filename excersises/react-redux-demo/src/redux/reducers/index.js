const state = {
    counter: 0,
    contactList: [
        {
            firstName: "Jamie",
            lastName: "Woods",
            phone: "530-867-5309"
        },
        {
            firstName: "Ben",
            lastName: "Jamin",
            phone: "234-867-5435"
        },
        {
            firstName: "Nonnie",
            lastName: "Mahtin",
            phone: "530-124-5585"
        },
        {
            firstName: "Jamie",
            lastName: "Woods",
            phone: "530-867-5309"
        },
        {
            firstName: "Ben",
            lastName: "Jamin",
            phone: "234-867-5435"
        },
        {
            firstName: "Nonnie",
            lastName: "Mahtin",
            phone: "530-124-5585"
        },
        {
            firstName: "Jamie",
            lastName: "Woods",
            phone: "530-867-5309"
        },
        {
            firstName: "Ben",
            lastName: "Jamin",
            phone: "234-867-5435"
        },
        {
            firstName: "Nonnie",
            lastName: "Mahtin",
            phone: "530-124-5585"
        }
    ]
};

function reducer(prevState = state, action) {
    switch (action.type) {
        case "ADD_ONE":
            return {
                ...prevState,
                counter: prevState.counter + 1
            };
        case "SUBTRACT_ONE":
            return {
                ...prevState,
                counter: prevState.counter - 1
            };
        case "REMOVE_FIRST_CONTACT":
            let newContactList = [...prevState.contactList];
            return {
                ...prevState,
                contactList: [...newContactList.slice(1)]
            };
        default:
            return prevState;
    }
}

export default reducer;
