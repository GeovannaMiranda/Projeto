import React from "react";
import {Card, Input, Button} from 'reactstrap';
import style from '../telaCadastro/style.css'
import logo from '../img/Logo.PNG';


function Cadastro(){
    return(
        <div className="Corpo-cadastro">
            <div className="Card-cadastro">
                <Card className="card-esquerdo" id="card-cad">
                    <img src={logo} alt="logo Farma Now" id="design-logo" className="logo"/>
                    <div className="Conteudo-card-esquerdo">
                        <p className="p-card-esquerdo" id="cor-p"><strong>Possui Cadastro?</strong></p>
                        <Button id="cor-botao-cadastro" href="/" className="botao-cad" ><strong>Entre</strong></Button>
                    </div>
                    
                </Card>

                <Card className="card-principal-cad">
                    <div className="campos-card-cad">
                    <p id="texto-login" className="login-txt"><strong>Cadastro</strong></p>
                        <Input placeholder='Nome' required id="input-cad"></Input>
                        <Input placeholder='Email' required id="input-cad" className="email"></Input>
                        <Input placeholder='Senha' required id="input-cad"></Input>
                    </div>

                    <Button id="cor-botao-entrar" className="botao-login" ><strong>Cadastrar</strong></Button>
                </Card>
            </div>
        </div>
    )
};

export default Cadastro;