import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Copy } from '@styled-icons/fa-solid/Copy'
import { Monero } from '@styled-icons/simple-icons/Monero'
import { Ethereum } from '@styled-icons/simple-icons/Ethereum'

const Crypto:React.FC = () =>{
    return (
        <Section>
            <Mobile/>
           
        </Section>
    )
}

const Mobile =()=>{
    const [width,setWidth] = useState<number>()
    useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth)
        })
    },[])

    return (
        <>
        <p>Donate:<br/>Tap the Icons to copy my wallet address</p>
        <TextBox mobile={width <= 600 }>
            <ReflectiveCircle>
                <CircleBorder>
                    <MoneroIcon/>
                </CircleBorder>
            </ReflectiveCircle>
            <ReflectiveCircle>
                <CircleBorder>
                    <ETH/>
                </CircleBorder>
            </ReflectiveCircle>
        </TextBox>
        </>
    )
}
const Section = styled.section`
    height:500px;
    p {
        width:100%;
        height:50px;
        text-align:center;
        font-size:1.5rem;
        @media(min-width:768px){
            display:none;
        }
        padding:1rem;
        margin-bottom:1rem;
    }
`;

const ReflectiveCircle = styled.div`
    height:150px;
    width:150px;
    border-radius:50%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:10px;
    background: conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 54.38deg, #FFFFFF 105deg, #000000 163.12deg, #FFFFFF 210deg, #000000 270deg, #FFFFFF 311.25deg, #000000 354.37deg, #FFFFFF 360deg), conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 54.38deg, #FFFFFF 105deg, #000000 163.12deg, #FFFFFF 210deg, #000000 270deg, #FFFFFF 311.25deg, #000000 354.37deg, #FFFFFF 360deg), radial-gradient(94.55% 94.55% at 50% 5.45%, #2AD0CA 0%, rgba(225, 246, 100, 0.9) 20.83%, rgba(254, 176, 254, 0.9) 44.79%, rgba(171, 179, 252, 0.9) 64.58%, rgba(93, 247, 164, 0.9) 82.81%, rgba(88, 196, 246, 0.9) 100%);
    background-blend-mode: screen, difference, normal;
    mix-blend-mode: normal;
`;

const CircleBorder = styled.div`
    height:100%;
    width:100%;
    border-radius:50%;
    border 10px solid white;
    display:flex;
    justify-content:center;
    align-items:center;
`;

interface Text {
    mobile:boolean;
}

const TextBox = styled.div`
    height:80%;
    font-size:1.5rem;
    width:100%;
    padding:1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;


    @media(min-width:600px){
        flex-direction:row;
    }

    @media(min-width:1600px and max-width:1899px){
        font-size:1.75em;
    }

    @media(min-width:1900px){
        font-size:2.5em;
    }

    @media(min-width:768px){
        ${(props:Text)=>!props.mobile && "display:none;"}
    }
`;

const MoneroIcon = styled(Monero)`
    color: white;
    height: 80%;
`;

const ETH = styled(Ethereum)`
    color: white;
    height: 80%;
`;

export default Crypto