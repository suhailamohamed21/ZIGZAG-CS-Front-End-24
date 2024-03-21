function arrayToCSV(array) {
    //join the elements with commas
    const csvRows = array.map(row => row.join(','));

    //Join rows with newline 
    return csvRows.join('\n');
}

const Array = [
    [ 0, 1, 2, 3, 4 ],
    [ 10, 11, 12, 13, 14 ],
    [ 20, 21, 22, 23, 24 ],
    [ 30, 31, 32, 33, 34 ]
];

const csvRepresentation = arrayToCSV(Array);
console.log(csvRepresentation);
