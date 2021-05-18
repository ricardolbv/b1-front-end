import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRetails } from './thunks';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Switch from '@material-ui/core/Switch';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableContainer from '@material-ui/core/TableContainer';

import RetailPagination from './RetailPagination'

const RetailEditAndExclude = () => {
  return ( <div>
          <Switch color='primary'/>
          <EditIcon style={{ position:'relative', top:'1vh'}}/>
          <DeleteIcon style={{ position:'relative', top:'1vh' }}/>
        </div>
        )
}


function RetailTable ({ retails, retailLoad}) {
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, setRef] = useState();
  const [acc, setAcc] = useState(0);
  const [_retails, setRetail] = useState(retails)

  const handleChange = (event, value) => {
    if (page > value){
      setRetail(retails)
      setAcc(ref);
      setRef(ref+10);
      setRetail(retails.filter((item, index) => {
        return ((index >= acc) && (index <ref))
      }))
    }
    else if (page < value){
      setRetail(retails)
      setAcc(ref);
      setRef(ref-10);
      setRetail(retails.filter((item, index) => {
        return ((index >= acc) && (index <ref))
      }))
    }
    setPage(value);
  };


  useEffect(() => {
    setLoad(true);
    retailLoad();
    setLoad(false);
  }, [retails])

  return (
    <TableContainer style={{ minHeight: '80%' }}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center'> ID </TableCell>
            <TableCell align='center'> CNPJ </TableCell>
            <TableCell align='center'> Nome Fantasia </TableCell>
            <TableCell align='center'> Razão social </TableCell>
            <TableCell align='center'> Telefone </TableCell>
            <TableCell align='center'>  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {load ? <CircularProgress style={{ position:'relative', left: '75vh', top:'15vh' }}/> : 
        retails.map(row => 
        <TableRow >
          <TableCell align='center'> {row.id} </TableCell>
          <TableCell align='center'> {row.cnpj} </TableCell>
          <TableCell align='center'> {row.nome_fantasia} </TableCell>
          <TableCell align='center'> {row.razao_social} </TableCell>
          <TableCell align='center'> {row.telefone} </TableCell>
          <TableCell align='center'> <RetailEditAndExclude /> </TableCell>
        </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
/*

*/
const mapStateToProps = state => ({
  retails: state.retails,
})

const mapDispatchToProps = dispatch => ({
  retailLoad: () => dispatch(fetchRetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RetailTable);