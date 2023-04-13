import React from 'react'
import { Inter } from 'next/font/google'
import NavBar from '../pages/NavBar/page'
import CardSec from '../pages/CardSec/page'
import Footer from '../pages/Footer/page'
import Introduction from './IntroductionCard/page'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <NavBar />
      <Introduction />
      <CardSec />
      <Footer />
    </>
  )
}
