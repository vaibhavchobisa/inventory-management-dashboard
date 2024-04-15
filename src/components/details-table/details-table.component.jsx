import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './details-table.styles.scss';

const DetailsTable = ({ tableData }) => {
  return (
    <div className='details-table'>
      <TableContainer sx={{ overflow: 'scroll', backgroundColor: '#11262f', color: '#fff' }} component={Paper}>
        <Table sx={{ minWidth: 300 }} aria-label="simple table">
          <TableBody>
            {
              tableData?.map(row => (
                <TableRow
                  key={row?.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row?.name}
                  </TableCell>
                  {row?.data?.map((cell, i) => <TableCell key={i} align="right">{cell}</TableCell>)}
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default DetailsTable
