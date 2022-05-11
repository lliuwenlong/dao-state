export default function combineReducers (reducers) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};

    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i]
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }

    const finalReducerKeys = Object.keys(finalReducers)


    // 返回争强的reducer
    return function combination (state = {}, action) {
        const newState = {};
        // state是否发生改变(优化)
        let isChange = false;

        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i];
            const reducers = finalReducers[key];
            const prevState = state[key];
            const finalState = reducers(prevState, action);
            newState[key] = finalState;

            // 判断是否返回其他引用
            isChange = isChange || finalState !== prevState;
        }

        // 判断新旧两个是否有变化 防止prevState引用没背直接修改
        isChange = isChange || Object.keys(state).length !== Object.keys(newState).length;

        return isChange ? newState : state;
    }
}