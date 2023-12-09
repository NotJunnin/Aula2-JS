// //Atalhos
// // += // Operador de atribuição

// //Operadores de atribuição
// let alunos = 12;
// let escola;
// escola = 'Digital College';

// //PRIMITIVO
// let numero = 1; // number
// let palavras = 'palavra ou frase'; // string
// let verdadeiro = true; // boolean
// let falso = false; // boolean

// //ARRAY
// let arrayDeNumeros = [1, 2, 3, 4];
// let arrayDePalavras = ['segunda', 'terca', 'quarta'];
// let arrayDeBoolleans = [true, false, true, true];

// //OBJETOS
// let aluno = {
//     nome: 'Junnin',
//     idade: 24,
//     genero: 'Masculino',
//     gostosMusicais: ['Pop', 'Trap', 'Eletronica', 'Indie', 'Sertanejo', 'Reggae', 'Song Sad']
// };

// console.log(alunos);
// console.log(escola);

// let constante = 10;
// const acelerar = 20;

//verboso
// let v1 = document.querySelector('#valor1').value;
// let v2 = document.querySelector('#valor2').value;

// console.log('valor1:', v1);
// console.log('valor2:', v2);

// let adicao = document.querySelector('#somar');
// adicao.addEventListener('click', function(){
//     alert('cliquei')
// })

somar.onclick = () => {
    resultado.innerHTML = `O resultado é: ${Number(valor1.value) + Number(valor2.value)}`;
    valor1.value = '';
    valor2.value = '';
}

subtrair.onclick = () => {
    resultado.innerHTML = `O resultado é: ${Number(valor1.value) - Number(valor2.value)}`;
    valor1.value = '';
    valor2.value = '';
}

multiplicar.onclick = () => {
    resultado.innerHTML = `O resultado é: ${Number(valor1.value) * Number(valor2.value)}`;
    valor1.value = '';
    valor2.value = '';
}

dividir.onclick = () => {
    if (Number(valor2.value) ===0){
        resultado.innerHTML = 'Nenhum valor pode ser dividido por zero!';
        return;
    }
    let result = Number(valor1.value) / Number(valor2.value);
    if(!Number.isInteger(result)){
        resultado.innerHTML = `O resultado é: ${result.toFixed(2)}`;
    }else{
        resultado.innerHTML = `O resultado é: ${result}`;
    }
    valor1.value = '';
    valor2.value = '';
}