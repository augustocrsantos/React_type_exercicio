import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import interfaceCep from './InterfaceCep';


 function App() {
  let Icep: interfaceCep = {}
  let mensagemErro =  ''
  const[valorcep, setcep] = useState(Icep);
  const[erro , seterro] = useState(mensagemErro);

 // eslint-disable-next-line 
 const urlParams = new URLSearchParams(window.location.href);

const url:string = window.location.href;
let cep:string =  url.split('cep=')[1];


if(cep != null || cep != ""){
let buscaCep:string = 'viacep.com.br/ws/01001000/json/'

const teste =
axios.get('https://viacep.com.br/ws/'+cep+'/json/')
  .then(function (response) {
    setcep({
      retornacep : "CEP: "+response.data.cep,
      bairro: "Bairro: "+response.data.bairro,
      complemento : "Complemento: "+response.data.complemento,
      localidade : "Localidade: "+response.data.localidade,
      logradouro : "Logradouro: "+response.data.logradouro,
      uf : "UF: "+response.data.localidade,
    })
     
    //console.log(response.data.cep);
  })
  .catch(function (error) {
    // handle error
    seterro(error);
  })
  .finally(function () {
    // always executed
  });
}

console.log(url.split('cep=')[1])
  return (
    <div className="App">
      <h1></h1>
      <h2>{erro}</h2>
      <p>{valorcep.retornacep}</p>      
      <p>{valorcep.complemento}</p>     
      <p>{valorcep.localidade}</p>     
      <p>{valorcep.logradouro}</p>
      <p>{valorcep.uf}</p><br></br>
    </div>
  );
}

export default App;
