let express = require('express'),
app = express()//function handler
http = require('http').createServer(app); //http server

//Initialize app with route / (root)
app.get('/', function(req, res){
    res.write('This is where we will show our chat client.\n');
    res.write('We need an element to hold messages.\n');
    res.write('We need an element to notify us that others are writing a message.\n');
    res.write('We need an element to hold the message input form.\n');
    res.end();
})

//Listen for an application on port 8081
app.listen(8081, function(){
    console.log('listening on http://127.0.0.1:8081/')
})
