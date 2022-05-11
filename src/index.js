import createStore from './createStore';
import combineReducers from './combineReducers';
import applyMiddleware from './applyMiddleware';


function reducersA (state = {a: 1, b: 2}, action) {
    switch (action.type) {
        case 'ADD_A':
            state.a += 1;
            state.c = 3;
        default:
            return state;
    }
}

function reducersB (state = {b: 1, c: 2}, action) {
    switch (action.type) {
        case 'ADD_B':
            state.b += 1;
            return state;
        default:
            return state;
    }
}

const aStore = createStore(combineReducers({
    a: reducersA,
    b: reducersB
}), applyMiddleware(
    logger1,
    logger2,
    logger3,
));

aStore.dispatch({ type: 'ADD_A' });

function logger1({ getState }) {
    return next => action => {
        const returnValue = next(action)
        return returnValue
    }
}

function logger2({ getState }) {
    return next => action => {
        const returnValue = next(action)
        return returnValue
    }
}

function logger3({ getState }) {
    return next => action => {
        const returnValue = next(action)
        return returnValue
    }
}