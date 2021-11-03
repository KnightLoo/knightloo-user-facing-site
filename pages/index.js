import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import React, { ReactElement, useState} from 'react'

export default function Home() {
    const Hero = () => {
        return(
            <section className="relative">
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28 hero">
                    <div className="flex flex-1 flex-col items-center lg:items-start">
                        <h2 className="heading-text text-5xl  text-center lg:text-left  md:text-6xl mb-3 z-10">
                            Find the nearest
                        </h2>
                        <h2 className="heading-text text-5xl  text-center lg:text-left  md:text-6xl mb-3 z-10">
                            bathroom on
                        </h2>
                        <h2 className="heading-text text-5xl  text-center lg:text-left  md:text-6xl mb-3 z-10">
                            campus.
                        </h2>
                        <div className="flex justify-center flex-wrap z-10">
                            <button type="button" className="btn btn-purple hover:bg-bookmark-white hover:text-black">
                            Get Started
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                        <img className="sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/x.png" ></img>
                    </div>
                </div>
            </section>
    );
    }
    
    const Features = () => {
        return(
            <section id="features" 
            className="relative bg-gray-100">
                <div className="container items-center mt-20">
                    <h2 className="heading-text text-5xl  text-center lg:text-left mb-3">
                            App Features
                    </h2>
                </div>
                <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-30"> 
                    <div className="container flex-1 flex-col"> 
                        <div className="flex flex-col items-center lg:items-start lg:flex-row  md:space-x-10">
                            <div className="mb-4 md:mb-0">
                                <i className="fas fa-map-marked-alt fa-2x"></i>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <h2 className= "heading-text text-2xl" >
                                    Campus Map
                                </h2>
                                <p className="features-text text-xl text-center lg:text-left mb-3">
                                    View the map of the UCF campus along with the location and picture of bathrooms on campus.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-8 lg:items-start lg:flex-row md:space-x-10">
                            <div className="mb-4 md:mb-0">
                            <i className="fas fa-filter fa-2x"></i>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <h2 className= "heading-text text-2xl" >
                                    Smart Filtering
                                </h2>
                                <p className="features-text text-xl text-center lg:text-left mb-3">
                                    Filter through bathroom locations by setting a maximum radius. 
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-8 lg:items-start lg:flex-row md:space-x-8">
                            <div className="mb-4 md:mb-0">
                            <i className="fas fa-user-edit fa-2x"></i>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <h2 className= "heading-text text-2xl" >
                                    Rate and Review
                                </h2>
                                <p className="features-text text-xl text-center lg:text-left mb-3">
                                    Authenticated users can leave a rating or a review for any bathroom on campus!
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-8 lg:items-start lg:flex-row md:space-x-8">
                            <div className="mb-4 md:mb-0">
                            <i className="fas fa-user-edit fa-2x"></i>
                            </div>
                            <div className="flex flex-col items-center lg:items-start">
                                <h2 className= "heading-text text-2xl" >
                                    Edit Campus Map
                                </h2>
                                <p className="features-text text-xl text-center lg:text-left mb-3">
                                    To help keep the map updated, users can request to add or edit bathrooms on campus.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center mb-10 md:mb-16 lg:mb-0">
                        <img className="w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" src="/x.png" ></img>
                    </div>
                </div>  
            </section>
        );
    }
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