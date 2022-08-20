import React from "react";
import { Card, Input, Button } from "reactstrap";
import "../telaPrincipal/style.css";
import remedio from "../img/generico-tarja-vermelha.jpg.png";
import "material-icons";
import Menusuperior from "../MenuSuperior/menusuperior";

function Inicio() {
  return (
    <div className="corpo-ini">
      <div>
        <div>
          <Menusuperior/>
        </div>
        <div className="class-search-icon">
          <Input
            type="search"
            placeholder="Qual remédio procura?"
            id="input-pesquisa"
            className="campo-pesquisa"
          />
         
        </div>
        <div className="linha1" id="line1">
          <p id="titulo-estilo" className="titulo-ini">
            Busque pela sua Farmacia
          </p>
          <div className="campos-end">
            <Input type="text" placeholder="Rua" id="input-estilo" />
            <Input type="text" placeholder="Bairro" id="input-estilo" />
            <Input type="text" placeholder="Número" id="input-estilo" />
            <Input type="text" placeholder="CEP" id="input-estilo" />
          </div>

          <div className="div-busca-cep">
            <Input
              id="style-input-cep"
              type="text"
              placeholder="Buscar por CEP"
            />
            <Button id="style-button-busca" className="class-button">
              Buscar
            </Button>
          </div>
        </div>
    
        <div>
          <h1 className="title-cards" id="style-tittle">
            Encontre seu Remédio
          </h1>

          <div className="class-cards-remedio">
            <Card>
              <img src={remedio} alt="remedio1" />
              <p className="class-p">
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio2" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio3" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio4" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
          </div>
        </div>
        <div>
          <div className="class-cards-remedio2">
            <Card>
              <img src={remedio} alt="remedio1" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio2" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio3" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio4" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
          </div>
        </div>
        <div>
          <div className="class-cards-remedio3">
            <Card>
              <img src={remedio} alt="remedio1" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio2" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio3" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio4" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
          </div>
        </div>
        <div>
          <div className="class-cards-remedio4">
            <Card>
              <img src={remedio} alt="remedio1" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio2" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio3" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
            <Card>
              <img src={remedio} alt="remedio4" />
              <p>
                Remédio Genérico - Tarja vermelha
                <br /> R$ 10,00{" "}
              </p>
              <Button id="style-button-add" className="class-button-add">
                Adicionar ao Carrinho
              </Button>
            </Card>
          </div>
        </div>
        <footer id="style-footer" className="class-footer">
          {" "}
          Farma Now - Criada em 14 de Agosto de 2022
        </footer>
      </div>
    </div>
  );
}

export default Inicio;
