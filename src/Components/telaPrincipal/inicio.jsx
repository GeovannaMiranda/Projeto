import React from "react";
import { Card, Input } from "reactstrap";
import style from '../telaPrincipal/style.css';
import logo from '../img/Logo.PNG';

function Inicio(){
    return(
        <div className="corpo-ini">
            <div>

                <Card className="card-ini" id="cor-card-ini">
                    <img src={logo} alt="logo" id="logo-ini" className="logo-pag-ini"  href='/'/>
                </Card>

                <div>
                    <Input type="search" placeholder="Qual remédio procura?" id="input-pesquisa" className="campo-pesquisa"/>
                </div>

                <div className="linha1" id="line1">
                    <p id="titulo-estilo" className="titulo-ini">Encontre sua Farmacia</p>
                    <div className="campos-end">
                        <Input type="text" placeholder="Rua" id="input-estilo"/>
                        <Input type="text" placeholder="Bairro" id="input-estilo"/>
                        <Input type="text" placeholder="Número" id="input-estilo"/>
                        <Input type="text" placeholder="CEP" id="input-estilo"/>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>
        </div>
    )
}

export default Inicio;