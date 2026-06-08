import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FaInstagram, FaWhatsapp, FaPhone } from 'react-icons/fa'
import { motion } from 'framer-motion'
import './Contact.css'


export default function Contact () {
    return (
        <>
        <section id='contact' className="contact-wrapper">
            <div className="contact-globe">

            </div>
            <div className="contact-label">
                <p className="contact-note">Let's build Something</p>
            </div>
            <div className="contact-links">
            <a href="https://www.instagram.com/buike.dev/"><FaInstagram /></a>
            <a href="https://wa.me/+2347045309300"><FaWhatsapp /></a>
            <a href="tel:+2347045309300"><FaPhone /></a>
            <a href="https://github.com/hanxsoloxx"><FaGithub /></a>
            <a href="https://linkedin.com/in/solomon-chibuike-7b46343bb"><FaLinkedinIn /></a>
            <a href="mailto:solomilton27@gmail.com"><HiOutlineMail /></a>
            </div>
        </section>
        </>
    )
}