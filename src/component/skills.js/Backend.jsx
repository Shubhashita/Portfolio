import React from 'react'
import './skills.css'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Development & Fundamentals </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Backend</h3>
                            <div className='skills__list'>
                                <span className="skills__item">Node.js</span>
                                <span className="skills__item">Express.js</span>
                                <span className="skills__item">Socket.IO</span>
                                <span className="skills__item">RESTful APIs</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Database</h3>
                            <div className='skills__list'>
                                <span className="skills__item">SQL/MySQL</span>
                                <span className="skills__item">PostgreSQL</span>
                                <span className="skills__item">MongoDB</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Languages</h3>
                            <div className='skills__list'>
                                <span className="skills__item">Java</span>
                                <span className="skills__item">C/C++</span>
                                <span className="skills__item">Python</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Tools & Technologies</h3>
                            <div className='skills__list'>
                                <span className="skills__item">Git</span>
                                <span className="skills__item">GitHub</span>
                                <span className="skills__item">VS Code</span>
                                <span className="skills__item">Postman</span>
                                <span className="skills__item">Jira Board</span>
                                <span className="skills__item">Docker</span>
                                <span className="skills__item">ORM/ODM</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Core CS Constants</h3>
                            <div className='skills__list'>
                                <span className="skills__item">OOPs</span>
                                <span className="skills__item">Data Structure</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend