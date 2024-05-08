import { useEffect, useState } from "react";
import Loading from "./Loading";
import { crearPieChart } from "../crearGraficas";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);


function Stats({ data, cargando }) {

  // estado para guardar el jugador y tablero con más partidas
  const [jugadorMaxPartidas, setJugadorMaxPartidas] = useState('?')
  const [tableroMaxPartidas, setTableroMaxPartidas] = useState('?')

  const encontrarJugadorMaxPartidas = (data) => {
    let jugadores = {}

    // Registrar todos los jugadores de los que haya registros
    data.forEach(row => {
      if (jugadores[row.nombre] == undefined) {
        jugadores[row.nombre] = 1
      } else {
        jugadores[row.nombre]++
      }
    })

    // Encontrar el jugador y tablero con más partidas
    let maxPartidas = 0
    let maxJugador = ''
    for (const jugador in jugadores) {
      if (jugadores[jugador] > maxPartidas) {
        maxPartidas = jugadores[jugador]
        maxJugador = jugador
      }
    }

    return { maxJugador, jugadores }
  }

  const encontrarTableroMaxPartidas = (data) => {
    let tableros = {}

    // Registrar todos los tableros de los que haya registros
    data.forEach(row => {
      if (tableros[row.tablero] == undefined) {
        tableros[row.tablero] = 1
      } else {
        tableros[row.tablero]++
      }
    })

    // Encontrar el jugador y tablero con más partidas
    let maxPartidas = 0
    let maxTablero = ''
    for (const tablero in tableros) {
      if (tableros[tablero] > maxPartidas) {
        maxPartidas = tableros[tablero]
        maxTablero = tablero
      }
    }

    return { maxTablero, tableros }

  }

  useEffect(() => {
    if (!cargando && data != []) {

      let { maxJugador, jugadores } = encontrarJugadorMaxPartidas(data)
      let { maxTablero, tableros } = encontrarTableroMaxPartidas(data)

      crearPieChart(Object.values(jugadores), Object.keys(jugadores), 'Jugadores', 'pieChartJugadores')
      crearPieChart(Object.values(tableros), Object.keys(tableros), 'Tableros', 'pieChartTableros')

      setJugadorMaxPartidas(maxJugador)

      setTableroMaxPartidas(maxTablero)

    }
  }, [cargando])

  return (
    <>
      <h1>Estadísticas</h1>

      {
        cargando ?
          <div className="cargando">
            <Loading />
          </div>
          :
          <>
            <div className="stats-1">
              <p>Jugador con más partidas: <span className="dato">{jugadorMaxPartidas}</span></p>
              <p>Tablero con más partidas: <span className="dato">{tableroMaxPartidas}</span></p>
            </div>
            <div className="graficas">
              <canvas id="pieChartJugadores"></canvas>
              <canvas id="pieChartTableros"></canvas>
            </div>
          </>
      }
    </>
  );
}

export default Stats;