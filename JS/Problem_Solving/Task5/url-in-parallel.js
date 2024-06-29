const urlsToFetch = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://random-data-api.com/api/v2/blood_types',
    ];

function fetchMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url => fetch(url)
    .then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
    }));
    return Promise.all(promises);
}

fetchMultipleAPIs(urlsToFetch)
.then(results => {
    console.log('Combined Results:', results);
})
.catch(error => {
    console.log('Error:', error.message);
});
    
// const fetchPromises = urlsToFetch.map(url => 
//     fetch(url)
//         .then(response => response.json())
// );

// Promise.all(fetchPromises)
//     .then(responses => {
//         const responseData = responses.map(response => response);
//         console.log('Fetched data:', responseData);
//     })
//     .catch(error => console.error('Error fetching data:', error));
            
