import React from 'react'
import author from '../me.png';

const About = () => {
    return (
			<div id="about" className='container py-5'>
				<div className='row'>
			<div className='col-lg-6 col-xm-12'>
            <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..."/>
            </div>
            </div>
			<div className='col-lg-6 col-xm-12'>
                <h1 className="about-heading">About Me</h1>
                <p>
                I am a software engineer located in the East Coast. The applications I enjoy making are friendly to the user and I think that is super important especially since our current social climate is rather unfriendly.
                </p>
                <br/>
                <p>
                When challenges arise and I am under pressure, I remain calm, positive, and approach each issue with a growth mindset. This maximizes my productivity and efficiency.
                </p>
            </div>
				</div>
			</div>
		);
}

export default About
