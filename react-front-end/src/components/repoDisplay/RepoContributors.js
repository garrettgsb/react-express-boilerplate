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
let total = 0
const rows = props.data.map(contributor=>{
  total += contributor.contributions
  return createData(contributor.login, contributor.contributions)
})
rows.push(createData("Total", total))



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
    <div onClick={()=>props.back()}>
      <BasicTable></BasicTable>
    </div>
  
  )
}