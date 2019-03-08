var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static('dist'));

app.use('/dist', express.static('dist'));

io.on('connection', function(socket){
  console.log('a user connected');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});
//identify unused port between 1520 and 1540
var port = 1503;
http.listen(port, function(){
  console.log('listening on https://seattleacademy.software/'+port);
});