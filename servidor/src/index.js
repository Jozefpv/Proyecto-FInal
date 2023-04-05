require('./database')
const express = require('express')
const morgan = require('morgan')

const app = express()

//Settings
app.set('port', process.env.PORT || 3003)

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
// async function main(){
//     const products = await Product.find()
//     return products
// }

app.use(require('./routes/routes'))

app.listen(app.get('port'), () => { 
    console.log(`Server on port ${app.get('port')}`)

})