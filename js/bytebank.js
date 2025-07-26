let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");
elementoSaldo.textContent = saldo;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", function (event) {
    event.preventDefault();
    if (!elementoFormulario.checkValidity()) {
        alert("Por favor, preencha todos os campos da transação!");
        return;
    }

    const inputTipoTransacao = document.querySelector("#tipoTransacao");
    const inputValor = document.querySelector("#valor");
    const inputData = document.querySelector("#data");
    
    let tipoTransacao = inputTipoTransacao.value;
    let valor = inputValor.value;
    let data = inputData.value;

    if(tipoTransacao === "deposito"){
      saldo += valor;
    } else if( "Transferência" || tipoTransacao === "Pagamento de Boleto"){
      saldo -= valor;
    } else {
      alert("Tipo de transação inválido!");
      return
    }

    elementoSaldo.textContent = saldo;

    const novaTransacao = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data
    }

    console.log(novaTransacao);
    elementoFormulario.reset();
});

