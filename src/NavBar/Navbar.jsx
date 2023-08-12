import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import '../Styles/Styles.css'
import { IoIosArrowDown } from "react-icons/io";
import Button from '@mui/material/Button';

const FixedNavbar = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <Navbar className={scrolling ? 'navbar navbar-scroll' : 'navbar'} expand="lg" fixed="top">
            <Container style={{padding:'1%'}} >
                <Navbar.Brand className='navBrand' href="#home" style={{fontSize:'20px'}}><h2>Whereby</h2></Navbar.Brand>
                <Nav className='navbarCenter' >
                    <Nav.Link href="#home">Product <IoIosArrowDown/></Nav.Link>
                   
                    <Nav.Link href="#features">Pricing <IoIosArrowDown/></Nav.Link>
                    <Nav.Link href="#pricing">Developers <IoIosArrowDown/></Nav.Link>
                    <Nav.Link href="#pricing">Resources <IoIosArrowDown/></Nav.Link>
                </Nav>
            
                  <div style={{marginLeft:'20px'}}> 
                  <Button size="small" variant="outlined">Login</Button>
                 
                  </div>
                 {/* <div> <Button size="small" variant="contained" te >Try for Free</Button> </div> */}
               
            </Container>

        </Navbar>
    )
}
export default FixedNavbar

