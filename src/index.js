const express = require("express");
const {uuid, isUuid} = require("uuidv4");
const { request } = require("express");

const app = express();

app.use(express.json());

// --------------------------------------------------

const progInfo = [{
    id:"001", nome:"Luigi", sobrenome:"Bros.", idade:"30", empresa:"Nintendo", tecnologias:"react"
}];

// --------------------------------------------------

function findYourIndex(idDev){

    const indexDev = progInfo.findIndex((eachDev) => eachDev.id == idDev);
    return indexDev;
};

// --------------------------------------------------

app.get("/programmers", (req, res) => {

    return res.json(progInfo);
});

app.post("/programmers", (req, res) => {

    const {nome, sobrenome, idade, empresa, tecnologias} = req.body;
    const newDev = {id: uuid(), nome, sobrenome, idade, empresa, tecnologias};
    progInfo.push(newDev);

    return res.json(newDev);
});

app.put("/programmers/:id", (req, res) => {

    const {id} = req.params;

    const { nome, sobrenome, idade, empresa, tecnologias } = req.body;

    const masterIndex = findYourIndex(id);

    if(masterIndex < 0){
        return res.status(400).json({error:"put - Projeto nao encontrado!"});
    };

    const updateDev = { id, nome, sobrenome, idade, empresa, tecnologias };

    progInfo[masterIndex] = updateDev;

    return res.json(updateDev);
});

app.delete("/programmers/:id", (req, res) => {
    
    const {id} = req.params;

    const masterIndex = findYourIndex(id);

    if(masterIndex < 0){
        return response.status(400).json({error:"delete - Projeto nao encontrado!"});
    };

    progInfo.splice(masterIndex, 1);

    return res.json(`Perfil apagado!`)
});

// --------------------------------------------------





// --------------------------------------------------

const port = 7676;
app.listen(port, () => { console.log(` => Servidor iniciado na Porta: ${port} <= `);});