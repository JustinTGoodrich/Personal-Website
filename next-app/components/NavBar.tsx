import React from 'react'
import styled from 'styled-components'
import { Instagram } from '@styled-icons/boxicons-logos/Instagram'
import { Github } from '@styled-icons/bootstrap/Github'
import { Menu } from '@styled-icons/material/Menu'
import Link from 'next/link'

const NavBar:React.FC =()=>{
    return (
        <Nav>
            <HomeButton>
                Justin Goodrich
            </HomeButton>
            <MenuBar>
                <Link href="/about">
                    <DesktopButton>
                        About Me
                    </DesktopButton>
                </Link>
                <Link href="/Portfolio">
                    <DesktopButton>
                        Portfolio                
                    </DesktopButton>
                </Link>
                <Link href="Contact">
                    <DesktopButton>
                        Contact                
                    </DesktopButton>
                </Link>
                <Link href="Blog">
                    <DesktopButton>
                        Blog                
                    </DesktopButton>
                </Link>
            </MenuBar>
            <Icons>
                <a href="https://www.instagram.com/justinngoodrich">
                    <IG/>
                </a>
                <a href="https://github.com/JustinTGoodrich">
                    <GH/>
                </a>
            </Icons>
            <MenuButton>
                <MenuIcon/>
            </MenuButton>
        </Nav>
    )
}

const Nav = styled.nav`
    background: ${ props=>props.theme.white };
    border: 2px solid ${ props=>props.theme.black };
    width: 100%;
    height:85px;
    display: flex;

    @media(min-width:768px){
       height: 65px;
    }
 
`;

const NavButton = styled.button`
    height:100%;
    background: ${ props=>props.theme.white };
    border:none;
    border-left: 2px solid ${ props=>props.theme.black };
    font-size: 1.5rem;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const MenuBar = styled.div`
    flex:2;
    display:flex;
    height:100%;
    @media(max-width:767px){
        display:none;
    }
`;

const DesktopButton = styled(NavButton)`
    padding:20px;
    width:calc(100%/4);
    &:hover {
        color:white;
        background: ${ props=> props.theme.black };
    }
`;

const MenuButton = styled(NavButton)`
    @media(min-width:768px){
        display:none;
    }
    padding:1em;
`;

const HomeButton = styled.button`
    height:100%;
    display:flex;
    align-items:center;
    font-size: 1.5rem;
    text-align:left;
    background: ${ props=>props.theme.black };
    border: 2px solid ${ props=>props.theme.black };
    color: white;
    padding:5%;
    flex: 1.5;

    @media(min-width:768px){
        padding:0;
        justify-content:center;
        font-size:2rem;
    }

    @media(min-width:800px){
        flex:1;
    }
`;

const Icons = styled.div`
    height:100%;
    display:flex;
    align-items: center;
    justify-content: space-around;
    flex:1.5;
    border-left: 2px solid ${ props=>props.theme.black };

    @media(min-width:768px){
        flex:0.5;
    }

    @media(min-width:800px){
        justify-content:space-evenly;
    }

    a {
        text-decoration:none;
        height:45%;
        width:50;
        @media(min-width:800px){
            height:60%;
        }
    }

`;

const IG = styled(Instagram)`
    color: ${ props=>props.theme.black };
    height:100%;
`;

const GH = styled(Github)`
    color: ${ props=>props.theme.black };
    height:100%;
`;

const MenuIcon = styled(Menu)`
    color: ${ props=>props.theme.black };
    height:75%;

`;


export default NavBar