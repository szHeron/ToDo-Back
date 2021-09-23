const mongoose = require('mongoose')
require('dotenv').config({ path: '.env.local' });

const connection = mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser:true,
   useUnifiedTopology: true,
}).then(()=>{
   console.log(`MONGODB connected`);
}).catch(err=>{
   console.log(`db error ${err.message}`);
   process.exit(1)
})


module.exports = connection;