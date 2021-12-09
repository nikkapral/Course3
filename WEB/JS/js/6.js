function range(p1,p2){
    let result = [];
    for(p1;p1<=p2;p1++){
        result.push(p1)
    }
    return result
}

function sum(massive){
    let x;
    return massive.map(i => x += i, x = 0).reverse()[0]
}

console.log(sum(range(1,10)))