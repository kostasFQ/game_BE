const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect(process.env.BASE_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  err ?
    console.log('Some problem with the connection ' +err) :
    console.log('The Mongoose connection is ready');
});

require('./service/model');