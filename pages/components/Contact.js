import React, { ReactElement, useState} from 'react'
import {useForm} from "react-hook-form"

export default function Contact (){
    const {register, clearErrors, handleSubmit, reset, formState:{errors, isSubmitSuccessful, isValid}} = useForm();
    const onSubmit = data => {
        reset({keepIsValid: true});
        // clearErrors();
        console.log(data);
        fetch('../api/Form', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) =>{
            console.log('Response received')
            if(res.status === 200) {
                console.log('Success!')
            }
        })
    }
    return(
        <section id="contact"
        className="relative bg-gray-100">
            <div className="container flex-col mt-32">
                <h2 className="heading-text text-5xl  text-center">
                    Contact Us
                </h2>
                <p className="p-text mt-3 text-base text-center">
                    If you have any questions or concerns, feel free to
                    send us a message!
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col mt-8 w-2/3 mx-auto">
                        <span className="text-left uppercase text-sm text-gray-600 font-bold ">Full Name</span>
                        <input 
                        className="sm:w-9/12 lg:w-7/12 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="text" placeholder=""
                        name="name"
                        {...register("name", {
                            required: "Name is required",
                        })}
                        />
                     {errors.name && (
                        <text className="text-normal text-red-500 ">
                            {errors.name.message}
                        </text>
                    )}   
                    </div>
                    <div className="flex flex-col mt-8 w-2/3 mx-auto">
                        <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
                        <input 
                        className="sm:w-9/12 lg:w-7/12 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message:"Invalid Email Address"
                            }
                        })}
                        />
                        {errors.email && isValid == false && (
                        <text className="text-normal text-red-500 ">
                            {errors.email.message}
                        </text>
                    )}
                    </div>
                    <div className="flex flex-col mt-8 w-2/3 mx-auto">
                        <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
                        <textarea
                        className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                        name="message"
                        {...register("message", {
                            required: "Please enter a message",
                        })}
                        />
                        {errors.message && (
                        <text className="text-normal text-red-500 ">
                            {errors.message.message}
                        </text>
                        )}
                        {isSubmitSuccessful == true && (
                        <text className="text-normal font-bold">
                            Your message has been submitted.
                        </text>
                    )}
                    </div>
                    <div 
                    className="flex sm:mx-auto flex-row-reverse mt-8 w-5/6">
                                <button 
                                type="submit" className="btn btn-purple hover:bg-bookmark-white">
                                Send Message
                                </button>
                    </div>
                </form>
            </div>
        </section>

    );
}