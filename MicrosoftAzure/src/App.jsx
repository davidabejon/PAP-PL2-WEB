import { useEffect, useState } from 'react';
import './App.css'
import DataTable from 'react-data-table-component';
import Loading from './Loading';

function App() {

  const [cargando, setCargando] = useState(true)

  const [data, setData] = useState([])

  useEffect(() => {
    const url = "http://express250525323.azurewebsites.net/resultados"

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

  const columns = [
    {
      name: 'Nombre',
      selector: row => row.nombre,
      sortable: true,
    },
    {
      name: 'Puntuación',
      selector: row => row.puntuacion,
      sortable: true,
    },
    {
      name: 'Tablero',
      selector: row => row.tablero,
      sortable: true,
    },
    {
      name: 'Duración',
      selector: row => row.duracion,
      sortable: true,
    },
    {
      name: 'Fecha',
      selector: row => row.fecha.substring(0, 10),
      sortable: true,
    },
  ];

  const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    noRowsPerPage: true,
  };

  return (
    <>
      <div className='app'>
        <h1>Tabla de clasificación</h1>
        <DataTable
          columns={columns}
          data={data}
          progressPending={cargando}
          progressComponent={<Loading />}
          pagination
          paginationComponentOptions={paginationComponentOptions}
          paginationPerPage={8}
          noDataComponent="No hay ningún registro, ¡sé el primero en añadir uno!"
        />
      </div>
    </>
  )
}

export default App
