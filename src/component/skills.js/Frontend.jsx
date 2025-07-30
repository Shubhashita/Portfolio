import React from 'react'
import './skills.css'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend Developer </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Languages</h3>
                            <div className='skills__list'>
                                <h4>HTML, CSS, JavaScript </h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Frameworks</h3>
                            <div className='skills__list'>
                                <h4>React.js, BootStrap, jQuery, Material UI, Tailwind CSS</h4>
                            </div>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Tools</h3>
                            <div className='skills__list'>
                                <h4>Vs Code</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend