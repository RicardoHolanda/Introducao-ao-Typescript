"use strict";
const pessoa = {
    nome: 'Ricardo',
    idade: 27,
    profissao: 'Desenvolvedor web'
};
pessoa.idade = 28;
const andre = {
    nome: 'Andre',
    idade: 24,
    profissao: 'Pintor'
};
const bianka = {
    nome: 'Bianka',
    idade: 25,
    profissao: 'Nutricionista'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao[Profissao["Gamer"] = 3] = "Gamer";
    Profissao[Profissao["Contadora"] = 4] = "Contadora";
})(Profissao || (Profissao = {}));
const vanessa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Contadora
};
const maria = {
    nome: 'Maria',
    idade: 17,
    materiais: ['Portugês', 'Matemática']
};
function listar(lista) {
    for (const item of lista) {
        console.log(' ', item);
    }
}
listar(maria.materiais);
