function goodIdea(arr) {
    const goodCount = arr.filter(str => str === 'good').length;
    if (goodCount === 0) {
        return 'Fail!';
    } else if (goodCount <= 2) {
        return 'Publish!';
    } else {
        return 'I smell a series!';
    }
}

console.log(goodIdea(['good', 'bad', 'bad', 'good']));            //returns 'Publish!'
console.log(goodIdea(['bad', 'bad', 'bad']));                    //returns 'Fail!'
console.log(goodIdea(['good', 'good', 'good', 'bad', 'good'])); //returns 'I smell a series!'
