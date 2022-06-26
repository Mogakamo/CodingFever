import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { NavBar } from '../components'

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Add other components */}
      <div>
        {/* Navbar */}
        <NavBar />
      </div>
    </div>
  )
}

export default Home
