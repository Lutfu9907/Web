const express = require('express');
const path=require('path');

const router=express.Router();

const rootDir=require('../util/path');

router.get('/', (req, res, next) => {
    //console.log("Expressden merhaba");
   // res.send('<h1>Expresden merhaba Yönlendirme</h1>');
   res.sendFile(path.join(rootDir, 'views','index.html'));

});

module.exports=router;