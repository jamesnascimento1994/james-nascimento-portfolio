/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
// REACT FONT AWESOME INPUT
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-lg navbar-light bg-dark fixed-top'>
			<div className='container'>
				<Link to="home" className='navbar-brand'>
					<h3 className='header'>James Nascimento</h3>
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-toggle='collapse'
					data-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'>
					<FontAwesomeIcon icon={faBars} style={{ color: '#fff' }} />
				</button>

				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item active'>
							<Link smooth={true} to='home' className='nav-link' href='#'>
								Home <span className='sr-only'>(current)</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								smooth={true}
								to='about'
								offset={-110}
								className='nav-link'
								href='#'>
								About Me
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								smooth={true}
								to='skills'
								offset={-110}
								className='nav-link'
								href='#'>
								Skills
							</Link>
						</li>
						<li className='nav-item'>
							<Link
								smooth={true}
								to='portfolio'
								offset={-110}
								className='nav-link'
								href='#'>
								Portfolio
							</Link>
						</li>
						<li className='nav-item'>
							<a
								className='nav-link'
								target='_blank'
								href='https://github.com/jamesnascimento1994/jamesnascimento1994.github.io/files/6019308/James.Nascimento.Resume.pdf'
								download='James Nascimento Resume'>
								Resume
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
