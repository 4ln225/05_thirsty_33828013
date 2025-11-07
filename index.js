
var express = require ('express')
var ejs = require('ejs')


const app = express()
const port = 8000

app.use(express.static('public'));


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));


const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);



app.listen(port, () => console.log(`Example app listening on port ${port}!`))