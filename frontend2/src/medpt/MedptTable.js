import React from 'react'
import { withStyles,makeStyles } from '@material-ui/styles';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
  } from "@material-ui/core";

const StyledTableCell = withStyles(theme => ({
    head:{
        backgroundColor: 'black', 
        color: 'white',
    },
    body:{
        fontSize: 14,
    },

}))(TableCell);

const StyledTableRow = withStyles(theme=>({
    row: {
        '&:hover':{backgroundColor: 'rgba(33,150,243,0.5'}
    }
}))(TableRow);

// function createData(id, col1, col2, col3, col4, col5){
//     return{id, col1, col2, col3, col4, col5};
// }
function createData(id,city,district,medptName,address,phMedpt,opHrWeek,opHrSat,
    opHrSunEtc,bogunso,phBogunso,notes){
    return{id,city,district,medptName,address,phMedpt,opHrWeek,opHrSat,
        opHrSunEtc,bogunso,phBogunso,notes};
}

const rows = [
    createData(1, '서울','강남구','강남구보건소','삼성2동 8','0000','0000','0000','0000','0000','0000','sunday X'),
    createData(254, '경기', '안성시', '경기도의료원 안성병원', '경기도 안성시 남파로 95 (당월동)', '0830~1730', '미운영', '미운영',  '031-8046-5000', '안성시보건소', '031-678-5724', '--'),
    createData(1, '서울','강남구','강남구보건소','삼성2동 8','0000','0000','0000','0000','0000','0000','sunday X'),
    createData(254, '경기', '안성시', '경기도의료원 안성병원', '경기도 안성시 남파로 95 (당월동)', '0830~1730', '미운영', '미운영',  '031-8046-5000', '안성시보건소', '031-678-5724', '--'),
    createData(1, '서울','강남구','강남구보건소','삼성2동 8','0000','0000','0000','0000','0000','0000','sunday X'),
    createData(254, '경기', '안성시', '경기도의료원 안성병원', '경기도 안성시 남파로 95 (당월동)', '0830~1730', '미운영', '미운영',  '031-8046-5000', '안성시보건소', '031-678-5724', '--'),
    createData(1, '서울','강남구','강남구보건소','삼성2동 8','0000','0000','0000','0000','0000','0000','sunday X'),
    createData(254, '경기', '안성시', '경기도의료원 안성병원', '경기도 안성시 남파로 95 (당월동)', '0830~1730', '미운영', '미운영',  '031-8046-5000', '안성시보건소', '031-678-5724', '--'),
    createData(1, '서울','강남구','강남구보건소','삼성2동 8','0000','0000','0000','0000','0000','0000','sunday X'),
    createData(254, '경기', '안성시', '경기도의료원 안성병원', '경기도 안성시 남파로 95 (당월동)', '0830~1730', '미운영', '미운영',  '031-8046-5000', '안성시보건소', '031-678-5724', '--'),
    createData(1, '서울','강남구','강남구보건소','삼성2동 8','0000','0000','0000','0000','0000','0000','sunday X'),
    createData(254, '경기', '안성시', '경기도의료원 안성병원', '경기도 안성시 남파로 95 (당월동)', '0830~1730', '미운영', '미운영',  '031-8046-5000', '안성시보건소', '031-678-5724', '--'),
];
//   { id: 1, city: '서울', district: '강남구', medptName: '강남구보건소', address: '삼성2동 8', opHrWeek: '0000', opHrSat: '0000', opHrSunEtc: '0000', phMedpt: '0000', bogunso: '0000', phBogunso: '0000', notes:'not open on sundays'},
//   { id: 254, city: '경기', district: '안성시', medptName: '경기도의료원 안성병원', address: '경기도 안성시 남파로 95 (당월동)', opHrWeek: '0830~1730', opHrSat: '미운영', opHrSunEtc: '미운영', phMedpt: '031-8046-5000', bogunso: '안성시보건소', phBogunso: '031-678-5724', notes:'--'},

const useStyles = makeStyles({
    table:{
        minWidth:700,
    },
});


export default function MedptTable(){
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell onclick="sortColumn('id')">연변/ medpt_id</StyledTableCell>
                        <StyledTableCell onclick="sortColumn('city')">시도/ medpt_city</StyledTableCell>
                        <StyledTableCell>동읍면리/ <code>medpt_district</code></StyledTableCell>
                        <StyledTableCell>기관명/ <code>medpt_name</code></StyledTableCell>
                        <StyledTableCell>상세 주소/ <code>medpt_address</code></StyledTableCell>
                        <StyledTableCell>전화 번호/ <code>medpt_phone</code></StyledTableCell>
                        <StyledTableCell>주중 운영시간/ <code>medpt_hr_wkday</code></StyledTableCell>
                        <StyledTableCell>토 운영시간<code>medpt_hr_sat</code></StyledTableCell>
                        <StyledTableCell>일`공휴일 운영시간<code>medpt_hr_holiday</code></StyledTableCell>
                        <StyledTableCell>관할보건소<code>medpt_gov</code></StyledTableCell>
                        <StyledTableCell>관보 연락처<code>medpt_gov_phone</code></StyledTableCell>
                        <StyledTableCell>note/ <code>medpt_note</code></StyledTableCell>
                        {/* onclick sto sortCol by values */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component ="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.city}</StyledTableCell>
                            <StyledTableCell align="center">{row.district}</StyledTableCell>
                            <StyledTableCell align="center">{row.medptName}</StyledTableCell>
                            <StyledTableCell align="center">{row.address}</StyledTableCell>
                            <StyledTableCell align="center">{row.phMedpt}</StyledTableCell>
                            <StyledTableCell align="center">{row.opHrWeek}</StyledTableCell>
                            <StyledTableCell align="center">{row.opHrSat}</StyledTableCell>
                            <StyledTableCell align="center">{row.opHrSunEtc}</StyledTableCell>
                            <StyledTableCell align="center">{row.bogunso}</StyledTableCell>
                            <StyledTableCell align="center">{row.phBogunso}</StyledTableCell>
                            <StyledTableCell align="center">{row.notes}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

