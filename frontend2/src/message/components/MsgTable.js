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
        backgroundColor: 'darkgrey', 
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
// csv: 연,월,일,시,분,수신지역, 내용  NOPE
// ERD: ++id, XX message_type(5), ++message_date, ++message_time(24H), message_city, message_district, 
    //+msg_tags? +description? +msg! +landmark?

function createData(id,date,time,city,district,msg){
    return{id,date,time,city,district,msg};
}

const rows = [
    createData(1,'2020-01-26','0909','서울시','중구','장충동 호텔 화재'),
    createData(23,'2020-02-26','1517','서울시','노원구','보건소 선별진료소 정상 운영'),
    createData(24,'2020-02-26','1629','서울시','강남구','확진자 공개 강남구 홈페이지'),
    createData(66,'2020-03-01','1821','서울시','관악구','관악구 청룡동 확진자 발생'),
    createData(619,'2020-04-24','2035','서울시','광진구','확진자 관내동선 조치완료'),
    createData(1695,'2020-08-07','1114','서울시','동작구','동작구 노량진1동 확진자 발생'),
    createData(3804,'2020-11-08','1853','서울시','용산구','용산구 확진자 발생'),
];

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
                        <StyledTableCell onclick="sortColumn('id')">ID/ <code>message_id</code></StyledTableCell>
                        <StyledTableCell onclick="sortColumn('date')">date/ <code>message_date</code></StyledTableCell>
                        <StyledTableCell>time/ <code>message_time</code></StyledTableCell>
                        <StyledTableCell>city/ <code>message_city</code></StyledTableCell>
                        <StyledTableCell>district/ <code>message_district</code></StyledTableCell>
                        <StyledTableCell>msg/ <code>message_</code></StyledTableCell>
                        {/* <StyledTableCell>tag/ <code>message_tag</code></StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component ="th" scope="row">{row.id}</StyledTableCell>
                            <StyledTableCell align="center">{row.date}</StyledTableCell>
                            <StyledTableCell align="center">{row.time}</StyledTableCell>
                            <StyledTableCell align="center">{row.city}</StyledTableCell>
                            <StyledTableCell align="center">{row.district}</StyledTableCell>
                            <StyledTableCell align="center">{row.msg}</StyledTableCell> 
                            {/* <StyledTableCell>tag/ <code>message_tag</code></StyledTableCell> */}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

