import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import {
  updatePassword,
  updateUserName,
  updateUserDetails,
} from "../../Redux/loginSlice";
import loginService from "../../Services/loginAPI";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);

  const [validationMsg,setValidationMsg]= useState({userNameMSg:"", passwordMsg:""})

  const onLoginClick = () => {

      if(validateForm()){
        loginService(data).then((res) => {
          dispatch(updateUserDetails(res?.data));
          { res.data && 
            navigate("/products");
          }
        });
      }
  };
  
  const validateForm=()=>{
    let isValid = true;
    const {userName,password}= data;
    const validations={};

    if(!userName){
      validations.userNameMSg="User Name is Mandatory";
      isValid=false
    }
    if(!password){
      validations.passwordMsg="Password is mandatory"
      isValid=false
    }

    setValidationMsg(validations)
    return isValid;
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
          padding: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom align="center">
              Login
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => dispatch(updateUserName(e.target.value))}
              error={Boolean(validationMsg.userNameMSg)}
              helperText={validationMsg.userNameMSg}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="password"
              type="password"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => dispatch(updatePassword(e.target.value))}
              error={Boolean(validationMsg.passwordMsg)}
              helperText={validationMsg.passwordMsg}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={() => navigate("/registration")}
            >
              Create Account
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" onClick={onLoginClick} fullWidth >
              Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
