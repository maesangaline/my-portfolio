// src/components/Contact.js

import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <div className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                <p>I am looking for job opportunities and would love to connect!</p>
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <SocialIcon
                        url="https://github.com/maesangaline/"
                        network="github"
                        style={{ height: 100, width: 100 }}
                        alt="my github" />
                        <SocialIcon 
                        url="https://www.linkedin.com/in/maesangaline"
                        network="linkedin"
                        style={{ height: 100, width: 100 }} 
                        alt="my linkedin"/>
                   </div>
            </div>
        </section>
    )
}