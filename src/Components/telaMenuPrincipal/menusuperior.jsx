import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


function MenuSuperior(){
    return(
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"></NavbarBrand>
          <NavbarToggler  />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/inicio">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Login</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Farmacia
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Cadastro Estoque
                  </DropdownItem>
                  <DropdownItem>
                    Cadastro Farmacia
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Estoque
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        </div>
    )
}
export default MenuSuperior;