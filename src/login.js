import React from 'react'
import './login.css'
import {Button} from "@material-ui/core"



function login() {

    const signIn = () => {

    }

    return (
        <div className="login">
            <div className="login__container effect1">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/>    
                <div className="login__text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign In With Google
                </Button>
            </div>
        </div>
    )
}

export default login;