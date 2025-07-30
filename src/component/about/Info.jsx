import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about about__box">
                <i class='bx  bx-award'  ></i>
                <h3 className="about__title">Experience</h3>
                <span className="about__subtitle">Fresher</span>
            </div>

            <div className="about about__box">
                <i class='bx  bx-briefcase-alt'  ></i>
                <h3 className="about__title">Completed</h3>
                <span className="about__subtitle">5 + Projects</span>
            </div>

            <div className="about about__box">
                <i class='bx  bx-briefcase' ></i>
                <h3 className="about__title">Professional</h3>
                <span className="about__subtitle">Open to work</span>
            </div>
        </div>
    )
}

export default Info