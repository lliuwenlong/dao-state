const _toString = Object.prototype.toString;

// 判断是否为纯对象
export function isPlainObject (value) {
    return _toString.call(value) === '[object Object]';
}