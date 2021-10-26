const mongoose = require('mongoose')

mongoose.connect(``)
    .then(() => { console.log('DB->ConnectedSuccessfully!') })
    .catch(err => console.log(`DB->ConnectionError: ${err.message}`))

module.exports = mongoose