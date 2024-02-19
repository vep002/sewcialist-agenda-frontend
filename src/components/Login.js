import React from 'react'
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

export default function Login(props) {

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
          },
          menuButton: {
            marginRight: theme.spacing(2),
          },
        },
      }));
      

    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")

    // LOGIN step 2: the submitHandler function creates the formData object, which stores the user's username and password. Then it calls the handleSubmit() function, passing in the formData as an argument. See App.js for next step.
    let submitHandler = (e) => {
        e.preventDefault()

        let formData = {
            username: username,
            password: password}
            props.handleSubmit(formData)
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const formName = "Login"

    const classes = useStyles();
    return (
        
        <div>
            {/* LOGIN Step 1: user enters their login credentials and clicks the submit button, which runs the submitHandler function */}
            <form onSubmit={submitHandler}>
            <h1 className="form">{formName}</h1>
            <TextField
                required
                label="Required"
                defaultValue="Username"
                variant="filled"
                type="text" 
                id="username" 
                name="username"
                value={username}
                onChange={handleUserNameChange}
                />
                {/* <label for="username">username:</label>
                <input 
                type="text" 
                id="username" 
                name="username"
                value={username}
                onChange={handleUserNameChange}
                /> */}
                <TextField
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    type="password" 
                    id="password" 
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    />
                {/* <label for="password">password</label>
                <input 
                type="password" 
                id="password" 
                name="password"
                value={password}
                onChange={handlePasswordChange}
                /> */}
                <Button onClick={submitHandler}
                className={classes.menuButton}
                variant="contained"
                backgroundColor="#A3C4BC"
                >LOGIN</Button>
                {/* <input type="submit" value="Submit"/> */}
            </form>
        </div>    
    )
}
