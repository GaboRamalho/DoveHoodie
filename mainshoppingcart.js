var valor = 2800.00; //variavel com o valor do produto

function productvalue() //criacao da funcao
{
    var valorQuantidade = this.valor * parseFloat(document.getElementById("amount").value); //variavel que vai pegar o valor do produto e multiplicar pela quantidade
	document.getElementById("totalvalue").innerHTML = (valorQuantidade); //aqui deve retornar o valor
}