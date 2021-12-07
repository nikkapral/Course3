function isInteger(num) {
    return (num ^ 0) === num;
}

let result = '';

for (let i = 0;i<8;i++){
    for (let q = 0;q<8;q++){
        if (isInteger((q+i)/2)){
            result += '#'
        }
        else{
            result += ' '
        }
    }
    console.log(result)
    result = ''
}   