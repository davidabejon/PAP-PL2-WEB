import { useEffect, useState } from "react";

function Stats({ data }) {

  const [jugadorMaxPartidas, setJugadorMaxPartidas] = useState('David')
  const [tableroMaxPartidas, setTableroMaxPartidas] = useState('10x15')

  useEffect(() => {
    
  }, [])

  return (
    <>
      <h1>Estadísticas</h1>

      <div className="stats-1">
        <p>Jugador con más partidas: <span className="dato">{jugadorMaxPartidas}</span></p>
        <p>Tablero con más partidas: <span className="dato">{tableroMaxPartidas}</span></p>
      </div>
    </>
  );
}

export default Stats;