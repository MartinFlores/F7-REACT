import React from 'react';
import DropdownMenu from './DropdownMenu';
import { HugeiconsIcon } from '@hugeicons/react';
import * as HI from '@hugeicons/core-free-icons';
import { Block, List, ListItem, Button } from 'framework7-react';

const F7Table = ({
  columns,
  data,
  onSearch,
  onAddNew,
  onRowAction,
  pagination,
  selectedRows,
  onSelectRow,
  onSelectAll,
  renderCell,
  rowsPerPage,
  onRowsPerPageChange,
  onStatusFilter,
  statusFilter,
}) => {
  return (
    <div
      className="f7-table-wrapper"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '60vh',
        background: '#f5f6fa',
        padding: 32,
      }}
    >
      <Block
        className="f7-table"
        style={{
          background: '#fff',
          borderRadius: 15,
          boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
          padding: 24,
          minWidth: 700,
          maxWidth: 900,
          margin: '0 auto',
        }}
      >
        {/* Header: Search, Filters, Add New */}
        <div className="f7-table-header" style={{ display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
          <input
            type="search"
            placeholder="Search by name..."
            onChange={onSearch}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '8px 16px',
              outline: 'none',
              minWidth: 220,
            }}
          />
          {/* Filtros personalizados */}
          <select
            style={{
              borderRadius: 8,
              padding: '6px 12px',
              border: '1px solid #bbb',
              background: '#fff',
              color: '#222',
              fontSize: 15,
              boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
            }}
            value={statusFilter}
            onChange={e => onStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="Active">Active</option>
            <option value="Paused">Paused</option>
            <option value="Vacation">Vacation</option>
          </select>
          <Button fill color="black" style={{ borderRadius: 8, padding: '0 18px', display: 'flex', alignItems: 'center', gap: 8 }} onClick={onAddNew}>
            <HugeiconsIcon icon={HI.PlusSignIcon} size={20} primaryColor="#fff" /> Add New
          </Button>
          <div style={{ marginLeft: 'auto', color: '#888', fontSize: 14 }}>
            Rows per page:
            <select
              style={{ borderRadius: 8, padding: '4px 8px', border: '1px solid #ddd', marginLeft: 4 }}
              value={rowsPerPage}
              onChange={onRowsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="f7-table-list" style={{ marginTop: 8 }}>
          <List>
            <ListItem
              key="header"
              title={
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <input
                    type="checkbox"
                    checked={selectedRows.length === data.length}
                    onChange={onSelectAll}
                  />
                  {columns.map(col => (
                    <span
                      key={col.key}
                      style={{
                        minWidth: col.width || 120,
                        maxWidth: col.width || 180,
                        display: 'inline-block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {col.label}
                    </span>
                  ))}
                  <span>Actions</span>
                </div>
              }
            />
            {data.map(row => (
              <ListItem
                key={row.id}
                title={
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <input
                      type="checkbox"
                      checked={selectedRows.includes(row.id)}
                      onChange={() => onSelectRow(row.id)}
                    />
                    {columns.map(col => (
                      <span
                        key={col.key}
                        style={{
                          minWidth: col.width || 120,
                          maxWidth: col.width || 180,
                          display: 'inline-block',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {renderCell ? renderCell(row, col.key) : row[col.key]}
                      </span>
                    ))}
                  </div>
                }
                after={
                  <DropdownMenu
                    options={[
                      { key: 'view', label: 'Ver', icon: HI.Home09Icon, description: 'Ver detalles' },
                      { key: 'edit', label: 'Editar', icon: HI.EditIcon, description: 'Editar fila' },
                      { key: 'delete', label: 'Eliminar', icon: HI.Delete02Icon, description: 'Eliminar fila' },
                    ]}
                    onSelect={actionKey => onRowAction(row.id, actionKey)}
                  />
                }
              />
            ))}
          </List>
        </div>

        {/* Pagination */}
        <div
          className="f7-table-pagination"
          style={{
            marginTop: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ color: '#888', fontSize: 14 }}>
            {selectedRows.length} of {data.length} selected
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, minWidth: 220 }}>
            {pagination}
          </div>
        </div>
      </Block>
    </div>
  );
};

export default F7Table;
