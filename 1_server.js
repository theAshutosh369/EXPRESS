// to install express module 
// run npm install express in terminal or gitbash

const exp = require("express")
var app = exp();

app.get( "/" , function(req , res){ 
    console.log(req)
    res.send("<h1>hwllo </h1>hello")
 })
//  to see the server output first run the this file using gitbash or terminal and then go to chrome and search localhost:3000/
//  first parameter specifies that which page is going to serve its a route . / defines home page 
// req(request) kel ki sagli info terminal or gitbash madhe disel 
// res(respond) kel ki server work krel ani je " " mdhe ahe te serve krel 

app.get("/contact" , function(req , res){
    res.send("contact me at : theashutosh369@gmail.com")
})
//  to see the server output first run the this file using gitbash or terminal and then go to chrome and search localhost:3000/contact
// get function madhe 2 parameter tr lagnarch ek request chi ani dusri respond chi

app.get("/about" , function(req , res){
    res.send("my name is Ashutosh")
})


app.get("/hobby" , function(req , res){
    res.send("reading history")
})


app.listen(3000 , function(){
    console.log("server just started on port 3000 ")
})
// 3000 is server location 
// we just created a server here :)





// install nodemon in terminal for automatically reloading server
// npm install -g nodemon
// to run the file hit command in the terminal
// nodemon filename.extension


                                        