function insertion(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > temp) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = temp;
    }
    return arr;
}

const arr = [8, 2, 5, 9, 1 ,3];
console.log("First array:", arr);
console.log("Sorted array:", insertion(arr));
