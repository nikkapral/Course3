let arr = [
    ["Cat"],
    [1, 2, 3],
    [5, 5],
    [6, 7],
    ["cat"]
];

arr = arr.reduce((a, b) => {return a.concat(b);});

console.log(arr)