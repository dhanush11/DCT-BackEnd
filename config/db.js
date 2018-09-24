const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// mongoose.connect('mongodb://localhost:27017/edu_dct', {useNewUrlParser: true}).then(() => {
//   console.log('connected to db');
// }).catch((err) => {
//   console.log(err);
// })

mongoose.connect(process.env.MONGODB_URI || `mongodb://dhanush17:mlab17@ds131258.mlab.com:31258/dct` || 'mongodb://localhost/polling');
//mongoose.connect(mongodb://dhanush17:mlab17@ds131258.mlab.com:31258/dct)


//mongoose.set('useCreateIndex', true);

module.exports = {
  mongoose
}
