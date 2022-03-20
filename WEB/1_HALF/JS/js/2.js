function isInteger(num) {
    return (num ^ 0) === num;
}
  
  
  for (let i=1;i<=100;i++){
    if (isInteger(i/3) && (isInteger(i/5))){
      console.log(i + ' - FizzBuzz');
    }
  
    else if (isInteger(i/3)){
      console.log(i + ' - Fizz');
    }

    else if (isInteger(i/5)){
        console.log(i + ' - Buzz')
    }

    else{
        console.log(i);
    }


}
  