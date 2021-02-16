import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




export default function RepoContributors(props){
function createData(contributor, contributions) {
  return { contributor, contributions};
}

const rows = props.data.map(contributor=>{
  return createData(contributor.login, contributor.contributions)
})



function BasicTable() {

  return (
    <TableContainer >
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Contributor</TableCell>
            <TableCell align="right">Contributions</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.contributor}>
              <TableCell component="th" scope="row">
                {row.contributor}
              </TableCell>
              <TableCell align="right">{row.contributions}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


  
  return(
    <div>
      <BasicTable></BasicTable>
    </div>
  
  )
}