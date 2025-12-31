import React from 'react'
import './skills.css'

const Frontend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Frontend </h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Languages</h3>
                            <div className='skills__list'>
                                <span className="skills__item">HTML</span>
                                <span className="skills__item">CSS</span>
                                <span className="skills__item">JavaScript</span>
                            </div>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div>
                            <h3 className="skills__name">Library/Frameworks</h3>
                            <div className='skills__list'>
                                <span className="skills__item">React.js</span>
                                <span className="skills__item">Bootstrap</span>
                                <span className="skills__item">jQuery</span>
                                <span className="skills__item">Material UI</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend