function post(){
    fetch("http://localhost:3000/historico", {
      method: "POST",
      headers: {
          "Content-type": "application/json",
      },
      body: JSON.stringify({
      "resultado" : document.querySelector('#result').value
      })
  }).then((res)=>{
    const historico = document.querySelector("#historico")
    historico.innerHTML = ""
      fetch('http://localhost:3000/calc').then((resposta)=>{
          resposta.json().then((data)=>{
            console.log(data)
              data.map((item)=>{
                  const div = document.createElement('div')
                  div.innerText = item
                  historico.appendChild(div)
              })
          })
      })
  })
  }

let resultValue = '';

function appendToResult(value) {
  resultValue += value;
  document.getElementById('result').value = resultValue;
}

function clearResult() {
  resultValue = '';
  document.getElementById('result').value = resultValue;
}

function setOperator(op) {
    if (operand1 === '') {
        operand1 = document.getElementById('input').value;
        operator = op;
        document.getElementById('input').value = '';
    }
}

function calcular() {
  try {
    resultValue = eval(resultValue).toString();
    document.getElementById('result').value = resultValue;
    post()
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}