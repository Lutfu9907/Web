const Urun=require('../models/urun');
    
exports.getUrunler =(req, res, next) => {
    const urunler = Urun.tumunuGetir();
    
    res.render('index', {
         sayfaBasligi:"Anasayfa",
         urunler:urunler,
         yol:'/',
         yonetici:false
    });
 }

 exports.getSablon =(req, res, next) => {
    const urunler = Urun.tumunuGetir();
    
    res.render('blank', {
         sayfaBasligi:"Boş Şablon",
         urunler:urunler,
         yol:'/blank',
         yonetici:false
    });
 
 }

 exports.getUrunEkle=(req, res, next) => {
    res.render('urun-ekle', {
        sayfaBasligi:'Ürün Ekle',
        yol:'/urun-ekle'

    })
}

exports.postUrun=(req, res, next) => {
    //console.log(req.body);
    const urun=new Urun(req.body.urun_adi);
    urun.kaydet();
    res.redirect('/');

}