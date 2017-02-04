// our connect server - for git initial commit
let connect = require('connect'); // imported third party module (Connect) into connect (object)
 //let app (object) be a Connect Server object
let app = connect();
//assign port# as constant
const port = 3000;

//setup event loop - listens on port 3000 w/console log statement upon executing listen command
app.listen(port); //listen for port#/hostname - localhost:3000
console.log(`Server listening at port: ${port}`); //need ` back quotes on tilde key ~ for passing variables into string

//mounted two roots onto server

// hello route - in proper order via mounting - '/(insert)' first before default '/'
app.use('/hello', (req, res, next) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.end("Hello FAM!")
  next();
});

//anonymous Function with Arrow Function - indicate this root folder for the server to access - respond to the html page with "Welcome"
//app.use same as app.get
// '/' main root for this website (webpage, can be hyerlinked?)
app.use('/', (req, res, next) =>{
    res.setHeader('Content-Type', 'text/plain');
    res.end("Welcome!")
  next();
});
