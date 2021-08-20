const http = require('http');
const express = require('express');
const app = express();
const path = require('path');


app.use(express.static("drum_kit"));
// Catch all other routes and return the index file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'drum_kit/index.html'));
});

/* set up the port variable*/
const port = process.env.PORT || '3000';
app.set("port",port);
/*create server using express app and listen on port*/
const server = http.createServer(app);
server.listen(port);

