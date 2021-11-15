import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'
import Main from '../components/Main'
import Button from '../components/Buttons'
import Link from 'next/link'

const ErrorPage: NextPage =()=>{
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="page not found" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"></link>
            </Head>
            <Main>
                <Error404>
                    <h1>404</h1>
                    <p>Sorry! It looks like this page is unavailable</p>
                    <div>
                        <Link href='/'>
                            <Button>Return Home</Button>
                        </Link>
                    </div>
                </Error404>
            </Main>
        </div>
      
    )
}

const Error404 = styled.section`
    height:100vh;
    width:100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h1 {
        font-weight:normal;
        font-size:10rem;
        text-decoration:underline;
    }

    p {
        font-size:4rem;
        margin-top:1em;
    }

    div {
        height:80px;
        width:200px;
        margin-top:4em;
    }

    button {
        border:2px solid ${props=>props.theme.black};
        &:hover{
            color:white;
        }
        font-size:1.5rem;
    }
`;

export default ErrorPage