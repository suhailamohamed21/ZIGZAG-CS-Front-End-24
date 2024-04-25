function bubble(arr){
    let n = arr.length;
    
    for(let i = 0; i < n-1; i++){
        for(let j = 0; j < n - 1 - i; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

const array = [8, 2, 5, 9, 1 ,3];
console.log("First array: ", array);
console.log("Sorted array: ", bubble(array));