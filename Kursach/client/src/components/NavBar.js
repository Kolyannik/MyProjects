import React, { useContext } from 'react';
import {Context} from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {NavLink} from "react-router-dom";
import { ADMIN_ROUTE, COLLECTION_ROUTE, LAB_ROUTE, LOGIN_ROUTE, WORK_ROUTE } from '../utils/constants';
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useHistory} from 'react-router-dom'


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color:'white'}} to={LAB_ROUTE}>Microbiological laboratory</NavLink>
                <NavLink style={{color:'white', marginLeft: "20px"}} to={WORK_ROUTE}>Our Works</NavLink>
                <NavLink style={{color:'white', marginLeft: "20px"}} to={COLLECTION_ROUTE}>Our collection</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >
                            Admin panel
                        </Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => logOut()}
                            className="ml-2"
                        >
                            Exit
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Log In</Button>
                    </Nav>
                }
            </Container>
        </Navbar>

    );
});

export default NavBar;