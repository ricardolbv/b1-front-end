import { React, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { fetchRetails } from './thunks';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    padding: '15px'
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('x', 1, 'Adidas', 'Marca', 'adidas@gmail.com'),
  createData('x', 2, 'Nike','Marca', 'nike@gmail.com'),
  createData('x', 3, 'Test1', 'Test', 'test@gmail.com'),
  createData('x', 4, 'Test2', 'Test', 'test@gmail.com'),
  createData('x', 5, 'Test3', 'Test', 'test@gmail.com'),
];

function RetailTable ({ retails, retailLoad}) {
  const classes = useStyles();
  useEffect(() => {
    retailLoad();
  }, [])

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center"> x</TableCell>
            <TableCell align="center">Código</TableCell>
            <TableCell align="center">Nome Fantasia</TableCell>
            <TableCell align="center">Segmento</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {retails.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="center" component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.cnpj}</TableCell>
              <TableCell align="center">{row.nome_fantasia}</TableCell>
              <TableCell align="center">{row.razao_social}</TableCell>
              <TableCell align="center">{row.telefone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const mapStateToProps = state => ({
  retails: state.retails,
})

const mapDispatchToProps = dispatch => ({
  retailLoad: () => dispatch(fetchRetails()),
})

export default connect(mapStateToProps, mapDispatchToProps)(RetailTable);