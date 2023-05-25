const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');


const urunController=require('../controllers/urun');

router.get('/urun-ekle', urunController.getUrunEkle);

router.post('/urun', urunController.postUrun);

//module.exports = router;
exports.routes=router;
//exports.urunler=urunler;