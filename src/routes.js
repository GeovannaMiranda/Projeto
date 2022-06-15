import React from "react";
import Login from "./Components/telaLogin/login";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Cadastro from "./Components/telaCadastro/cadastro";
import Inicio from "./Components/telaPrincipal/inicio";
import CadastroEstoque from "./Components/telaCadastroEstoque/cadEstoque";
import MenuSuperior from "./Components/telaMenuPrincipal/menusuperior";

function AppRoutes(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Login/>}/>
                    <Route path='/cadastro' element={<Cadastro/>}/>
                    <Route path='/inicio' element={<Inicio/>}/>
                    <Route path='/cadastroestoque' element={<CadastroEstoque/>}/>
                    <Route path='/menusuperior' element={<MenuSuperior/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
};

export default AppRoutes;