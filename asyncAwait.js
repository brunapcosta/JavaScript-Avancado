const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value;
    const realValueText = document.getElementById('real-value-text');
    const currencyValueText = document.getElementById('currency-value-text');

const data = await fetch("link da API").then(Response => Response.json())

const dolar = data.USDBRL.high
const euro = data.EURBRL.high
}

// inserir no codigo do convert money
