import { useEffect, useState } from 'react';
import './App.css'
import { PiRankingDuotone } from "react-icons/pi";
import { ImStatsDots } from "react-icons/im";
import Ranking from './componentes/Ranking';
import Stats from './componentes/Stats';

function App() {

  const [cargando, setCargando] = useState(true)
  const [viendoRanking, setViendoRanking] = useState(true)

  const [data, setData] = useState([])

  useEffect(() => {
    const url = "https://express1466013124.azurewebsites.net/resultados"

    fetch(url, { method: 'GET' })
      .then(response => response.json())
      .then(results => {

        // añadir campo id secuencial a cada fila de resultado
        let id = 1
        results.forEach(row => {
          row.id = id
          id++
        })
        // ordenar por puntuación
        results.sort((a, b) => b.puntuacion - a.puntuacion);

        setData(results)
        setCargando(false)
      })

  }, [])

  const verRanking = (e) => {
    setViendoRanking(true)
    document.getElementById('boton-ranking').classList.add('seleccionado')
    document.getElementById('boton-stats').classList.remove('seleccionado')
  }

  const verStats = (e) => {
    setViendoRanking(false)
    document.getElementById('boton-ranking').classList.remove('seleccionado')
    document.getElementById('boton-stats').classList.add('seleccionado')
  }

  return (
    <>
      <div className='app'>
        <div className='menu'>
          <button id='boton-ranking' className='boton seleccionado' onClick={verRanking}><PiRankingDuotone size={32} /></button>
          <button id='boton-stats' className='boton' onClick={verStats}><ImStatsDots size={24} /></button>
        </div>
        {
          viendoRanking ?
            <Ranking data={data} cargando={cargando} />
            :
            <Stats data={data} />
        }
      </div>
    </>
  )
}

export default App
