import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import Cabecalho from "./Cabecalho";
import Links from "./Links";
import Conteudo from "./Conteudo";
import Rodape from "./Rodape";

function App() {
  const [titulo, dados] = useState([
    // Cabecalho: "Este cabeçalho vem do State",
    //conteudo: "ESte conteúdo vem do State",
    {
      id: 1,
      nome: "Paulo",
      email: "paulo@terra.com.br",
      idade: "30",
    },
    {
      id: 2,
      nome: " Catia",
      email: "catia@terra.com.br",
      idade: "20",
    },
    {
      id: 3,
      nome: "Sandra",
      email: "sandra@terra.com.br",
      idade: "20",
    },

    {
      id: 4,
      nome: "Amanda",
      email: "anda@terra.com.br",
      idade: "18",
    },
  ]);
  return (
    <div className="App">
      <Header />
      <Cabecalho />
      <h1>{titulo.Cabecalho}</h1>
      <Links />

      <p>
        <table>
          {titulo.map((info) => (
            <tr>
              <td>{info.id} </td>
              <td>{info.nome} </td>
              <td>{info.email} </td>
              <td>{info.idade}</td>
            </tr>
          ))}
        </table>
      </p>
      <Conteudo />
      <p>{titulo.conteudo}</p>
      <Rodape />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1> Esse é o compone de Cabeçalho</h1>
    </div>
  );
}

export default App;
