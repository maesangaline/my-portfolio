// src/components/Contact.js

import React from "react";
import { SocialIcon } from "react-social-icons";

export default function Contact() {
    return (
        <section id="contact" className="relative">
            <p>I am looking for job opportunities and would love to connect!</p>
            <div className="social-icons">
                <a 
                href="https://github.com/maesangaline/">
                    <img 
                    src="./github-icon.svg" 
                    alt="my github profile" />
                </a>
                <SocialIcon
                url="https://github.com/maesangaline/"
                network="github"
                style={{ height: 50, width: 50 }} />
                <SocialIcon 
                url="https://www.linkedin.com/in/maesangaline"
                network="linkedin"
                style={{ height: 50, width: 50 }} />
                <a 
                href="https://www.linkedin.com/in/maesangaline">
                        <img 
                        src="./linkedin-icon.svg " 
                        alt="my linkedin profile" />
                </a>
            </div>
        </section>
    )
}