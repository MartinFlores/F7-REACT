import React, { useState } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import * as HI from '@hugeicons/core-free-icons';
import { Page, Navbar, BlockTitle, Block, List, ListItem, Button, Icon } from 'framework7-react';

import F7Table from '../components/F7Table';

const columns = [
  { label: 'Name', key: 'name', width: 180 },
  { label: 'Role', key: 'role', width: 180 },
  { label: 'Status', key: 'status', width: 180 },
];

const data = [
  { id: 1, name: 'Jane Fisher', role: 'Sr. Dev', status: 'Active' },
  { id: 2, name: 'Zoey Lang', role: 'Tech Lead', status: 'Paused' },
  { id: 3, name: 'William Howard', role: 'C.M.', status: 'Vacation' },
  { id: 4, name: 'Tony Reichert', role: 'CEO', status: 'Active' },
  { id: 5, name: 'Kristen Copper', role: 'S. Manager', status: 'Active' },
  { id: 6, name: 'Brian Kim', role: 'P. Manager', status: 'Active' },
  { id: 7, name: 'Michael Hunt', role: 'Designer', status: 'Paused' },
  { id: 8, name: 'Samantha Brooks', role: 'HR Manager', status: 'Active' },
];

export default function TestPage() {
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [statusFilter, setStatusFilter] = useState('all');

  // Filtrar por status
  const filteredData = statusFilter === 'all'
    ? data
    : data.filter(row => row.status === statusFilter);

  // Calcular datos paginados
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <Page name="test" className="page-test">
      <Navbar title="Vista de Prueba" backLink="Back" />
      <BlockTitle medium>Chequeo de Rutas</BlockTitle>
      <Block strong>
        <p>Esta vista sirve para verificar que la navegación funciona correctamente.</p>
        <p>Usa los enlaces de abajo para navegar y asegurarte de que el ruteo responde como esperas.</p>
      </Block>
      <List strong inset>
        <ListItem link="/" title="Volver al inicio" />
        <ListItem link="/about/" title="Ir a About" />
      </List>

      <BlockTitle medium>Tabla de ejemplo (F7Table)</BlockTitle>
      <F7Table
        columns={columns}
        data={paginatedData}
        selectedRows={selectedRows}
        onSelectRow={id =>
          setSelectedRows(selectedRows.includes(id)
            ? selectedRows.filter(rowId => rowId !== id)
            : [...selectedRows, id])
        }
        onSelectAll={() =>
          setSelectedRows(selectedRows.length === paginatedData.length ? [] : paginatedData.map(row => row.id))
        }
        onAddNew={() => alert('Add new')}
        onRowAction={id => alert(`Actions for row ${id}`)}
        renderCell={(row, key) => key === 'status'
          ? <span style={{
              color: row.status === 'Active' ? 'green' : row.status === 'Paused' ? 'red' : 'orange'
            }}>{row.status}</span>
          : row[key]
        }
        pagination={
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <Button small disabled={page === 1} onClick={() => setPage(page - 1)}><HugeiconsIcon icon={HI.ArrowLeft01Icon} size={18} /></Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
              <Button key={n} small color={n === page ? 'black' : 'default'} onClick={() => setPage(n)}>{n}</Button>
            ))}
            <Button small disabled={page === totalPages} onClick={() => setPage(page + 1)}><HugeiconsIcon icon={HI.ArrowRight01Icon} size={18} /></Button>
          </div>
        }
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={e => { setRowsPerPage(Number(e.target.value)); setPage(1); }}
        onStatusFilter={value => { setStatusFilter(value); setPage(1); }}
        statusFilter={statusFilter}
      />
    </Page>
    );
}