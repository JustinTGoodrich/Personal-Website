import React from 'react'
import styled from "styled-components";

const Footer:React.FC = ()=>{
    return (
        <Foot/>
    )
}

const Foot = styled.footer`
    height:200px;
    width:100%;
    background:${props=>props.theme.black};
`;

export default Footer