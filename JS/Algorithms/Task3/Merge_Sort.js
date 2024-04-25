function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let lIndex = 0;
    let rIndex = 0;

    while (lIndex < left.length && rIndex < right.length) {
        if (left[lIndex] < right[rIndex]) {
            result.push(left[lIndex]);
            lIndex++;
        } else {
            result.push(right[rIndex]);
            rIndex++;
        }
    }
    while(lIndex < left.length){
        result.push(left[lIndex]);
        lIndex++;
    }
    while(rIndex < right.length){
        result.push(right[rIndex]);
        rIndex++;
    }

    return result;
}

const array = [5, 3, 8, 1, 2];
console.log("First array:", array);
console.log("Sorted array:", mergeSort(array));
