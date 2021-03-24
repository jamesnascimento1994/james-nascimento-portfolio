/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-scroll';
import {
    LinkedinIcon,
    // LinkedinShareButton,
} from 'react-share';
import {Icon} from '@iconify/react';
import githubIcon from '@iconify-icons/codicon/github';

const Footer = () => {
    return (
			<div className='footer'>
				<div className='container'>
					<div className='row' id="footer-row">
						<div className='col-lg-4 col-md-6 col-sm-6'>
							<div className='d-flex'>
								<p>Staten Island, NY</p>
							</div>
							<div className='d-flex'>
								<a href='tel:555-555-5555'>+1(718)612-6422</a>
							</div>
							<div className='d-flex'>
								<p>james.nascimento94@yahoo.com</p>
							</div>
						</div>
						<div className='col-lg-3 col-md-2 col-sm-6'>
							<div className='row'>
								<div className='col'>
									<Link smooth={true} to='home' className='footer-nav' href='#'>
										Home
									</Link>
									<br />
									<Link
										smooth={true}
										to='about'
										offset={-110}
										className='footer-nav'
										href='#'>
										About Me
									</Link>
								</div>
								<div className='col'>
									<Link
										smooth={true}
										to='skills'
										offset={-110}
										className='footer-nav'
										href='#'>
										Skills
									</Link>
									<br />
									<Link
										smooth={true}
										to='portfolio'
										offset={-110}
										className='footer-nav'
										href='#'>
										Portfolio
									</Link>
								</div>
									<a
										className='footer-nav'
										target='_blank'
										href='https://github.com/jamesnascimento1994/jamesnascimento1994.github.io/files/6019308/James.Nascimento.Resume.pdf'
										download='James Nascimento Resume'>
										Resume
									</a>
							</div>
						</div>
						<div className='col-lg-5 col-md-5 col-sm-6 align-items-center'>
							<div className='d-flex justify-content-center'>
								<a
									onClick={() =>
										window.open('https://www.linkedin.com/in/jnas94/')
									}>
									<LinkedinIcon className='mx-3' size={36} />
								</a>
								<a
									onClick={() =>
										window.open('https://github.com/jamesnascimento1994')
									}>
									<Icon icon={githubIcon} height={55} width='70' />
								</a>
							</div>

							<div className='pt-3 text-center'>
								Copyright&copy;
								{new Date().getFullYear()}&nsbp;James Nascimento | All Rights
								Reserved
							</div>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Footer
