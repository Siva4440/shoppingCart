
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid,  TextField, Typography } from "@mui/material";
import { updatePassword, updateUserName ,updateUserDetails } from "../../Redux/loginSlice";
import loginService  from "../../Services/loginAPI";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data= useSelector(state=> state.login)

  const onLoginClick = ()=>{
    loginService(data).then(res=>{
     console.log("res",res)
     dispatch(updateUserDetails(res?.data)) 
     if(res.data !== false){
      navigate("/products  ")
     }
       
    })
  }

  return (
    <div className="container">
      <Box
        sx={{
          width: 500,
          height: 250,
          borderRadius: "8px",
          border: "2px solid grey",
          marginTop: "8%",
          marginLeft: "30%",
          padding:'20px'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Typography variant="h5" gutterBottom align="center">
        Login
      </Typography>
          </Grid>
          <Grid item xs={12}>
          <TextField  label="Email"  variant="outlined" size="small" fullWidth onChange={e=> dispatch(updateUserName(e.target.value))} />
          </Grid>
          <Grid item xs={12}>
          <TextField  label="password" type="password" variant="outlined" size="small" fullWidth onChange={e=> dispatch(updatePassword(e.target.value))} />
          </Grid>
          <Grid item xs={6}>
          <Button variant="outlined" fullWidth onClick={()=>navigate('/registration')}>Create Account</Button>
          </Grid>
          <Grid item xs={6}>
          <Button variant="contained" fullWidth onClick={onLoginClick} >Login</Button>
          </Grid>
          
        </Grid>
      </Box>
     
    </div>
  );
}