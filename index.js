const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('we got a user here')
    socket.on('disconnect', function(){
        console.log('we got a user leavin here')
    })
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    })
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});