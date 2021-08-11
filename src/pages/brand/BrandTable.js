import { React, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { fetchBrands } from './thunks';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import TableContainer from '@material-ui/core/TableContainer';
import BrandEditExcludeEnable from './BrandEditExcludeEnable';


function BrandTable (props) {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    setLoad(true);
  }, [])

  useEffect(() => {
    props.brandLoad();
    setLoad(false);
  }, [])

  return (
    <TableContainer style={{ minHeight: '80%' }}>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell align='center'> Nome </TableCell>
            <TableCell align='center'> CNPJ </TableCell>
            <TableCell align='center'> Email </TableCell>
            <TableCell align='center'>  </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {load ? <CircularProgress style={{ position:'relative', left: '75vh', top:'15vh' }}/> : 
        props.brands.filter((val) => {
          if (props.searchTerm === '')
            return val
          else if (val.nome.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                   val.cnpj.toLowerCase().includes(props.searchTerm.toLowerCase()) || 
                   val.email.toLowerCase().includes(props.searchTerm.toLowerCase()))
            return val
        }).map(row => 
        <TableRow id={row.id} key={row.id}>
          <TableCell align='center'> {row.nome} </TableCell>
          <TableCell align='center'> {row.cnpj} </TableCell>
          <TableCell align='center'> {row.email} </TableCell>
          <TableCell align='center'>  <BrandEditExcludeEnable status={row.status} idRetail={row.id} emailVarejo={row.email}
          {...props} nomeFantasia={row.nome_fantasia}/></TableCell>
        </TableRow>
        )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = state => ({
  brands: state.brands,
})

const mapDispatchToProps = dispatch => ({
  brandLoad: () => dispatch(fetchBrands()),
})

export default connect(mapStateToProps, mapDispatchToProps)(BrandTable);