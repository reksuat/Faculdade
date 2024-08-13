const prompt = require("prompt-sync")();
const curso = require("./Curso.js")
const db = [];

let proxId = 1;

    const model = (id = proxId++) => {
    const nome = prompt("Nome: ");
    const horas_totais = prompt("Total de horas: ");
    let id_curso = 0
    if(curso.listar()) {
        id_curso = parseInt(prompt("ID do curso: "));
    } else {
        console.log("Cadastre uma curso para inserir uma materia");
    }
    
        if (
        nome != "" &&
        horas_totais != "" &&
        curso.show(id_curso) 
        ) {
        return {
            id,
            nome,
            horas_totais,
            id_curso
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