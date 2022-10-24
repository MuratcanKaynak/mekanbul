var express = require('express');
var router = express.Router();



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
