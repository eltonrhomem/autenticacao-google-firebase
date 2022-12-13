import React from "react";
import { useNavigate } from 'react-router-dom'

import {auth} from '../firebase.js'
import {  signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import styled from "styled-components";


export default function Login()
{
    const provider = new GoogleAuthProvider()
    provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    const navigate = useNavigate()

    function makeLogin() {
        signInWithPopup(auth, provider)
          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            localStorage.setItem('user', JSON.stringify(user))
            navigate('/home')
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            navigate('/')
            // ...
          });
  
    }


    return (<>
                <Container>
                    <BoxLogin>
                        <BotaoLoginGoogle onClick={makeLogin}>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                                Login com Google
                        </BotaoLoginGoogle>

                    </BoxLogin>

                </Container>
            </>)
}


const Container = styled.div`
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
background: rgb(6,61,111);
background: linear-gradient(0deg, rgba(6,61,111,1) 0%, rgba(6,61,111,1) 10%, rgba(8,75,136,1) 56%, rgba(8,75,136,1) 93%);
height: 100vh;


`

const BoxLogin = styled.div`
border: solid 1px;
border-radius: 10px;
border-color: transparent;
width: 40%;
height: 300px;
display: flex;
align-items: center;
justify-content: center;
padding: 10px;
background-color: #FCFCFC;

border-color: #FCFCFC;
box-shadow: 3px 1px 10px #3b5972 ;

    @media (max-width: 800px ) {
        width: 90%;
        
    }



`

const BotaoLoginGoogle = styled.button`
padding: 10px;
background-color: #FFF;
border: solid 1px;
border-radius: 5px;
border-color: #c9c9c9;
box-shadow: 1px 2px 2px #c9c9c9;
outline: 0;
width: 300px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
gap: 10px;
cursor: pointer;
font-family: 'Roboto';
font-size: 14px;
font-weight: 400;
letter-spacing: 1px;
color: #222222;


    img {
        width: 20px;
        height: 20px;

    }

`