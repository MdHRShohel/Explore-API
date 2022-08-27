function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(data => console.log(data));
}
function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => console.log(data));
}