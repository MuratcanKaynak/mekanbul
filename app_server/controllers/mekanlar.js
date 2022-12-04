var express = require('express');
var router = express.Router();

<<<<<<< HEAD


const anaSayfa = function (req, res, next) {
  res.render('anasayfa',
  {
    "baslik": 'Anasayfa' ,
    "sayfaBaslik":{
      "siteAd":"Mekanbul",
      "slogan":"Civardaki Mekanları Keşfet! "
  },
  "mekanlar":[
    {
      "ad":"Starbucks",
      "adres":"Centrum Garden Avm",
      "puan":"3",
      "imkanlar":["Dünya Kahveleri","Yiyecek","Hızlı wifi bağlantısı"],
      "mesafe":"10km"
    },
    {
      "ad":"Barida Kafe",
      "adres":"Sdü Batı Kampüsü",
      "puan":"4",
      "imkanlar":["Dünya Kahveleri","Yiyecek","Hızlı wifi bağlantısı"],
      "mesafe":"1km"
    }
  ]
  });
}

const mekanBilgisi = function (req, res, next) {
  res.render('mekanbilgisi',
  { 
  "baslik": 'Mekan Bilgisi',
  "mekanBaslik":"Starbucks",
  "mekanDetay":{
    "ad":"Starbucks",
    "puan":"3",
    "adres":"Centrum Garden",
    "saatler":[
      {
        "gunler":"Pazartesi-Cuma",
        "acilis":"9:00",
        "kapanis":"23:00",
        "kapali":false
      },
      {
        "gunler":"Cumartesi-Pazar",
        "acilis":"10:00",
        "kapanis":"22:00",
        "kapali":false
      }
    ],
    "imkanlar":["Dünya Kahveleri","Yiyecek","Hızlı wifi bağlantısı"],
    "koordinatlar":{
      "enlem":"37.7",
      "boylam":"30.5"
    },
    "yorumlar":[
      {
        "yorumYapan":"Asım Sinan Yüksel",
        "yorumMetni":"Berbaaaaaat",
        "tarih":"20 Ekim 2022",
        "puan":"1"
      },
      {
        "yorumYapan":"Ali",
        "yorumMetni":"Süper",
        "tarih":"20 Ekim 2022",
        "puan":"5"
      }
    ]
=======
const axios=require("axios");
const e = require("express");
var apiSecenekleri = {
  sunucu: "localhost:3000",
  apiYolu: "/api/mekanlar/",
}
var mesafeyiFormatla=function(mesafe){
  var yeniMesafe,birim;
  if(mesafe>1){
    yeniMesafe=parseFloat(mesafe).toFixed(1);
    birim=" km";
  }else{
    yeniMesafe=parseInt(mesafe*1000,10);
    birim=" m";
  }
  return yeniMesafe+birim;
}
var anaSayfaOlustur=function(res,mekanListesi){
  var mesaj;
  if(!(mekanListesi instanceof(Array))){
  mesaj="API HATASI:Birşeyler ters gitti.";
  mekanListesi=[];
  }else{
  if(!mekanListesi.length){
  mesaj="Civarda herhangi bir mekan yok";
  }
  }
  res.render("anasayfa",{
    "baslik":"Anasayfa",
    "sayfaBaslik":{
      "siteAd":"Mekanbul",
      "slogan":"Mekanları Keşfet"
    },
    "mekanlar":mekanListesi,
    "mesaj":mesaj
  });
}
const anaSayfa = function (req, res, next) {
  axios.get(apiSecenekleri.sunucu+apiSecenekleri.apiYolu,{
    params:{
      enlem:req.query.enlem,
      boylam:req.query.boylam
    }
  }).then(function(response){
    var i,mekanlar;
    mekanlar=response.data;
    for(i=0;i<mekanlar.length;i++){
    mekanlar[i].mesafe=mesafeyiFormatla(mekanlar[i].mesafe);
    }
    anaSayfaOlustur(res,mekanlar);
  }).catch(function(hata){
    anaSayfaOlustur(res,hata);
  });
}

var detaySayfasiOlustur = function(res,mekanDetaylari){
  mekanDetaylari.koordinat={
    "enlem":mekanDetaylari.koordinat[0],
    "boylam":mekanDetaylari.koordinat[1]
  }
  res.render('mekanbilgisi',
  {
    mekanBaslik: mekanDetaylari.ad,
    mekanDetay:mekanDetaylari
  })
}

var hataGoster = function(res,hata){
  var mesaj;
  if(hata.response.status==404){
    mesaj="404, Sayfa Bulunamadı!";
  }
  else{
    mesaj=hata.response.status+" hatası";
  }
  res.status(hata.response.status);
  res.render('error',{
    "mesaj":mesaj
  });
};

const mekanBilgisi = function (req, res) {
  axios
    .get(apiSecenekleri.sunucu + apiSecenekleri.apiYolu + req.params.mekanid)
    .then(function (response){
      detaySayfasiOlustur(res, response.data);
    })
    .catch(function (hata) {
      hataGoster(res, hata);
    });
};
>>>>>>> 46977a7 (kesin1)

  }
});
};
const yorumEkle = function (req, res, next) {
  res.render('yorumekle', { title: 'Yorum Ekle' });
};
module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle

}
