
// Função para calcular o preço do ingresso com base na idade
function calcularPreco() {
    const idade = document.getElementById('idade').value; // Obtém o valor inserido no campo de entrada 'idade'
    const resultadoElement = document.getElementById('resultado'); // Obtém a referência ao elemento onde o resultado será exibido

    let preco;// Variável para armazenar o preço do ingresso

    if (idade < 0) {   // Verifica a faixa etária e define o preço correspondente
        preco = "Idade inválida";
    } else if (idade <= 12) { // Preço para crianças (até 12 anos)
        preco = 10; 
    } else if (idade <= 18) { // Preço para adolescentes (13 a 18 anos)
        preco = 15; 
    } else if (idade <= 60) { // Preço para adultos (19 a 60 anos)
        preco = 20; 
    } else { // Preço para idosos (acima de 60 anos)
        preco = 10; 
    }

    // Atualiza o conteúdo do elemento 'resultado' com a mensagem contendo o preço calculado
    resultadoElement.textContent = `O preço do ingresso é: R$${preco}`;
}