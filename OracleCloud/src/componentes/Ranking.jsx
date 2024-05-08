import DataTable from 'react-data-table-component';
import Loading from './Loading';

function Ranking({ data, cargando }) {
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
    </>
  );
}

export default Ranking;