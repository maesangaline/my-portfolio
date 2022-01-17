// src/components/Contact.js

import { ChatAlt2Icon } from "@heroicons/react/solid";
import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return (
        <section id="contact">
            <div className="text-center mb-20">
                <ChatAlt2Icon className="w-10 inline-block mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
                    I am looking for job opportunities and would love to connect!
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    I am: <br />
                    reliable, punctual, exceptionally organized, and dedicated to always continuing to improve.
                    </p>
                        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
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