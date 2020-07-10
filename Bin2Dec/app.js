//Função do botão Limpar
function calcular(tipo, valor) {
	if(tipo === 'acao') {

		if (valor === 'clear') {
			document.getElementById('binario').value = ''
			document.getElementById('resultado').value = ''

		}
	}
}

//Função para Calcular e Exibir
function converterBinario() {
	//calcular
	var recuperarValor = document.getElementById('binario').value
	var numeral = parseInt(recuperarValor,2)

	//exibir
	var exibirNumeral = document.getElementById('resultado')
	exibirNumeral.innerHTML = numeral
}