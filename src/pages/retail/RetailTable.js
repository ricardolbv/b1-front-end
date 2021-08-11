import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchRetails } from './thunks';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableContainer from '@material-ui/core/TableContainer';
import RetailPagination from './RetailPagination'
import RetailEditAndExcludeEnable from './RetailEditExcludeEnable';


function RetailTable (props) {
  const [load, setLoad] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, setRef] = useState();
  const [acc, setAcc] = useState(0);
  const [_retails, setRetail] = useState(props.retails)

  const handleChange = (event, value) => {
    if (page > value){
      setRetail(props.retails)
      setAcc(ref);
      setRef(ref+10);
      setRetail(props.retails.filter((item, index) => {
        return ((index >= acc) && (index <ref))
      }))
    }
    else if (page < value){
      setRetail(props.retails)
      setAcc(ref);
      setRef(ref-10);
      setRetail(props.retails.filter((item, index) => {
        return ((index >= acc) && (index <ref))
      }))
    }
    setPage(value);
  };

  useEffect(() => {
    setLoad(true);
  }, [])

  useEffect(() => {
    props.retailLoad();
    setLoad(false);
  }, [])

  return (
    <TableContainer style={{ minHeight: '80%' }}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center'> Email </TableCell>
            <TableCell align='center'> CNPJ </TableCell>
            <TableCell align='center'> Nome Fantasia </TableCell>
            <TableCell align='center'> Razão social </TableCell>
            <TableCell align='center'> Telefone </TableCell>
            <TableCell align='center'>  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {load ? <CircularProgress style={{ position:'relative', left: '75vh', top:'15vh' }}/> : 
        props.retails.filter((val) => {
          if (props.searchTerm === '')
            return val
          else if (val.nome_fantasia.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                   val.razao_social.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                   val.email.toLowerCase().includes(props.searchTerm.toLowerCase()))
            return val
        }).map(row => 
        <TableRow id={row.id} key={row.id}>
          <TableCell align='center'> {row.email} </TableCell>
          <TableCell align='center'> {row.cnpj} </TableCell>
          <TableCell align='center'> {row.nome_fantasia} </TableCell>
          <TableCell align='center'> {row.razao_social} </TableCell>
          <TableCell align='center'> {row.telefone} </TableCell>
          <TableCell align='center'> <RetailEditAndExcludeEnable status={row.status} idRetail={row.id} email={row.email}
          {...props} nomeFantasia={row.nome_fantasia}/> </TableCell>
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