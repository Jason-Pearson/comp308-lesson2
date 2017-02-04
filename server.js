// our connect server - for git initial commit
let connect = require('connect');
 
let app = connect();
const port = 3000;

app.listen(port); //listen for port#/hostname - localhost:3000
console.log(`Server listening at port: ${port}`); //need ` back quotes on tilde key ~ for passing variables into string


// hello route - in proper order via mounting - '/(insert)' first before default '/'
app.use('/hello', (req, res, next) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello FAM!")
  next();
});

//anonymous Function with Arrow Function - indicate this root folder for the server to access - respond to the html page with "Welcome"
//app.use same as app.get
app.use('/', (req, res, next) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!")
  next();
});
