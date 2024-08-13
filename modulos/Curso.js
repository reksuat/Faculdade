const prompt = require("prompt-sync")();
const turno = require("./Turno.js")
const db = [];

let proxId = 1;

    const model = (id = proxId++) => {
    const nome = prompt("Nome: ");
    const horas_totais = prompt("Total de horas: ");
    let id_turno = 0
    if(turno.listar()) {
        id_turno = parseInt(prompt("ID do turno: "));
    } else {
        console.log("Cadastre uma turno para inserir um curso");
    }
    
        if (
        nome != "" &&
        horas_totais != "" &&
        turno.show(id_turno) 
        ) {
        return {
            id,
            nome,
            horas_totais,
            id_turno
        };
        }

    console.log("Dados inválidos");
    };

    const criar = () => {
    const novo = model();

    if (novo) {
        db.push(novo);

        console.log("Registro concluido com sucesso!");
    }
    };

    const listar = () => {
    if (db.length == 0) {
        console.log("Nenhum registro encontrado.");
        return false;
    }

    db.forEach((el) => console.log(el));
    return true;
    };

    const show = (id) => db.find((el) => el.id == id);

    const atualizar = () => {
    if (listar()) {
        const id = parseInt(prompt("ID: "));

        const indice = db.findIndex((el) => el.id == id);

        if (indice != -1) {
        const novo = model(id);

        if (novo) {
            db[indice] = novo;
            console.log("Registro atualizado com sucesso.");
        }
        } else {
        console.log("Registro não encontrado");
        }
    }
    };

const remover = () => {
    if(listar()) {
        const id = parseInt(prompt("ID: "));

        const indice = db.findIndex(el => el.id == id);

        if(indice != -1) {
            db.splice(indice, 1);
            console.log("Registro excluído com sucesso");
        } else {
            console.log("Registro não encontrado")
        }
    }
}

module.exports = {
    criar,
    listar,
    show,
    atualizar,
    remover
}