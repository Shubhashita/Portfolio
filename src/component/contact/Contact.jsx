import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import SectionHeading from '../motion/SectionHeading';
import Reveal from '../motion/Reveal';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_008a6d9',
                'template_4ecupnj',
                form.current,
                'pQoiBP9fJiC0rcUnU'
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            );
        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <SectionHeading title="Get in touch" subtitle="Contact Me" />

            <div className="contact__container container grid">
                <Reveal variant="left" className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">
                                shubhashita.aes@gmail.com
                            </span>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-linkedin contact__card-icon"></i>
                            <h3 className="contact__card-title">Linkedin</h3>
                            <span className="contact__card-data">
                                https://www.linkedin.com/in/shubhashita-singh
                            </span>
                        </div>

                        <div className="contact__card">
                            <i className="bx bxl-github contact__card-icon"></i>
                            <h3 className="contact__card-title">GitHub</h3>
                            <span className="contact__card-data">
                                https://github.com/Shubhashita
                            </span>
                        </div>
                    </div>
                </Reveal>

                <Reveal variant="right" delay={0.12} className="contact__content">
                    <h3 className="contact__title">Write me your Project</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="contact__form-input"
                                placeholder="Insert your name"
                            />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name="email"
                                className="contact__form-input"
                                placeholder="Insert your email"
                            />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea
                                name="project"
                                cols="30"
                                rows="10"
                                className="contact__form-input"
                                placeholder="write your project"
                            ></textarea>
                        </div>

                        <button className="button button--flex">Send Message</button>
                    </form>
                </Reveal>
            </div>
        </section>
    );
};

export default Contact;
