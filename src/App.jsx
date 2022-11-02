import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './index.css'
import { useEffect } from 'react'
import img from './assets/img/copo.jpg'


function App() {
  const [copo, setCopo] = useState(0)
  const [ml, setMl] = useState(0)
  const [operacao, setOperacao] =  useState(0)
  const [resultado, setResultado] = useState(0)
  const [mensagem1, setMensagem1] = useState ("")
  const [mensagem2, setMensagem2] = useState ("")
  const [historico, setHistorico] = useState ("")
  const date = new Date().toLocaleString()
 
  const calcular = () => {
    return parseFloat(copo) * parseFloat(ml)
 }

 const retorno = (e) => {
  setResultado (e);
 
const cumprimento = () => {
  const hora = 14
  if (hora >= 0 && hora < 13){
    return <p>Parabens</p>
  } else if (hora >= 13 && hora < 18) {
    return <p>Ops!!</p>
  }

}
 }
 function hist () {
    setHistorico(historico + date) 
  }

  useEffect(() => {
    setResultado(calcular())
  },
  [copo, ml, operacao])

 return (
  
      <div className="App">
      
      <h1>Contador de Copos de Água</h1>
      
    <label> Quantos copos foram consumidos?</label>
    <br></br>
        <input type="number"
        valor = {copo}
        onChange ={(e) => setCopo(e.target.value)} /><br></br>

    <label> "Quantidade de ml por copo?" </label>
    <br></br>
       <input type='number'
       valor = {ml}
       onChange ={(e) => setMl(e.target.value)} />

    <br></br><br></br>

<button> Resultado: {resultado}</button><br></br>
<br></br>

<h3>Saiba se atingiu sua meta diária!</h3>
<button> Digite a quantidade consumida: {<input></input>}</button><br></br>
<br></br>
<button><img src={img}></img></button><br></br>
<br></br>


<button onClick={() => setResultado ((resultado) => resultado == 0)}>
      zerar contador
  </button>
  <br></br>
  <br></br>
<h2>{hist}</h2>
 
 </div>
  )

}

export default App

{cumprimento()}
