






/* Resumo Javascript
console.log() Exibe uma mensagem no console do navegador
window.prompt('Pergunta') - Pergunta para o usuário algo responder
window.alert('Vc foi alertado') - Cria um alerta para o usuário
.value - Pega valor de um input

Básico
header.innerHtml = '<header><header>' - Capaz de escrever apenas Html
button.innerTex = 'Enviar' - Escreve apenas nos elementos.
document.write('Ui') escreve no html



Funções
function novoUser('Argumento') {}  - Cria uma função




Condicionais
If - Se for verdadeiro aconteça
else if - Mas se for isso, aconteça
else - Senão, aconteça isso.

switch(variavel) {
  case 'valor':
  console.log('faça algo')
  break;

  default: console.log('Nada encontrado')
  break;

}

Operator ternário
var maior18 = idade > 18 ? 'Sim é' : 'Não é'


Laços de repetição
while(idade > 18 && idade < 30) - Enquanto a idade for menor que 30 e maior de 18
for(declaração,condição,incremento)
In - Pega o index 
Of - Pega o valor


Seleção de Elementos 
var input = document.querySelector('input') - Retorna o primeiro input a ser encontrado
var input = document.getElementByID('input')- Retorna o primeiro elemento com o id 'input'
var input = document.getElementsByClassName('input') - Retorna o primeiro elemento com a classe 'input'

Criação de Elementos
var btn = document.createElement('button') - Cria um botão por exemplo.


definindo e pegando atributos a um elemento
img.setAttribute('src','caminho.jpg') - Definiu o atributo src para a imagem
img.getAttribute('src') - pegou o caminho da imagem dentro de src

Adicionando elementos no html
elementoPai.appendChild('meu elemento html') adiciona o meu elemento html no elementoPai
elementoPai.prepend('meu elemento') adiciona meu elemento no começo do elemento pai




Metodos de Arrays
var meuArray = ['item1','item2']
meuArray[1] - Retorna o valor de um item que está na posição 1
meuArray.indexOf('Valor a Ser Procurado') -  Procura a posição do parametro dentro do array
meuArray.unshift('Abacate') - Adiciona abacate como primeiro item no array
meuArray.push('Matheus','Claudio') - Adiciona o valor 'Matheus' e 'Claudio' no nosso por ultimpo no array e pode adicionar mais de um valor como no exemplo
meuArray.shift() - Remove o primeiro item do array
meuArray.pop('Marcos') - remove o último item do nosso array 
meyArray.join('-') - Cria um separador de items do nosso array
meuArray.toString() - Mesma coisa do join, só que ele retorna os valores em string e separado por virgula
var pessoas = timeMasculino.concat(timeFeminino) - Cria um novo array tendo valores do time masculino e time feminino juntos



Trabalhando com Datas
new Date('2022,05,14') - Cria nova data, se eu não passar parametro ele pega a data atual.

hoje.getDay() - Pega o dia da semana
hoje.getDate() - Pega o dia atual
hoje.getMonth() - Pega o mês, mas assim como array ele começa do zero
hoje.getFullYear() - Pega o ano atual
hoje.getHours()  - Pega as hras
hoje.getMinutes() - Pega os minutos
hoje.getSeconds()

Date.parse(data) - Converte a data em MS
datanova.setDate(datanova.getDate() + 5) // vai pegar o dia atual e somar mais 5



*/