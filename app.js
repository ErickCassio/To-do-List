const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = [];

app.get('/', (req, res) => {
  res.render('list',{listTitle: date(), itensList: items});
  // O render procurará pelo arquivo list.ejs na pasta views, e enviará a variável kindOfDay com o conteúdo da variável day para lá
});

app.get('/about', (req,res) =>{
  res.render('about',{});
})

app.post("/", (req, res) =>{
  items.push(req.body.newItem);
  console.log(items);
  res.redirect("/");
})

app.listen(3000, () => {
    console.log("Server runnning on port 3000");
});