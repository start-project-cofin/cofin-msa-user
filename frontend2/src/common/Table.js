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
                        <StyledTableCell>연변/ <code>medpt_id</code></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row)=>(
                        <StyledTableRow key={row.id}>
                            <StyledTableCell component ="th" scope="row">
                                {row.id}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.city}</StyledTableCell>
                            
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

