import React, {useState} from 'react'
import { Container, Paper, Typography, TextField, Button, Stack, Avatar, IconButton } from '@mui/material'
import {CameraAlt as CameraAltIcon} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/Styles/StyledComponents'
import {useFileHandler, useInputValidation} from '6pp'
import { usernameValidator } from '../utils/validators'

const  Login = () => {

  const [isLogin, setIsLogin] = useState(true);  
  const toggleLogin = () => setIsLogin((prev) => !prev);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");   //const password = useStrongPassword(); "for strong passwords"

  const avatar = useFileHandler("single", 2);

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login", { username: username.value, password: password.value });
  }

  const handleSignUp = (e) => {
    e.preventDefault();
    // Handle sign-up logic here
    console.log("Sign Up", { name: name.value, bio: bio.value, username: username.value, password: password.value, avatar: avatar.file });
  }


  return (
    <div 
      style={{
        backgroundImage: "linear-gradient(to bottom, #283048, #859398)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      }}
    >  
      <Container component="main" maxWidth="xs" sx={{height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
        <Paper 
        elevation={3} 
        sx={{ 
          padding: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center' }}
          >

          {isLogin? (<>
          
          <Typography variant='h5'>
              Login
          </Typography>
          <form style={{
            width: "100%",
            marginTop: "1rem",
            }}
            onSubmit={handleLogin}
          >
              <TextField required fullWidth label= "Username" margin= "normal" variant= "outlined" value={username.value} onChange={username.changeHandler} ></TextField>
              <TextField required fullWidth label= "Password" margin= "normal" type= "password" variant= "outlined" value={password.value} onChange={password.changeHandler}></TextField>

              <Button sx={{
                  marginTop: "1rem"
              }} variant='contained' color='primary' type='submit' fullWidth>
                  Login 
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

              <Button  fullWidth variant='text' onClick = {toggleLogin}>
                  Sign Up
              </Button>

          </form>
          
          </>) : (<>
          
          <Typography variant='h5'>
              Sign Up
          </Typography>
          <form style={{
            width: "100%",
            marginTop: "1rem",
            }}
            onSubmit={handleSignUp}
          >

            <Stack position={"relative"} width={"10rem"} margin={"auto"}>
              <Avatar sx={{
                width: "10rem",
                height: "10rem",
                objectFit: "contain",
                }}
                src={avatar.preview}
              />

              <IconButton sx={{
                  position: 'absolute',
                  bottom: "0",
                  right: "0",
                  color: 'white',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  }
                }}
                component="label"
              >
                <>
                  <CameraAltIcon />
                  <VisuallyHiddenInput type="file" onChange={avatar.changeHandler} />
                </>
              </IconButton>

            </Stack>
            {
                avatar.error && (
                  <Typography 
                    m={'1rem auto'}
                    width={"fit-content"}
                    display={"block"} 
                    color='error' 
                    variant='caption'>
                    {avatar.error}
                  </Typography>
                )
              }
              
              <TextField required fullWidth label= "Name" margin= "normal" variant= "outlined" value={name.value} onChange={name.changeHandler}></TextField>
              <TextField required fullWidth label= "Bio" margin= "normal" variant= "outlined" value={bio.value} onChange={bio.changeHandler}></TextField>
              <TextField required fullWidth label= "Username" margin= "normal" variant= "outlined" value={username.value} onChange={username.changeHandler}></TextField>
              {
                username.error && (
                  <Typography color='error' variant='caption'>
                    {username.error}
                  </Typography>
                )
              }
              <TextField required fullWidth label= "Password" margin= "normal" type= "password" variant= "outlined" value={password.value} onChange={password.changeHandler}></TextField>

              {
                password.error && (
                  <Typography color='error' variant='caption'>
                    {password.error}
                  </Typography>
                )
              }

              <Button sx={{
                  marginTop: "1rem"
              }} variant='contained' color='primary' type='submit' fullWidth>
                  Sign Up 
              </Button>

              <Typography textAlign={"center"} m={"1rem"}>OR</Typography>

              <Button  fullWidth variant='text' onClick = {toggleLogin}>
                  Login Instead
              </Button>

          </form>
          
          </>)}

        </Paper>
      </Container>
    </div>
  )
}

export default Login
