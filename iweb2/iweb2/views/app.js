const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const rootDir=require('./util/path');
const app=express();


const yoneticiRoutes = require('./routes/yonetici');
const publicRoutes=require('./routes/public'); // .js kullanmıyoruz.
const path = require('./util/path');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(yoneticiRoutes);
app.use(publicRoutes);

app.use((req,res,next) => {
    res.status(404).send("Sayfa Bulunamıyor");
    res.status(404).sendFile(path.join(rootDir,'views','sayfa404.html'));
});


/*
const server=http.createServer(app);
server.listen(3000);
*/
app.listen(3000);