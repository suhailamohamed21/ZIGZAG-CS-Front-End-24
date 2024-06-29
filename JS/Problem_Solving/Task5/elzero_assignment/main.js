//promise
let getData = (apiLink) =>{
    return new Promise((resolve, reject) =>{
        let request = new XMLHttpRequest();
        request.onload = function(){
            if(this.readyState === 4 && this.status === 200)
                resolve(JSON.parse(this.responseText))
            else{
                reject(Error("No data found"))
            }
        }
        request.open("GET",apiLink);
        request.send();
    })
}
getData("./article.json")
    .then((result) => {
        result.length = 5;
        return result
    })
    .then((result) => {
        for(let i = 0; i < result.length; i++){
            let div = document.createElement("div");

            let title = document.createElement("h3");
            let titleText = document.createTextNode(result[i].title);
            title.appendChild(titleText);

            let description = document.createElement("p");
            let descriptionText = document.createTextNode(result[i].description);
            description.appendChild(descriptionText);

            div.appendChild(title);
            div.appendChild(description);

            document.body.appendChild(div);
        }
    }).catch((rej) => {
        return (rej);
    })


//fetch
async function fetchData(){
    try{
        let myData = await fetch("./article.json");
        let data = await myData.json();
        data.length = 5;
        for(let i = 0; i < data.length; i++){
            let div = document.createElement("div");

            let title = document.createElement("h3");
            let titleText = document.createTextNode(data[i].title);
            title.appendChild(titleText);

            let description = document.createElement("p");
            let descriptionText = document.createTextNode(data[i].description);
            description.appendChild(descriptionText);

            div.appendChild(title);
            div.appendChild(description);

            document.body.appendChild(div);
        }
    }catch(Error){
        console.log("error")
    }
}
fetchData();