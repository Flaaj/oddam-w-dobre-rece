export const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case "INCREMENT":
            const countInc = state.count + 1;
            return {...state, count: countInc};
        case "DECREMENT":
            const countDec = state.count - 1;
            return {...state, count: countDec};
        default:
            return state;
    }
};
