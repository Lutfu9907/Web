const express = require('express');
const path=require('path');

const router=express.Router();

const rootDir=require('../util/path');
const yoneticiVerisi = require('./yonetici');

const urunController=require('../controllers/urun');

router.get('/', urunController.getUrunler);
router.get('/blank', urunController.getSablon);

module.exports=router;