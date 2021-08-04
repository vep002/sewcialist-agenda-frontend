import React from 'react'
import {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

export default function SignUp(props) {

    const [username, setUserName]=useState("")
    const [password, setPassword]=useState("")
    const [profile_pic, setProfilePic]=useState("")

    const formName="Sign Up"


    // SIGNUP step 2: this function creates the formData object and runs the handleSubmit function, passing in formData object as an argumment. See App.js for next step.
    let submitHandler = (e) => {
        e.preventDefault()

        let formData={
            username: username,
            password: password,
            profile_pic: profile_pic
        }
        props.handleSubmit(formData)
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleProfilePicChange = (e) => {
        setProfilePic(e.target.value)
    }

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

      const classes= useStyles()

    return (
        <div>
            {/*SIGNUP step 1: user creates their profile information and submits the form, which runs the submitHandler */}
        <form onSubmit={submitHandler}>
            <h1 className="form">{formName}</h1>
            <TextField
                required
                label="Required"
                defaultValue="Username"
                variant="outlined"
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
                    variant="outlined"
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
            <TextField
                required
                label="Required"
                defaultValue="ProfilePic"
                variant="outlined"
                type="text" 
                id="profile_pic" 
                name="profile_pic"
                value={profile_pic}
                onChange={handleProfilePicChange}
                />
            {/* <label for="password">profile picture</label>
            <input 
            type="text" 
            id="profile_pic" 
            name="profile_pic"
            value={profile_pic}
            onChange={handleProfilePicChange}
            /> */}
             <Button onClick={submitHandler}
                className={classes.menuButton}
                variant="contained"
                backgroundColor="#A3C4BC"
                >SIGN UP</Button>
            {/* <input type="submit" value="Submit"/> */}
        </form>
        </div>
    )
}
