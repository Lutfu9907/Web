const express = require('express');
const path = require('path');

const router = express.Router();
const rootDir = require('../util/path');


router.get('/urun-ekle', (req, res, next) => {
    //res.send('<h1>Ürün Ekle Sayfasındasın</h1><form action="/urun" method="POST">Ürün Adı: <input type="text" name="urun_adi"><input type="submit" name="kaydet" value="Gönder"></form>');
    res.sendFile(path.join(rootDir, 'views', 'urun-ekle.html'));
});

router.post('/urun', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');

});

module.exports = router;