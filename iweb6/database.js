const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://elvanduman71:IleriWeb1234@iweb.fzscuwa.mongodb.net/iwebDB?retryWrites=true&w=majority"
  )
    .then((client) => {
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
    if(_db) {
        return _db;
    }
    throw "Veritabanı bulunamadı";

};

//module.exports=mongoConnect;

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
