const Urun = require("../models/urun");

exports.getUrunler = (req, res, next) => {
  Urun.tumunuGetir().then(urunler => {
    res.render("index", {
      sayfaBasligi: "Ürün Listemiz",
      urunler: urunler,
      yol: "/",
      yonetici: false,
    });
  }).catch(err => {

  });

  
};

exports.getSablon = (req, res, next) => {
  const urunler = Urun.tumunuGetir();

  res.render("blank", {
    sayfaBasligi: "Boş Şablon",
    urunler: urunler,
    yol: "/blank",
    yonetici: false,
  });
};

exports.getUrunEkle = (req, res, next) => {
  res.render("urun-ekle", {
    sayfaBasligi: "",
    baslikGoster: 2,
    yol: "/urun-ekle",
  });
};

exports.postUrun = (req, res, next) => {
  const urun_adi = req.body.urun_adi;
  const adet = req.body.adet;
  const fiyat = req.body.fiyat;
  const aciklama = req.body.aciklama;

  const urun = new Urun(urun_adi, adet, fiyat, aciklama);
  urun
    .kaydet()
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
