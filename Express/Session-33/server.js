const express= require('express');
const app= express();

app.use(express.json())

app.use("/api/user",require('./routes/user_route'));
app.use("/api/customer", require('./routes/customer_route'));
app.use("/api/product",require('./routes/product_route'));

app.listen(5000,()=>{
    console.log("Application Started");
})