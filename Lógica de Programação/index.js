// variável, seu valor pode ser alterado no decorrer do programa
let nomeEstudante = "Helena";
console.log(nomeEstudante);

// constante, seu valor não pode ser alterado
const nomeDoEstudante = "Helena";
console.log(nomeDoEstudante);

//Em outras linguagens, portanto, você encontrará algo semelhante a:
String: nomeEstudante = "Helena";

let listaDeEstudantes = ["Helena", "Chico", "Mário"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
console.log(quantidadeDeEstudantes);

for (let indice = 0; indice < quantidadeDeEstudantes; indice++) {
	const alunoCorrente = listaDeEstudantes[indice];
	console.log(alunoCorrente);
}

//Com o do:
let inicio = 0;

do {
	console.log(listaDeEstudantes[inicio]);
	inicio++;
} while (inicio < quantidadeDeEstudantes);

//------------------------------------------------//

//Com o while:
let inicio2 = 0;
while (inicio2 < quantidadeDeEstudantes) {
	console.log(listaDeEstudantes[inicio]);
	inicio2++;
}
//-------------------------------------------------//
for (let numero = 1; numero <= 10; numero++) {
	console.log(numero);
}
//----------------------------------------------//
listaDeEstudantes.push("José");
console.log(listaDeEstudantes);
//--------------------------------------------//

if (quantidadeDeEstudantes > 5) {
	listaDeEstudantes.push("Manoel");
	console.log(listaDeEstudantes);
} else {
	console.log("Não é possível inserir mais alunos nessa turma");
}