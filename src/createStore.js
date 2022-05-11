import { isPlainObject } from './utils';

export default function createStore (reducer, preloadedState, enhancer) {
    let currentReducer = reducer
    // 所有的状态
    let currentState = preloadedState;
    // 观察者列表
    let currentListeners = [];
    // function replaceReducer() {}
    // function observable() {}

    function dispatch(action) {
        if (!isPlainObject(action)) {
            throw new Error('dispatch参数类型必须是object类型')
        }

        if (action.type === 'undefined') {
            throw new Error('参数缺少type类型')
        }
        
        currentState = currentReducer(currentState, action);

        currentListeners.forEach((listener) => {
            listener(currentState);
        })
    }

    function getState() {
        return currentState;
    }

    // 订阅所有状态
    function subscribe(listener) {
        if (typeof listener === 'function') {
            throw new Error('订阅参数必须为函数类型')
        }
        // 订阅状态防止多次卸载
        let isSubscribed = true
        currentListeners.push(listener);
        // 返回取消订阅的方法
        return function () {
            if (!isSubscribed) {
                throw new Error('已经取消取消订阅');
            }
            currentListeners.splice(currentListeners.indexOf(listener), 1);
        }
    }

    dispatch({type: 'REDUX_INIT_STATE'});

    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
        [enhancer, preloadedState] = [preloadedState, enhancer]
    }

    if (typeof enhancer !== 'undefined') {
        if (typeof enhancer !== 'function') {
            throw new Error('enhancer必须是个函数')
        }
        return enhancer(createStore)(reducer, preloadedState)
    }

    return {
        dispatch,
        getState,
        subscribe
    }
}