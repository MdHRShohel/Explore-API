console.log('Fecthing');

fetch('https://jsonplaceholder.typicode.com/todos/1')
//json is close to JSON.parse
.then(response => response.json())
.then(json => console.log(json))