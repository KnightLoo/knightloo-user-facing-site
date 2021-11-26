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
        <div>
            <Head>
                <title>KnightLoo</title>

                <link rel="shortcut icon" type="image/png" href="knightloo_no_bg.png" sizes="64x64"/>
                <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>
                <link rel="stylesheet"  href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />

                <meta property="og:url" content="www.knightloo.com" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="knightloo_link_preview_icon.png" />
                <meta property="og:desciption" content="The UCF Bathroom Finder." />
                <meta property="og:title" content="KnightLoo" />
            </Head>
            <div>
                <Navbar />
                <Hero></Hero>
                <Features></Features>
                <Carousel></Carousel>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>    
    );
}