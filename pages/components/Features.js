import React from 'react'

export default function Features(){
    return(
        <section id="features" 
        className="relative bg-gray-100">
            <div className="container items-center mt-20">
                <h2 className="heading-text text-5xl text-center lg:text-left py-10">
                        App Features
                </h2>
            </div>
            <div className="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-8"> 
                <div className="container flex-1 flex-col lg:-mt-16"> 
                    <div className="flex flex-col items-center lg:items-start lg:flex-row  md:space-x-10">
                        <div className="mb-4 md:mb-4 lg:mb-0">
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
                        <div className="mb-4 md:mb-4 lg:mb-0">
                        <i className="fas fa-filter fa-2x"></i>
                        </div>
                        <div className="flex flex-col items-center lg:items-start">
                            <h2 className= "heading-text text-2xl" >
                                Smart Filtering
                            </h2>
                            <p className="features-text text-xl text-center lg:text-left mb-3">
                                Customize your search preferences by using our custom filters to help you find a bathroom.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center mt-8 lg:items-start lg:flex-row md:space-x-8">
                        <div className="mb-4 md:mb-4 lg:mb-0">
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
                        <div className="mb-4 md:mb-4 lg:mb-0">
                        <i className="fas fa-wrench fa-2x"></i>
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
                <div className="flex justify-center mb-10 md:mb-16 lg:-mt-12">
                <img className="w-10/12 sm:w-3/5 md:w-3/5 lg:w-9/12" src="/image1.png"/>
                </div>
            </div>  
        </section>
    );
}