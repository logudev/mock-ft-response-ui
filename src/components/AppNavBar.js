import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container,
  NavbarBrand,
} from 'reactstrap';

const AppNavBar = () => {
  return (
    <div>
      <Navbar color='dark' dark expand='sm' className='mb-5'>
        <Container>
          <NavbarBrand>Mock FT Status List</NavbarBrand>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink
                href='https://github.com/logudev/mock-ft-response-ui'
                target='_blank'
              >
                Github - Frontend
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href='https://github.com/logudev/mock-ft-responses'
                target='_blank'
              >
                Github - Backend
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
