function solution(message, n) {
    const letters = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
    let count = 0;
    message = message.split('')
    for (let i of message) {
        if (letters.includes(i.toLowerCase())) {
            count++
        };
        if (count === n) {
            count = 0;
            let cur = message.indexOf(i)
            let next = letters.indexOf(i.toLowerCase())+1;
            console.log({cur, next})
            console.log(message[cur], letters[next])
            message.splice(cur, 1, (i === i.toUpperCase() ? letters[next].toUpperCase() : letters[next]))
            if (next === undefined) continue
        };
    };
    return message.join('');
};

console.log(solution('CodeSignal', 3))
console.log(solution('Quiz, Citizenship, puZZle', 5))