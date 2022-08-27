const user = {id: 1, name: 'Amir', job: 'actor'};
//JavaScript Object Notation(JSON) 
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);
/*OUTPUT:
{ id: 1, name: 'Amir', job: 'actor' }
{"id":1,"name":"Amir","job":"actor" 
*/

const shop = {
    owner: 'Alia',
    address: {
        street : 'shiyalbari more road',
        city: 'Dhaka',
        country : 'Bangladesh'
    },
    product : ['laptop','microphone','keyboard'],
    revenue : 45000,
    isOpen : true,
    isNew : false
};

console.log(shop);
//stringify convert object to string
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
//parse convert string to object
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);