var mongoose=require("mongoose");
require("./mekansema");
var dbURI = 'mongodb+srv://muratcankaynak:123mavitablo@mekanbul.q6qlga7.mongodb.net/?retryWrites=true&w=majority'; 
mongoose.connect(dbURI); 
function kapat(msg,callback){
    mongoose.connection.close(function(){
        console.log(msg);
        callback();
    }
    );
}
process.on("SIGINT",function(){
kapat("Uygulama kapatıldı!",function(){
    process.exit(0);
});
});
mongoose.connection.on("connected",function(){
console.log(dbURI+"adresindeki veritabanına bağlandı");
}

);
mongoose.connection.on("disconnected",function(){
    console.log(dbURI+"adresindeki veritabanı bağlantısı koptu");
}

);
mongoose.connection.on("error",function(){
    console.log("bağlantı hatası");
}

);