"use strict";
var pessoa = {
    nome: 'Ricardo',
    idade: 27,
    profissao: 'Desenvolvedor web'
};
pessoa.idade = 28;
var andre = {
    nome: 'Andre',
    idade: 24,
    profissao: 'Pintor'
};
var bianka = {
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
var vanessa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Contadora
};
var maria = {
    nome: 'Maria',
    idade: 17,
    materiais: ['Portugês', 'Matemática']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log(' ', item);
    }
}
listar(maria.materiais);
