const initState = {
    a: 1,
    b: 1
};

export default function reducers (state = initState, action) {
    switch (action.type) {
        case 'ADD_A':
            console.log(state, 3333);
            state.a += 1;
            return state;
        default:
            return state;
    }
}
