function countBs(str){
    return str.toString().length
}

function countChar(str,symbol){
    return str.toString().toUpperCase().indexOf(symbol.toString().toUpperCase())
}


console.log(countChar('weriwerhorweprowoepr','hor'))