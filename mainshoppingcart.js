var valor = 2800.00; //variavel com o valor do produto

function productvalue() //criacao da funcao
{
    var valorQuantidade = this.valor * parseFloat(document.getElementById("quantidade").value); //variavel que vai pegar o valor do produto e multiplicar pela quantidade
	document.getElementById("totalvalor").innerHTML = (valorQuantidade); //aqui deve retornar o valor
}