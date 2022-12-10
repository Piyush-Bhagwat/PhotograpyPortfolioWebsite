const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

let images = {
    animalFileNames: fs.readdirSync(__dirname + "/public/images/Animals"),
    birdFileNames: fs.readdirSync(__dirname + "/public/images/Birds"),
    landscapeFileNames: fs.readdirSync(__dirname + "/public/images/Landscapes"),
    fileNames : function(){

        let allNames=[];
        this.animalFileNames.forEach(function(item){
            allNames.push("/Animals/"+ item);
        });
        this.birdFileNames.forEach(function(item){
            allNames.push("/Birds/"+ item);
        });
        this.landscapeFileNames.forEach(function(item){
            allNames.push("/Landscapes/"+ item);
        });

        shuffleArray(allNames);
        return allNames
    }
};

// console.log(images.fileNames());

app.get('/', function(req, res){
    res.render('index', {imgName: images.fileNames()});
});

app.get('/animals', function(req, res){
    res.render('animals.ejs', {imgName: images.animalFileNames});
});

app.get('/birds', function(req, res){
    res.render('bird.ejs', {imgName: images.birdFileNames});
});

app.get('/landscapes', function(req, res){
    res.render('landscapes', {imgName: images.landscapeFileNames});
});

app.listen(3000, function(){
    console.log('app started');
});
