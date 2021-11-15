import React from 'react'
import styled from 'styled-components'

const Message:React.FC =()=>{
    return(
        <MessageBox>
            Welcome to my website, I hope to begin posting to the blog shortly and show off what Im working on. Thanks for joining me :)
        </MessageBox>
    )
}

const MessageBox = styled.div`
    margin:4rem;
    font-size:1.5rem;

    @media(min-width:600px){
        text-align:center;
    }

    @media(min-width:1600px and max-width:1899px){
        font-size:1.75em;
    }

    @media(min-width:1900px){
        font-size:2.5em;
    }
`;

export default Message
