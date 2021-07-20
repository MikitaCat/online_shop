import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import { observer } from 'mobx-react-lite';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { SHOP_ROUTE } from '../utils/constants';

const NavBar = observer(() => {
  const { user } = useContext(Context);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink to={SHOP_ROUTE} style={{ color: 'white', textDecoration: 'none' }}>
          BuyDevice
        </NavLink>
        {user.isAuth ? (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'}>For Admins</Button>
            <Button variant={'outline-light'} style={{ marginLeft: '10px' }}>
              Exit
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>
              Authorization
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
});

export default NavBar;
