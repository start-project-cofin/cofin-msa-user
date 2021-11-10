// import * as React from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: '연변', width: 60 },
//   {
//     field: 'city',
//     headerName: '시도',
//     width: 80,
//     editable: true,
//   },
//   {
//     field: 'district', 
//     headerName: '시군구',
//     width: 80,
//     editable: true,
//   },
//   {
//     field: 'medptName',
//     headerName: '의료기관명',    
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'address',
//     headerName: '주소',
//     width: 370,
//     // valueGetter: (params) =>
//     //   `${params.getValue(params.id, 'firstName') || ''} ${
//     //     params.getValue(params.id, 'lastName') || ''
//     //   }`,
//   },
//   {
//     field: 'opHrWeek',
//     headerName: '평일 운영시간',    
//     width: 120,
//   },{
//     field: 'opHrSat',
//     headerName: '토 운영시간',    
//     width: 130,
//   },{
//     field: 'opHrSunEtc',
//     headerName: '일*공휴일 운영시간',    
//     width: 150,
//   },{
//     field: 'phMedpt',
//     headerName: '전화번호',    
//     width: 100,
//   },{
//     field: 'bogunso',
//     headerName: '관할보건소',    
//     width: 100,
//   },
//   {
//     field: 'phBogunso',
//     headerName: '관보 전화번호',    
//     width: 120,
//   },
//   {
//     field: 'notes',
//     headerName: '비고',    
//     width: 120,
//   },
// ];

// const rows = [
//   { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
//   // { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   // { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},
  
// ];

// export default function MedptMod() {
//   return (
//     <div style={{ height: '100%', width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         // pageSize={5}
//         pageSize={10}
//         rowsPerPageOptions={[8]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }
