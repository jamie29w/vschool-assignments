import { countries } from "./countries";

const state = {
    // cities: [],
    // planets: [],
    // userInfo: {},
    countries: []
};

function reducer(prevState = state, action) {
    return {
        countries: countries(prevState.countries, action)
        // cities: cities(prevState.countries, action), etc
    };
}

export default reducer;
