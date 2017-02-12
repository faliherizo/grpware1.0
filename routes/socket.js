
// Chargement du fichier index.html affiché au client
var server = http.createServer(function(req, res) {
    fs.readFile('./index.html', 'utf-8', function(error, content) {
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(content);
    });
});

// Chargement de socket.io
var io = require('socket.io').listen(server);
// Quand un client se connecte, on le note dans la console
io.sockets.on('connection', function (socket) {

    socket.on('new_profil', function(pseudo) {
        socket.pseudo = pseudo;
        socket.messages = [];
        //Todo save message in MongoDB

    });
    socket.emit('message', 'Vous êtes bien connecté !');
    //Receive all msg form all client
    socket.broadcast.emit('message', 'Un autre client vient de se connecter !');
    // Quand le serveur reçoit un signal de type "message" du client
    socket.on('message', function (data) {
        if(data.message) {
            socket.messages.push(data.message);
            console.log(socket.pseudo + ' me parle ! Il me dit : ' + data.message);
        }else{
            Console.log("There is problem:", data);
        }
    });
    //envoit un message d'un client
    socket.on('send', function (data) {
        io.sockets.emit('message', data.message);
    });




});


server.listen(3000);