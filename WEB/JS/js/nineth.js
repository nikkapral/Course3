function deepEqual(x,y){
    if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
        if (Object.keys(x).length != Object.keys(y).length)
          return false;
        for (let i in x) {
        //Проверка на принадлежность объекта к i
          if (y.hasOwnProperty(i))
            return deepEqual(x[i], y[i]);
          }
        }
    else if (x !== y)
        return false;
    else
        return true;
}

console.log(deepEqual(null,[1,2,3]))