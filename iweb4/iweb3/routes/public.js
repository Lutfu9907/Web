const express = require('express');
const path=require('path');

const router=express.Router();

const rootDir=require('../util/path');
const yoneticiVerisi = require('./yonetici');


router.get('/', (req, res, next) => {
    //console.log("Expressden merhaba");
  
   //console.log(yoneticiVerisi.urunler);
   // res.send('<h1>Expresden merhaba Yönlendirme</h1>');
   //res.sendFile(path.join(rootDir, 'views','index.html'));

   res.render('index', {
        sayfaBasligi:"Ana sayfa",
        urunler:yoneticiVerisi.urunler,
        yol:'/',
        yonetici:false
   })

});

module.exports=router;