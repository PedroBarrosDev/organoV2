import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278',
    },
    {
      nome: 'Front-End',
      cor: '#82cffa',
    },
    {
      nome: 'Data Science',
      cor: '#a6d157',
    },
    {
      nome: 'Devops',
      cor: '#e06b69',
    },
    {
      nome: 'UX e Design',
      cor: '#d86ebf',
    },
    {
      nome: 'Mobile',
      cor: '#ffba05',
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#ff8a29',
    }
  ]);

const inicial = [
  {
    nome: 'Pedro Barros',
    cargo: 'Dono',
    imagem: 'https://github.com/PedroBarrosDev.png',
    time: times[0].nome
  },
  {
    nome: 'Pedro Barros',
    cargo: 'Dono',
    imagem: 'https://github.com/PedroBarrosDev.png',
    time: times[1].nome
  },
  {
    nome: 'Pedro Castro',
    cargo: 'Chefe',
    imagem: 'https://github.com/pedrocastrovs.png',
    time: times[0].nome
  }
]

  const [colaboradores, setColaboradores] = useState(inicial)

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {

  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <Rodape />
      {times.map(time => 
      <Time 
        mudarCor={mudarCorDoTime}
        key={time.nome} 
        nome={time.nome} 
        cor={time.cor} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}
      />
      )}
    </div>
  );
}

export default App;
