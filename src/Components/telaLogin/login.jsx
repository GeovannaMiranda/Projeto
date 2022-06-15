import React from "react";
import {Card, Button, Input} from 'reactstrap';
import style  from '../telaLogin/style.css';


import logo from '../img/Logo.PNG';

function Login(){

    return(
        <div className="Corpo-login">
            <div className="Corpo">
                <Card className="card-esquerdo" id="card-cor">
                    <img src={logo} id='design-logo' className="logo"></img>
                    <div className="Conteudo-card-esquerdo">
                        <p className="p-card-esquerdo" id="cor-p"><strong>Não possui Cadastro?</strong></p>
                        <Button id="cor-botao-cadastro" href="/cadastro" className="botao-cad">Cadastre-se</Button>
                    </div>
                
                </Card>

                <Card>
                    <div className="Conteudo-card-principal">
                        <p id="texto-login" className="login-text"><strong>LOGIN</strong></p>
                        <Input placeholder='Email' id="campo-texto"></Input>
                        <Input placeholder="Senha" id="campo-texto" className="camp-senha"></Input>
                        <Button id="cor-botao-entrar" className="botao-login" href='/inicio'><strong>Entrar</strong></Button>
                    </div>
                   
                </Card>
            </div>
        </div>
    )
}

export default Login;