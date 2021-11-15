import type { NextPage } from 'next'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Main from '../components/Main'
import Message from '../components/home/Message'
import DVD from '../components/home/DVD'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Justin Goodrich</title>
        <meta name="description" content="My personal blog/website" />
        <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet"></link>
      </Head>
      <Main>
        <NavBar/>
        <Message/>
        <DVD/>
      </Main>
      <Footer/>
    </div>
  )
}

export default Home
