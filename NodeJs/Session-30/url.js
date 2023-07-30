const url= require('url');

const adrress="http://www.eduonix.com:8000/products/product.html?id=23&name=cheeze";

const myURL= url.parse(adrress,true);
console.log(`Host: ${myURL.host}`);
console.log(`Host Name: ${myURL.hostname}`);
console.log(`Port: ${myURL.port}`);
console.log(`Protocol: ${myURL.protocol}`);
console.log(`Path: ${myURL.path}`);
console.log(`PathName: ${myURL.pathname}`);
console.log(`Search: ${myURL.search}`)
console.log(myURL.query)
const query= myURL.query;
console.log(`ID: ${query.id}`);
console.log(`Name: ${query.name}`);