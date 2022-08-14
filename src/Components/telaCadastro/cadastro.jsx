import React from "react";
import {Card, Input, Button} from 'reactstrap';
import '../telaCadastro/style.css'
import logo from '../img/Logo.png';
import createSequence from "tooltip-sequence";
import "../Style/index.css";

function Cadastro(){
    const options = {
		backdropColor: "#6262625d",
		sequence: [
			{
				element: "#design-logo",
				description:
					"<h2>Bem-vindo</h2><div>Ao FarmaNow, esta etapa é de Cadastro</div>",
				placement: "bottom",
			},
			{
				element: "#cor-p",
				description:
					"<h2>Já possui Cadastro?</h2><div>Se já possui cadastro basta clicar no botao para ser direcionado a tela de login.</div>",
				placement: "top",
			},
			{
				element: "#cor-botao-cadastro",
				description:
					"<h2>Botao Login</h2><div>Ele te direcionará para a Tela de login.</div>",
				placement: "top",
			},
			{
				element: "#texto-login",
				description:
					"<h2>Formulário de Cadastro</h2><div>Nestes campos voce irá adicionar suas informcoes.</div>",
				placement: "top",
			},
            {
				element: "#input-cad",
				description:
					"<h2>Campo Nome</h2><div>Entre com o seu Nome e outros dados.</div>",
				placement: "top",
			},
            {
				element: "#cor-botao-entrar",
				description:
					"<h2>Botao de Cadastro</h2><div>Ao clicar no botao será realizado o seu cadastro.</div>",
				placement: "top",
			},
		],
		onComplete: function () {
			console.log("Completed!");
		},
	};

	function handleClick(event) {
		event.preventDefault();
		createSequence(options);
	}

    return(
        <div className="Corpo-cadastro">
            <div className="Card-cadastro">
                <Card className="card-esquerdo" id="card-cad">
                    <img src={logo} alt="logo Farma Now" id="design-logo" className="logo" onClick={handleClick}/>
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

                    <Button id="cor-botao-check" className="botao-login"><strong>Cadastrar</strong></Button>
                </Card>
            </div>
        </div>
    )
};

export default Cadastro;