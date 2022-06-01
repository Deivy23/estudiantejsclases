const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("assets"));
app.use(express.static("node_modules"));

//Ruta para acceder al login:
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//Ruta para acceder a la pantalla de registro de usuarios:
app.get("/sign-up", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/sign_up/index.html"));
});

//Ruta para acceder al dashboard:
app.get("/dashboard", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/dashboard/index.html"));
});


//Ruta para acceder al listado de clientes:
app.get("/costumer", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/costumer/index.html"));
});

app.get("/user", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/user/index.html"));
});


app.get("/newCostumer", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/costumer/newCostumer.html"));
});


//Ruta para acceder al formulario para editar clientes:
app.get("/editCostumer", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/costumer/editCostumer.html"));
});
app.get("/editUser", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/user/editUser.html"));
});

app.get("/addUser", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/user/addUser.html"));
});

app.get("/interaction", function(req, res){
  res.sendFile(path.join(__dirname + "/views/interaction/index.html"));
})

app.listen(3000);
console.log("http://localhost:3000");
