function makeFood(food, callback){
    setTimeout(() => {console.log(food, "is delicious")},5000)
    callback();
    }
    
    makeFood("chicken", () => {console.log("finished my food");});