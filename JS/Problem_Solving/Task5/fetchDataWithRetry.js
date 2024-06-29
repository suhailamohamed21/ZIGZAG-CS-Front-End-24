function fetchDataWithRetry(url, maxRetries){
    return new Promise((resolve, reject) => {
        let retries = 0;
        const fetchData = () => {
                fetch(url)
                .then((response) =>{
                    if(!response.ok){
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(response => resolve(response))
                .catch(error =>{
                    retries++;
                    if(retries < maxRetries){
                        console.log(`Request failed. Retrying (${retries}/${maxRetries})...`);
                        fetchData();
                    }else{
                        reject(new Error(`Failed after ${maxRetries} retries. Error: ${error.message}`));
                    }
                })
        }
        fetchData();
    })
}
const apiUrl = 'https://jsonplaceholder.typicode.com/posts3';
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
console.log("URL-> ",apiUrl);
const maxRetries = 3;

fetchDataWithRetry(apiUrl, maxRetries)
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });
