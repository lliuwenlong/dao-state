const initState = {
    c: 1,
    d: 1
};

export default function reducers (state = initState, action) {
    switch (action.type) {
        case 'ADD_A':
            state.c += 1;
            return state;
        default:
            return state;
    }
}
