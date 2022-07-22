const pessoa = {
    nome: 'Ricardo',
    idade: 27,
    profissao: 'Desenvolvedor web'
}

pessoa.idade = 28;

const andre: { nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 24,
    profissao: 'Pintor'
}

const bianka: {nome: string, idade: number, profissao: string} = {
    nome: 'Bianka',
    idade: 25,
    profissao: 'Nutricionista'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Gamer,
    Contadora
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: Profissao
}

interface Estudante extends Pessoa{
    materiais: string[]
}

const vanessa: Pessoa = {
    nome: 'Vanessa',
    idade: 29,
    profissao: Profissao.Contadora
}

const maria: Estudante = {
    nome: 'Maria',
    idade: 17,
    materiais: ['Portugês', 'Matemática']
}

function listar( lista: string[]){
    for(const item of lista){
        console.log(' ', item);
    }
}

listar(maria.materiais)