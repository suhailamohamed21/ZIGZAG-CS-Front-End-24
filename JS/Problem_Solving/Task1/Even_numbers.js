function evenNumbers(N){
    if(N < 2){
        console.log(-1);
        return;
    }
    else{
        for(let i = 2; i <= N; i++){
            if(i % 2 == 0)
                console.log(i);
        }
    }
}

console.log("Even numbers in 5 :");
evenNumbers(5);