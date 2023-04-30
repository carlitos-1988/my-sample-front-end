import { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

class Footer extends Component{

    render(){
        return(
            <Navbar fixed="bottom">
            <Container>
              <Navbar.Brand href="#home">Workshift Scheduling App</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  Signed in as: <a href="#login">Team 2</a>
                </Navbar.Text>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        )
    }
}

export default Footer;