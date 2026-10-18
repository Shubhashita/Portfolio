import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import SectionHeading from '../motion/SectionHeading';
import Reveal from '../motion/Reveal';

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({ state: 'idle', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus({ state: 'sending', message: 'Sending message...' });

        emailjs
            .sendForm(
                'service_v6xtk6v',
                'template_4ecupnj',
                form.current,
                'pQoiBP9fJiC0rcUnU'
            )
            .then(
                () => {
                    setStatus({ state: 'success', message: 'Message sent successfully!' });
                    e.target.reset();
                    setTimeout(() => {
                        setStatus({ state: 'idle', message: '' });
                    }, 4000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus({ state: 'error', message: 'Failed to send. Please try again.' });
                    setTimeout(() => {
                        setStatus({ state: 'idle', message: '' });
                    }, 4000);
                }
            );
    };

    return (
        <section className="contact section" id="contact">
            <SectionHeading title="Get in touch" subtitle="Contact Me" />

            <div className="contact__container container">
                <div className="contact__layout">
                    {/* Left side: Handwritten invite note with curved arrow pointing to the card */}
                    <Reveal variant="left" className="contact__note-wrapper">
                        <div className="contact__note-content">
                            <div className="contact__arrow-container">
                                <svg
                                    className="contact__arrow-svg"
                                    viewBox="0 0 110 70"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M 10 58 C 15 22, 55 8, 92 18"
                                        stroke="#8b5cf6"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M 76 13 L 95 19 L 85 32"
                                        stroke="#8b5cf6"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>

                            <p className="contact__handwritten-text">
                                Drop a<br />
                                message here<br />
                                and let&apos;s create<br />
                                something great<br />
                                <span className="contact__handwritten-highlight">together!</span>
                            </p>

                            <div className="contact__note-doodles">
                                <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                                    {/* Little doodle heart and spark */}
                                    <path
                                        d="M 8 14 C 4 8, 12 4, 15 10 C 18 4, 26 8, 22 14 C 18 19, 15 21, 15 21 C 15 21, 12 19, 8 14 Z"
                                        stroke="#f59e0b"
                                        strokeWidth="1.5"
                                        fill="none"
                                        strokeLinecap="round"
                                        transform="rotate(-12 15 12) scale(0.75)"
                                    />
                                    <circle cx="27" cy="8" r="1.5" fill="#f59e0b" opacity="0.8" />
                                    <circle cx="29" cy="16" r="1" fill="#f59e0b" opacity="0.6" />
                                </svg>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right side: Modern rounded contact card */}
                    <Reveal variant="right" delay={0.12} className="contact__card-wrapper">
                        <div className="contact__card-box">
                            <form ref={form} onSubmit={sendEmail} className="contact__form-new">
                                <div className="contact__form-row">
                                    <div className="contact__field-group">
                                        <label className="contact__field-label">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="contact__field-input"
                                            placeholder="Your name"
                                            required
                                        />
                                    </div>

                                    <div className="contact__field-group">
                                        <label className="contact__field-label">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="contact__field-input"
                                            placeholder="your@email.com"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="contact__field-group contact__field-group--full">
                                    <label className="contact__field-label">Project / Message</label>
                                    <textarea
                                        name="project"
                                        rows="4"
                                        className="contact__field-input contact__field-textarea"
                                        placeholder="Tell me about your project..."
                                        required
                                    ></textarea>
                                </div>

                                {status.state !== 'idle' && (
                                    <div className={`contact__status-msg contact__status-msg--${status.state}`}>
                                        {status.message}
                                    </div>
                                )}

                                <div className="contact__form-bottom">
                                    <button
                                        type="submit"
                                        className="contact__submit-button"
                                        disabled={status.state === 'sending'}
                                    >
                                        <span>{status.state === 'sending' ? 'Sending...' : 'Send Message'}</span>
                                        <span className="contact__submit-arrow">→</span>
                                    </button>

                                    <div className="contact__social-row">
                                        <a
                                            href="https://github.com/Shubhashita"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="contact__circle-icon"
                                            aria-label="GitHub Profile"
                                            title="GitHub"
                                        >
                                            <i className="bx bxl-github"></i>
                                        </a>

                                        <a
                                            href="https://www.linkedin.com/in/shubhashita-singh"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="contact__circle-icon"
                                            aria-label="LinkedIn Profile"
                                            title="LinkedIn"
                                        >
                                            <i className="bx bxl-linkedin"></i>
                                        </a>

                                        <a
                                            href="mailto:shubhashita.aes@gmail.com"
                                            className="contact__circle-icon"
                                            aria-label="Send Email"
                                            title="Email"
                                        >
                                            <i className="bx bx-envelope"></i>
                                        </a>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
