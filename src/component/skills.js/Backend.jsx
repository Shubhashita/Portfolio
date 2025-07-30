import React from 'react'
import './skills.css'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Languages</h3>
                            <div className='skills__list'>
                                <h4>Java, C++ </h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Frameworks</h3>
                            <div className='skills__list'>
                                <h4>Node.js, Express.js</h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Database</h3>
                            <div className='skills__list'>
                                <h4>MySQL, PostgreSQL, SQL</h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Tools</h3>
                            <div className='skills__list'>
                                <h4>Git, GitHub, Postman, API, Socket.IO, bcrypt, Firebase</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend