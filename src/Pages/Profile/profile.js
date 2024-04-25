import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { Box, Button, Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { updateProfile } from "../../Redux/loginSlice";
 



const Profile = () => {
    const dispatch = useDispatch();
    const [isEditMode, setIsEditMode]= useState(false)
    const data = useSelector(state=>state.login.userDetails)
    const {firstName,lastName,phone,email,gender,password} = data;

    const updateTextField=(e)=>{
      const {name,value}= e.target
      dispatch(updateProfile({[name]:value}))
      console.log("event", name,value)
    }

    
  return (
    <div>
      <Box
        sx={{
          width: 500,
          height: 300,
          border: '1px solid grey',
          padding: "20px",
          marginLeft:'30%',
          marginTop:'8%',
          borderRadius:'8px'
        }}
      >
        <Grid container  spacing={2}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom align="left" >
              profile
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="outlined" onClick={()=>setIsEditMode(true)}>Edit Profile</Button>
          </Grid>
          <Grid item xs={6}>
            <TextField  name="firstName" label="First Name" disabled={!isEditMode} defaultValue={firstName}  type="text" variant="outlined"fullWidth size="small" onChange={updateTextField} />
          </Grid>
          <Grid item xs={6}>
            <TextField name="lastName" label="Last Name" disabled={!isEditMode}  defaultValue={lastName} type="text" variant="outlined" fullWidth size="small" onChange={updateTextField} />
          </Grid>

          <Grid item xs={6}>
            <TextField  label="Email" disabled type="emial" defaultValue={email}  variant="outlined" fullWidth size="small" onChange={updateTextField} />
          </Grid>

          <Grid item xs={6}>
            <TextField name="phone" label="Number" disabled={!isEditMode}  type="number"  defaultValue={phone} variant="outlined" fullWidth size="small"  onChange={updateTextField} />
          </Grid>

          <Grid item xs={6}>
            <TextField  name="password" label="Password" disabled={!isEditMode}  type="password" defaultValue={password} variant="outlined" fullWidth size="small"  onChange={updateTextField} />
          </Grid>

          
          <Grid item xs={6}>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label" >Gender</FormLabel>
                <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="gender" defaultValue={gender}
              onChange={updateTextField} >
                <FormControlLabel value="female" disabled={!isEditMode} control={<Radio />} label="Female"  />
                <FormControlLabel value="male" disabled={!isEditMode} control={<Radio />} label="Male"    />
                </RadioGroup>
            </FormControl>
          </Grid>
 
          {isEditMode &&
            <Grid item xs={12}>
            <Button fullWidth variant="contained" onClick={()=>setIsEditMode(false)}>Update Profile</Button>
          </Grid>
          }
        </Grid>
      </Box>
    </div>
  );
};
export default Profile;
