import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
import useInViewFade from '../about/useInViewFade';

const Contact = () => {
    const form = useRef();

    const [titleRef, titleVisible] = useInViewFade(0);
    const [subtitleRef, subtitleVisible] = useInViewFade(100);
    const [infoRef, infoVisible] = useInViewFade(300);
    const [formRef, formVisible] = useInViewFade(500);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_008a6d9',
                'template_4ecupnj',
                form.current,
                'pQoiBP9fJiC0rcUnU',
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            )
        e.target.reset()
    };

    return (
        <section className="contact section" id="contact">
            <h2 ref={titleRef}
                className={`section__title fade-element ${titleVisible ? 'fade-in' : ''}`}>Get in touch</h2>
            <span ref={subtitleRef}
                className={`section__subtitle fade-element ${subtitleVisible ? 'fade-in' : ''}`}
            >Contact Me</span>

            <div className="contact__container container grid">
                <div ref={infoRef}
                    className={`contact__content fade-element ${infoVisible ? 'fade-in' : ''}`}>
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>

                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">shubhashita.aes@gmail.com</span>
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
                            <span className="contact__card-data">https://github.com/Shubhashita</span>

                            {/* <a href="" className="contact__button">Write me {""}<i className="bx bx-right-arrow-alt contact__button-icon"></i></a> */}
                        </div>
                    </div>
                </div>

                <div ref={formRef}
                    className={`contact__content fade-element ${formVisible ? 'fade-in' : ''}`}>
                    <h3 className="contact__title">Write me your Project</h3>


                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input
                                type="text"
                                name='name' className='contact__form-input' placeholder='Insert your name' />
                        </div>
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input
                                type="email"
                                name='email' className='contact__form-input' placeholder='Insert your email' />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='write your project'></textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact