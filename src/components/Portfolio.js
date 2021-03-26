/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import vaxine from '../app-images/Vaxine.png';
import warOnCode from '../app-images/War-on-Code.png';
import pingOfPongs from '../app-images/Ping-of-Pongs.png';
import candidate from '../app-images/Candidate.png';
import playlist from '../app-images/Play-List.png';
import bassopedia from '../app-images/Bassopedia.png';
import rushiToonz from '../app-images/Rush-iToonz.png';
import flashCars from '../app-images/Flash-Cars.png';

const Portfolio = () => {

	return (
		<div id='portfolio' className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>Portfolio</h1>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a onClick={() => window.open('https://vaxine.netlify.app/')}>
								Vaxine
							</a>
						</h2>
						<a onClick={() => window.open('https://youtu.be/qRE26LH-Nv4')}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() => window.open('https://vaxine.netlify.app/')}
						className='image fit'>
						<img className='portfolio-image' src={vaxine} alt='Vaxine' />
					</a>

					<h5>
						<a onClick={() => window.open('https://vaxine.netlify.app/')}>
							Click Here to view Deployed App
						</a>
					</h5>
					<a
						onClick={() =>
							window.open(
								'https://github.com/Covid-Bookings/Front-End-Covid-Bookings'
							)
						}
						className='repo-link-button'>
						GitHub Repository Link
					</a>
				</div>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() => window.open('https://war-on-code.netlify.app/')}>
								War on Code
							</a>
						</h2>
						<a
							onClick={() =>
								window.open(
									'https://www.youtube.com/watch?v=wGL_X_HcMT4&feature=youtu.be'
								)
							}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() => window.open('https://war-on-code.netlify.app/')}
						className='image fit'>
						<img
							className='portfolio-image'
							src={warOnCode}
							alt='War on Code'
						/>
					</a>

					<h5>
						<a onClick={() => window.open('https://war-on-code.netlify.app/')}>
							Click Here to view Deployed App
						</a>
					</h5>
					<a
						onClick={() =>
							window.open('https://github.com/jamesnascimento1994/war-on-code')
						}
						className='repo-link-button'>
						GitHub Repository Link
					</a>
				</div>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() =>
									window.open('https://ping-of-pongs.netlify.app/')
								}>
								Ping of Pongs
							</a>
						</h2>
						<a
							onClick={() =>
								window.open(
									'https://www.youtube.com/watch?v=EmL6-GMzuqE&feature=youtu.be'
								)
							}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() => window.open('https://ping-of-pongs.netlify.app/')}
						className='image fit'>
						<img
							className='portfolio-image'
							src={pingOfPongs}
							alt='Ping of Pongs'
						/>
					</a>

					<h5>
						<a
							onClick={() => window.open('https://ping-of-pongs.netlify.app/')}>
							Click Here to view Deployed App
						</a>
					</h5>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/ping-of-pongs'
							)
						}
						className='repo-link-button'>
						GitHub Repository Link
					</a>
				</div>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() =>
									window.open('https://codesigners-candidates.netlify.app/')
								}>
								Candidate
							</a>
						</h2>
						<a
							onClick={() =>
								window.open(
									'https://www.youtube.com/watch?v=vEq_gvCIukI&feature=youtu.be'
								)
							}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() =>
							window.open('https://codesigners-candidates.netlify.app/')
						}
						className='image fit'>
						<img className='portfolio-image' src={candidate} alt='Candidate' />
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://codesigners-candidates.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<a
						onClick={() =>
							window.open('https://github.com/mendokuse3/voting-app-deployment')
						}
						className='repo-link-button'>
						GitHub Repository Link
					</a>
				</div>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() =>
									window.open('https://salty-cliffs-88075.herokuapp.com/')
								}>
								Play-List
							</a>
						</h2>
						<a
							onClick={() =>
								window.open(
									'https://www.youtube.com/watch?v=tUT6lpVYvBY&feature=youtu.be'
								)
							}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() =>
							window.open('https://salty-cliffs-88075.herokuapp.com/')
						}
						className='image fit'>
						<img className='portfolio-image' src={playlist} alt='Play-List' />
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://salty-cliffs-88075.herokuapp.com/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>

					<a
						onClick={() =>
							window.open('https://github.com/teamscrum2000/font-end-uhhh')
						}
						className='repo-link-button'>
						GitHub Repository Link (Frontend)
					</a>
					<a
						onClick={() =>
							window.open('https://github.com/teamscrum2000/back-end-uhhh')
						}
						className='repo-link-button'>
						GitHub Repository Link (Backend)
					</a>
				</div>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() =>
									window.open('https://bassopedia.herokuapp.com/')
								}>
								Bassopedia
							</a>
						</h2>
						<a
							onClick={() =>
								window.open(
									'https://www.youtube.com/watch?v=tUT6lpVYvBY&feature=youtu.be'
								)
							}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() => window.open('https://bassopedia.herokuapp.com/')}
						className='image fit'>
						<img
							className='portfolio-image'
							src={bassopedia}
							alt='Bassopedia'
						/>
					</a>

					<h5>
						<a onClick={() => window.open('https://bassopedia.herokuapp.com/')}>
							Click Here to view Deployed App
						</a>
					</h5>
					<a
						onClick={() =>
							window.open('https://github.com/jamesnascimento1994/bassopedia')
						}
						className='repo-link-button'>
						GitHub Repository Link (Frontend)
					</a>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/project-four-backend'
							)
						}
						className='repo-link-button'>
						GitHub Repository Link (Backend)
					</a>
				</div>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() =>
									window.open('https://rushitoonzapp.herokuapp.com/')
								}>
								Rush iToonz
							</a>
						</h2>
						<a
							onClick={() =>
								window.open(
									'https://www.youtube.com/watch?v=vEq_gvCIukI&feature=youtu.be'
								)
							}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() => window.open('https://rushitoonzapp.herokuapp.com/')}
						className='image fit'>
						<img
							className='portfolio-image'
							src={rushiToonz}
							alt='Rush iToonz'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://rushitoonzapp.herokuapp.com/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/sei-project-two-rushitoonz'
							)
						}
						className='repo-link-button'>
						GitHub Repository Link
					</a>
				</div>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() =>
									window.open(
										'https://jamesnascimento1994.github.io/flash-cars/'
									)
								}>
								Flash Cars
							</a>
						</h2>
						<a
							onClick={() =>
								window.open('https://www.youtube.com/watch?v=FJ3OR_eyuNo&t=2s')
							}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() =>
							window.open('https://jamesnascimento1994.github.io/flash-cars/')
						}
						className='image fit'>
						<img className='portfolio-image' src={flashCars} alt='Flash Cars' />
					</a>
					<h5>
						<a
							onClick={() =>
								window.open('https://jamesnascimento1994.github.io/flash-cars/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<a
						onClick={() =>
							window.open('https://github.com/jamesnascimento1994/flash-cars')
						}
						className='repo-link-button'>
						GitHub Repository Link
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
