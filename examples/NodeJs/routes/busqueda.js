var express = require('express');
var router = express.Router();
const fs = require("fs");


router.post('/buscar', function(req, res, next) {
    const jsonData = require('../BD.json');
    
    let busqueda = req.body.palabras
    const palabras = busqueda.split(" ");
    archivo1 = 0
    archivo2 = 0
    archivo3 = 0
    archivo4 = 0
    archivo5 = 0
    archivo6 = 0
    archivo7 = 0
    archivo8 = 0
    archivo9 = 0
    archivo10 = 0
    busqueda1 = []
    busqueda2 = []
    busqueda3 = []
    busqueda4 = []
    busqueda5 = []
    busqueda6 = []
    busqueda7 = []
    busqueda8 = []
    busqueda9 = []
    busqueda10 = []
    archivos=[]

    for(i in palabras) {
        let aux = palabras[i]
        if (jsonData[aux]) {
            for(let j = 0; j < jsonData[aux].length; j++) {
                if(jsonData[aux][j].archivo == "Archivo1"){
                    busqueda1.push(aux)
                    archivo1 = archivo1 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo2"){
                    busqueda2.push(aux)
                    archivo2 = archivo2 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo3"){
                    busqueda3.push(aux)
                    archivo3 = archivo3 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo4"){
                    busqueda4.push(aux)
                    archivo4 = archivo4 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo5"){
                    busqueda5.push(aux)
                    archivo5 = archivo5 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo6"){
                    busqueda6.push(aux)
                    archivo6 = archivo6 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo7"){
                    busqueda7.push(aux)
                    archivo7 = archivo7 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo8"){
                    busqueda8.push(aux)
                    archivo8 = archivo8 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo9"){
                    busqueda9.push(aux)
                    archivo9 = archivo9 + jsonData[aux][j].cantidad
                }
                if(jsonData[aux][j].archivo == "Archivo10"){
                    busqueda10.push(aux)
                    archivo10 = archivo10 + jsonData[aux][j].cantidad
                }
            }
        }
    }
 
    if(archivo1>0){
           archivos.push({ nombre: "carpeta1/Archivo1", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo1, palabras: busqueda1})
    }
    if(archivo2>0){
        archivos.push({ nombre: "carpeta1/Archivo2", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo2, palabras:busqueda2})
    }
    if(archivo3>0){
        archivos.push({ nombre: "carpeta1/Archivo3", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo3, palabras:busqueda3})
    }
    if(archivo4>0){
        archivos.push({ nombre: "carpeta1/Archivo4", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo4, palabras:busqueda4})
    }
    if(archivo5>0){
        archivos.push({ nombre: "carpeta1/Archivo5", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo5, palabras:busqueda5})
    }
    if(archivo6>0){
        archivos.push({ nombre: "carpeta2/Archivo6", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo6, palabras:busqueda6})
    }
    if(archivo7>0){
        archivos.push({ nombre: "carpeta2/Archivo7", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo7, palabras:busqueda7})
    }
    if(archivo8>0){
        archivos.push({ nombre: "carpeta2/Archivo8", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo8, palabras:busqueda8})
    }
    if(archivo9>0){
        archivos.push({ nombre: "carpeta2/Archivo9", direccion : "http://localhost:8080/buscar/Archivo",
            coincidencias : archivo9, palabras:busqueda9})
    }
    if(archivo10>0){
        archivos.push({ nombre: "carpeta2/Archivo10", direccion : "http://localhost:8080/buscar/Archivo",
         coincidencias : archivo10, palabras:busqueda10})
        }  
    res.render('resultado', { lista: archivos})
  });

  router.get('/buscar/Archivo/aux', function(req, res){
    console.log(req.query.nombre);
    const ruta = "../Wikipedia/"+req.query.nombre+ ".txt"
    console.log(ruta);
    fs.readFile(ruta, (err, data) => {
        if (err) return console.error(err);
        const dataString = data.toString();
        console.log(dataString);
        res.render('archivo', { texto: dataString})
      });
    
})


module.exports = router;
