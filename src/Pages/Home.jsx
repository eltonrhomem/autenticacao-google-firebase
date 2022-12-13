import React, { useState } from "react"
import styled from "styled-components"


export default function Home()
{
    const [exibeMenu, setExibeMenu] = useState(false)
    const [dadosUsuario, setdadosUsuario] = useState(JSON.parse(localStorage.getItem('user')))
    return(<>
            <Container>
                    {
                        exibeMenu && <Menu>
                                        <DadosUsuario>
                                            <img src={dadosUsuario.photoURL} alt=''/>
                                            <UsuarioInfo>
                                                <span>{dadosUsuario.displayName}</span>
                                                <span>{dadosUsuario.email}</span>
                                                
                                                
                                            </UsuarioInfo>
                                        </DadosUsuario>
                                        <hr></hr>
                                    </Menu>
                    }
                    <Side>
                        <BarraTopo>
                            <ion-icon onClick={() => setExibeMenu(!exibeMenu)} name="menu-outline" size="large"></ion-icon>
                            <ion-icon name="log-out-outline" size="large"></ion-icon>
                            
                        </BarraTopo>
                        <Conteudo>

                        </Conteudo>

                    </Side>
            </Container>
   
    
    
            </>)
}

const Conteudo = styled.div`
background-color: #f8f7f7;
height: 100vh;
width: 100%;
`

const Container= styled.div`
display: flex;
flex-direction: row;
height: 100vh;
max-width: 100vw;
`

const Side = styled.div`
display: flex;
flex: 1;
flex-direction: column;
width: 100%;
`

const BarraTopo = styled.div`

background-color: #084b88 ;
width: 100%;
height: 60px;
padding: 10px;
display: flex;
justify-content: space-between;
    ion-icon {
        cursor: pointer;
        color: #FFF;
        

        
        
    }

`

const DadosUsuario = styled.div`
color: #FFF;
display: flex;
flex-direction: row;
align-items: center;
padding: 10px;
gap: 10px;
    img {
        border-radius: 100%;
        width: 60px;
        height: 60px;
    }
   

`

const UsuarioInfo = styled.div`
display: flex;
flex-direction: column;
gap: 5px;
    span {
        font-weight: 400;
        font-size: 12px;
        margin: 0;
    }

`

const Menu = styled.div`
background-color: #225b91 ;

width: 300px;
height: 100vh;

`