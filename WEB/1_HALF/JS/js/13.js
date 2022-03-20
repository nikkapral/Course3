function every(array){
    let value = [];
    for (let i = 0; i < array.length; i++){
        if (isNaN(array[i])){
            value.push(array[i])
        }
    }
    return value.length === array.length;
}

function some(array){
    for (let i = 0; i < array.length; i++){
        if (isNaN(array[i])){
            return true;
        }
    }
    return false;
}




console.log(some([1,NaN,3]));
console.log(every([NaN,NaN,NaN]));