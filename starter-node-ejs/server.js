const express = require('express');
const app = express();

app.set("view engine", "ejs");

// req = pedido | res = resposta
app.get("/", function (req, res){
    const items = [
        {
            title: "E",
            message: "CMAScript"
        },
        {
            title: "J",
            message: "AVAScript"
        },
        {
            title: "S",
            message: "oftware"
        },
    ];
    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML utilizando JS";
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle, 
    });
})


app.get("/sobre", function (req, res){
    res.render("pages/about");
})

app.listen(8080);
console.log('rodando')