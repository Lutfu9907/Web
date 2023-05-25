const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const path = require('path');
const rootDir = require('./util/path');

const mongoConnect=require('./util/database').mongoConnect;


const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const hataController = require('./controllers/hata');

const yoneticiVerisi = require('./routes/yonetici');
const publicRoutes=require('./routes/public'); // .js kullanmıyoruz.


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir,'public')));

app.use(yoneticiVerisi.routes);
app.use(publicRoutes);

app.use(hataController.getHata404);


 
/*
const server=http.createServer(app);
server.listen(3000);
*/
mongoConnect( (client) => {
//console.log(client);
app.listen(3000);
})
