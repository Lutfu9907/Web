const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const path = require('path');
const rootDir = require('./util/path');
const app=express();

app.set('view engine', 'ejs');
app.set('views', 'views');


const yoneticiVerisi = require('./routes/yonetici');
const publicRoutes=require('./routes/public'); // .js kullanmıyoruz.


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir,'public')));

app.use(yoneticiVerisi.routes);
app.use(publicRoutes);

app.use((req,res,next) => {
   // res.status(404).send("Sayfa Bulunamıyor");
    //res.status(404).sendFile(path.join(rootDir,'views','sayfa404.html'));
    res.render('sayfa404', {
        sayfaBasligi:'Sayfa Bulunamıyor',
        
    })

});

 
/*
const server=http.createServer(app);
server.listen(3000);
*/
app.listen(3000);