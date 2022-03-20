function reverseArray(massive){
    let result = [];
    for(let i = massive.length-1; i >= 0; i--) {
        result.push(massive[i]);
    }
    return result;
}

function reverseArrayInPlace(massive){
    let start, stop;
    for(let i = 0; i < (Math.floor(massive.length/2)); i++){
        start = massive[i];
        stop = massive[massive.length-(i+1)];
        massive[massive.length-(i+1)] = start;
        massive[i] = stop;
    }
    return massive
}

let massive = [1,2,3,4,5]
console.log(reverseArrayInPlace(massive))
