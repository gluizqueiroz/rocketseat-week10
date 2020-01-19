import React from 'react';
import Header from './Header';

/*
A junção da utilização de Javascript com HTML é o chamado JSX (Javascript + XML)
Os 3 conceitos mais importantes do react:
> Componente: 
  - O componente é uma função que retorna algum HTML (O function App() é um componente), não precisa ser necessariamente HTML, o componente pode retornar CSS e algum conteudo Javascript para questão de interface
  - O componente é um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
> Estado:
  - Informação que o componente vai manipular
> Propriedade: 
  - No HTML era chamado de atributos, por exemplo: <Header title="Dashboard" />
  - Informações que um componente PAI (Seria o App() e os filhos são os componentes que são renderizados dentro do pai) passa para o FILHO
*/

function App() {
  return (
    <>
      <Header title="Dashboard 1"/>
      <Header title="Dashboard 2"/>
      <Header title="Dashboard 2"/>
    </>
  );
}

export default App;
