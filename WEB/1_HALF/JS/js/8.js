function arrayToList(massive) {

    let list = {value: massive[0], rest: null};
    let res = list;

    for (let i = 1; i < massive.length; i++) {
        list.rest = {};
        list.rest.value = massive[i];
        list.rest.rest = null;
        list = list.rest;
    }

    return res;

}

function listToArray(list) {
    const arr = [];

    while (list.rest != null) {
        list = list.rest;
        arr.push(list.value);
    }

    return arr;
}

function prepend(list, elem) {
    return {value: elem, rest: list};
}


function nth(list, index, current = 0) {

    if (index === current) {
        return list.value;
    }

    if (list != null) {
        return nth(list.rest, index, current + 1);
    }

    return undefined;
}


test = arrayToList([1, 2, 3]);
console.log(test);
