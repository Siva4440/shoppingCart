import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';  
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import TableFooter from '@mui/material/TableFooter';



export default function Cart() {
  const {products}= useSelector(state=>state.cart);
  let price=null;
  products.forEach(product=>{
    price+= product.price
  })


  return (
    <TableContainer component={Paper} sx={{justifyContent:'center',display:'flex'}}>
      <Table sx={{width:'500px'}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Image</TableCell>
            <TableCell align="right">Title</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.thumbnail} width="200px" height="100px"></img>
              </TableCell>
              <TableCell align="right">{row.title}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
            </TableRow>
          ))}          
        </TableBody>
        <TableFooter>
         <TableRow >
         <TableCell > </TableCell>
         <TableCell>Total</TableCell>
         <TableCell align="right">{price}</TableCell>  
       </TableRow>
        </TableFooter>
        
      </Table>  
    </TableContainer>
    
  );
}