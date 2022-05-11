export default function compose (...funcs) {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }


    return funcs.reduce(function (current, prev) {
        return function(...arg) {
            return current(prev(...arg));
        }
    });
}


// function fnA () {
//     return next => {
//         console.log('A');
//         next();
//     }
// }

// function fnB () {
//     return next => {
//         console.log('B');
//     }
// }

// function fnC () {
//     return next => {
//         console.log('C');
//     }
// }

// function fnD () {
//     return next => {
//         console.log('D');
//     }
// }

// fnA()(fnB().next);

// var fn = [fnA, fnB, fnC, fnD].reduce(function (prev, current) {
//     return function(...args) {
//         return prev(current(...args));
//     }
// });


// function fnAB () {
//     return fnA(fnB())
// }

// function fnABC () {
//     return fnAB(fnC());
// }

// function fnABCD () {
//     return fnABC(fnD());
// }
