import React from 'react'
import React, { useState } from 'react';

export default function Form() {

    const [username, setUserName] = useState("")
    const [password]

    const formName = "Form Name"

    handleChange = () => {
        setUser()
    }

    return (
        <div>
        <h1>{formName}</h1>
        <form>
            <label for="username">username:</label>
            <input type="text" 
            id="username" 
            name="username"
            onChange={handleChange}
            />
            <label for="password">password</label>
            <input type="text" id="password" name="password"/>
            <input type="submit" value="Submit"/>
        </form>
    </div>  
    )
}
