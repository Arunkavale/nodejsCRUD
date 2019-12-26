var mongoose = require('mongoose');

mongoose.set('useCreateIndex', true)
let dbUser = 'mongdbusr';
let dbPassword = encodeURIComponent('Ld4MDB@D12#19');
let dbName =  (process.env ==  'test') ? 'liquidity_testCases' : 'liquidity_test';
const DB_URL = `mongodb://${dbUser}:${dbPassword}@3.18.223.74:27017/liquidity_test`;


module.exports = function() {
  mongoose.connect(process.env.MONGODB_URI ,{useNewUrlParser: true , useFindAndModify: false , useUnifiedTopology: true })
    .then(() => console.log(`Mongodb connected to ${process.env.MONGODB_URI}`)).catch((e)=>console.log(e));
}
