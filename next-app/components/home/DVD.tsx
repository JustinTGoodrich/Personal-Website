import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import {Play} from '@styled-icons/boxicons-regular/Play';
import {Pause} from '@styled-icons/boxicons-regular/Pause';
import { useSpring, animated } from 'react-spring';

const DVD:React.FC =()=>{
    return (
        <Grid>
            <Box flex={1} />
            <Player/>
            <Box flex={1} />
        </Grid>
    )
}

const Player:React.FC =()=>{
    const [paused,setPaused] = useState(false)
    const [styles, api] = useSpring(() => ({from: { rotate: 0}}))

    useEffect(()=>{
        api({
            rotate:360,
            loop:true,
            config:{
                duration:2000
            }
          })
    },[paused])

    useEffect(()=>{
        paused ? api.pause() : api.resume()
    },[paused])
    
    return (
        <DVDBox flex={1}>
            <Dvd style={styles}>
                <SmallCircle>
                    <CenterCircle inside={false}>
                        <CenterCircle inside={true} />
                    </CenterCircle>
                </SmallCircle>
            </Dvd>
            <Text> More Coming Soon...</Text>
            <Button onClick={()=>setPaused(prev=>!prev)}>
                { paused ? <Play height="100%"/> : <Pause height="100%"/> }
            </Button>
        </DVDBox>
    )
}

const Text = styled.p`
    font-size:1.5rem;
    @media(min-width:900px){
       font-size:2rem;
    }

    @media(min-width:2400px){
        font-size:3rem;
    }
`

const Button = styled.button`
    background:none;
    border:none;
    outline:none;
    height:20%; 
    width:100%;
    display:flex;
    justify-content:center;
`;

interface BoxInt{
    flex:number
}

interface CenterCirc {
    inside?: boolean,
    theme?:any
}

const Circle = styled(animated.div)`
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Dvd = styled(Circle)`
    height:200px;
    width:200px;
    background: conic-gradient(from 180deg at 50% 50%, #000000 0deg, #FFFFFF 52.5deg, #000000 168.75deg, #FFFFFF 245.62deg, #FFFFFF 288.75deg, #000000 360deg), conic-gradient(from 180deg at 50% 50%, #FFFFFF 0deg, #000000 54.38deg, #FFFFFF 105deg, #000000 163.12deg, #FFFFFF 210deg, #000000 270deg, #FFFFFF 311.25deg, #000000 354.37deg, #FFFFFF 360deg), radial-gradient(94.55% 94.55% at 50% 5.45%, #2AD0CA 0%, rgba(254, 176, 254, 0.9) 44.79%, rgba(171, 179, 252, 0.9) 64.58%, rgba(93, 247, 164, 0.9) 82.81%, rgba(88, 196, 246, 0.9) 100%);
    background-blend-mode: screen, difference, normal;
    mix-blend-mode: normal;
    border: 3px solid #FFFFFF;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);

    @media(min-width:1000px){
        height: 300px;
        width: 300px;
    }

    @media(min-width:2400px){
        height: 500px;
        width:500px;
    }
`;
const SmallCircle = styled(Circle)`
    width:30%;
    height:30%;
    background:${props=>props.theme.white};
    border: 3px solid #FFFFFF;
`;

const CenterCircle = styled(Circle)<CenterCirc>`
    height:${props=> props.inside ? "50%" : "85%"};
    width:${props=> props.inside ? "50%" : "85%"};
    background: ${props=> props.inside ? props.theme.white : "linear-gradient(0deg, rgba(0, 0, 0, 0.06), rgba(0, 0, 0, 0.05))"};
    mix-blend-mode: normal;
`;

const Grid = styled.section`
    width:100%;
    height: 400px;
    border-top:2px solid ${props=>props.theme.black};
    border-bottom:2px solid ${props=>props.theme.black};
    display:flex;
    justify-content:space-evenly;

    @media(min-width:900px){
        height: 500px;
    }

    @media(min-width:2400px){
        height: 800px;
    }
`;

const Box = styled.div`
    flex:${(props:BoxInt)=>props.flex};
    height:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media(max-width:600px){
        display:none;
    }
`;

const DVDBox = styled(Box)`
    border-left:2px solid ${props=>props.theme.black};
    border-right:2px solid ${props=>props.theme.black};
    justify-content:space-evenly;
    @media(max-width:600px){
        display:flex;
    }
`;




export default DVD