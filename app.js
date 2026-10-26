
const product = '{ "name": "mobile", "price": 80000 }'
const data = JSON.parse(product)
console.log(data);//{ name: 'mobile', price: 80000 }
console.log(data.price);

