import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import React, { ReactElement, useState} from 'react'

export default function Home() {
    return(
        <html>
            <head>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
            </head>
            <body>
                <Navbar />
                <Hero></Hero>
                <Features></Features>
                <Carousel></Carousel>
                <Contact></Contact>
                <Footer></Footer>
            </body>
        </html>    
    );
}