import React, { useState } from 'react';

/*
A junção da utilização de Javascript com HTML é o chamado JSX (Javascript + XML)
Os 3 conceitos mais importantes do react:
> Componente: 
  - O componente é uma função que retorna algum HTML (O function App() é um componente), não precisa ser necessariamente HTML, o componente pode retornar CSS e algum conteudo Javascript para questão de interface
  - O componente é um bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação
> Estado:
  - Informação que o componente vai manipular
  - Informações mantidas pelo componente (Lembrar: imutabilidade)
> Propriedade: 
  - No HTML era chamado de atributos, por exemplo: <Header title="Dashboard" />
  - Informações que um componente PAI (Seria o App() e os filhos são os componentes que são renderizados dentro do pai) passa para o FILHO
*/

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={incrementCounter}>Incrementar</button>
    </>
  );
}

export default App;
