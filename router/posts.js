const express = require("express");
const router = express.Router();

const { lista } = require("./data/lista.js");


server.get("/bacheca", (req, res) => {
  let response = {
    counter: lista.length,
    data: [...lista],
  };

  res.json(response);
});

//ritorna l'oggetto tramite titolo
server.get("/bacheca/obj/:titolo", (req, res) => {
  let titolo = req.params.titolo;

  // Trova un post che include la stringa passata
  const post = lista.find((post) =>
    post.titolo.toLowerCase().includes(titolo.toLowerCase())
  );

  if (post) {
    res.json(post); // Usa sendFile per inviare l'immagine
  } else {
    res.status(404).send("Oggetto non trovato");
  }
});

//ritorna l'oggetto tramite index
server.get("/bacheca/id/:index", (req, res) => {
  const index = parseInt(req.params.index);

  const indexMatch = lista.find((ele) => ele.id === index);

  if (indexMatch) {
    res.json(indexMatch);
  } else {
    res.status(404).send("Post per indice non trovato.");
  }
});

//ti printa tutti i titoli delle img dentro a lista
server.get("/bacheca/img", (req, res) => {
  res.json(lista.map((post) => post.img));
});

//ti printa a schermo l'immagine del titolo collegata
server.get("/bacheca/img/:titolo", (req, res) => {
  let titolo = req.params.titolo;

  // Trova un post che include la stringa passata
  const post = lista.find((post) =>
    post.titolo.toLowerCase().includes(titolo.toLowerCase())
  );

  if (post) {
    res.sendFile(post.img, { root: "./public" }); // Usa sendFile per inviare l'immagine
  } else {
    res.status(404).send("Immagine non trovata");
  }
});

// index
app.get("/", function (req, res) {
  res.send("Lista delle pizze");
});
// show
app.get("/:id", function (req, res) {
  res.send("Dettagli della pizza " + req.params.id);
});
// store
app.post("/", function (req, res) {
  res.send("Creazione nuova pizza");
});
// update
app.put("/:id", function (req, res) {
  res.send("Modifica integrale della pizza " + req.params.id);
});
// modify
app.patch("/:id", function (req, res) {
  res.send("Modifica parziale della pizza " + req.params.id);
});
// destroy
app.delete("/:id", function (req, res) {
  res.send("Eliminazione della pizza " + req.params.id);
});


module.exports = {
    router
};