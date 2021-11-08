import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '연변', width: 30 },
  {
    field: 'city',
    headerName: '시도',
    width: 80,
    editable: true,
  },
  {
    field: 'district',
    headerName: '시군구',
    width: 80,
    editable: true,
  },
  {
    field: 'medptName',
    headerName: '의료기관명',    
    width: 150,
    editable: true,
  },
  {
    field: 'address',
    headerName: '주소',
    width: 200,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
  {
    field: 'opHrWeek',
    headerName: '평일 운영시간',    
    width: 120,
  },{
    field: 'opHrSat',
    headerName: '토 운영시간',    
    width: 130,
  },{
    field: 'opHrSunEtc',
    headerName: '일*공휴일 운영시간',    
    width: 150,
  },{
    field: 'phMedpt',
    headerName: '전화번호',    
    width: 100,
  },{
    field: 'bogunso',
    headerName: '관할보건소',    
    width: 100,
  },
  {
    field: 'phBogunso',
    headerName: '관보 전화번호',    
    width: 120,
  },
  {
    field: 'notes',
    headerName: '비고',    
    width: 120,
  },
];

const rows = [
  { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
  
];

export default function MedptMod() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
