import { useEffect, useState } from 'react';
import './App.css'
import DataTable from 'react-data-table-component';
import Loading from './Loading';

function App() {

  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setCargando(false)
    }, 2000)
  }, [])

  const columns = [
    {
      name: 'Nombre',
      selector: row => row.title,
      sortable: true,
    },
    {
      name: 'Puntuación',
      selector: row => row.year,
      sortable: true,
    },
    {
      name: 'Duración',
      selector: row => row.duracion,
      sortable: true,
    },
    {
      name: 'Fecha',
      selector: row => row.fecha,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
      duracion: '1h 32m',
      fecha: '30/10/1988',
    },
    {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 3,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 4,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 5,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 6,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 7,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 8,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 9,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 10,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 11,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
    {
      id: 12,
      title: 'Ghostbusters',
      year: '1984',
      duracion: '1h 47m',
      fecha: '08/06/1984',
    },
  ]

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
        />
      </div>
    </>
  )
}

export default App
