/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import pomodoroClock from '../app-images/Pomodoro-Clock.png';
import woodyCalculator from '../app-images/React-Calculator.png';
import drumMachine from '../app-images/Drum-Machine.png';
import markdownPreview from '../app-images/Markdown-Preview.png';
import quotesAtRandom from '../app-images/Quotes-At-Random.png';
import vaxine from '../app-images/Vaxine.png';
import warOnCode from '../app-images/War-on-Code.png';
import pingOfPongs from '../app-images/Ping-of-Pongs.png';
import candidate from '../app-images/Candidate.png';
import playlist from '../app-images/Play-List.png';
import bassopedia from '../app-images/Bassopedia.png';
import rushiToonz from '../app-images/Rush-iToonz.png';
import flashCars from '../app-images/Flash-Cars.png';
import barGraph from '../app-images/Bar-Graph.png';
import scatterPlotGraph from '../app-images/Scatterplot-Graph.png';
import heatMap from '../app-images/Heat-Map.png';
import choroplethMap from '../app-images/Choropleth-Map.png';
import treeMap from '../app-images/Tree-Map.png';

const Portfolio = () => {
	return (
		<div id='portfolio' className='portfolio-wrapper'>
			<div className='container'>
				<h1 className='text-uppercase text-center py-5'>Portfolio</h1>
				<div className='image-box-wrapper column justify-content-center'>
					<header>
						<h2>
							<a
								onClick={() =>
									window.open('https://cranky-jones-e3b5b2.netlify.app/')
								}>
								Tree Map with D3
							</a>
						</h2>
					</header>
					<a
						onClick={() =>
							window.open('https://cranky-jones-e3b5b2.netlify.app/')
						}
						className='image fit'>
						<img className='portfolio-image' src={treeMap} alt='Tree Map' />
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://cranky-jones-e3b5b2.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A tree map made with D3 that shows the
						top video games from multiple consoles.
					</p>
					<a
						onClick={() =>
							window.open('https://github.com/jamesnascimento1994/d3-treemap')
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
									window.open('https://zealous-swirles-5aac9b.netlify.app/')
								}>
								Choropleth Map with D3
							</a>
						</h2>
					</header>
					<a
						onClick={() =>
							window.open('https://zealous-swirles-5aac9b.netlify.app/')
						}
						className='image fit'>
						<img
							className='portfolio-image'
							src={choroplethMap}
							alt='Choropleth Map'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://zealous-swirles-5aac9b.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A choropleth map of the United States made with D3 that shows
						monthly global land-surface temperature.
					</p>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/d3-choropleth-map'
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
									window.open('https://vigorous-villani-7b22a0.netlify.app/')
								}>
								Heat Map with D3
							</a>
						</h2>
					</header>
					<a
						onClick={() =>
							window.open('https://vigorous-villani-7b22a0.netlify.app/')
						}
						className='image fit'>
						<img className='portfolio-image' src={heatMap} alt='Heat Map' />
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://vigorous-villani-7b22a0.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A heat map made with D3 that shows monthly global land-surface
						temperature.
					</p>
					<a
						onClick={() =>
							window.open('https://github.com/jamesnascimento1994/d3-heat-map')
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
									window.open('https://nervous-brahmagupta-98bd25.netlify.app/')
								}>
								Scatter Plot Graph with D3
							</a>
						</h2>
					</header>
					<a
						onClick={() =>
							window.open('https://nervous-brahmagupta-98bd25.netlify.app/')
						}
						className='image fit'>
						<img
							className='portfolio-image'
							src={scatterPlotGraph}
							alt='Scatter Plot Graph'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://nervous-brahmagupta-98bd25.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A scatter plot graph made with D3 that shows drug use in
						professional bike racing.
					</p>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/d3-scatterplot-graph'
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
									window.open('https://blissful-clarke-03a380.netlify.app/')
								}>
								Bar Graph with D3
							</a>
						</h2>
					</header>
					<a
						onClick={() =>
							window.open('https://blissful-clarke-03a380.netlify.app/')
						}
						className='image fit'>
						<img className='portfolio-image' src={barGraph} alt='Bar Graph' />
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://blissful-clarke-03a380.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A bar graph made with D3 that shows GDP growth in America.
					</p>
					<a
						onClick={() =>
							window.open('https://github.com/jamesnascimento1994/d3-bar-chart')
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
									window.open('https://musing-pike-0a3d02.netlify.app/')
								}>
								Pomodoro Clock
							</a>
						</h2>
						<a onClick={() => window.open('https://youtu.be/Xz-dPDKymQs')}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() =>
							window.open('https://musing-pike-0a3d02.netlify.app/')
						}
						className='image fit'>
						<img
							className='portfolio-image'
							src={pomodoroClock}
							alt='Pomodoro Clock'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://musing-pike-0a3d02.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A pomodoro clock created with Babel compiled React, HTML, CSS, and
						JavaScript
					</p>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/pomodoro-clock'
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
									window.open('https://woody-calculator.netlify.app/')
								}>
								Woody Calculator
							</a>
						</h2>
						<a onClick={() => window.open('https://youtu.be/qAydthZMdxM')}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() => window.open('https://woody-calculator.netlify.app/')}
						className='image fit'>
						<img
							className='portfolio-image'
							src={woodyCalculator}
							alt='JavaScript Calculator'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://woody-calculator.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A calculator created with HTML, CSS, JavaScript, and React.
					</p>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/javascript-calculator'
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
									window.open('https://jnas-drum-machine.netlify.app/')
								}>
								Drum Machine
							</a>
						</h2>
						<a onClick={() => window.open('https://youtu.be/s7j-zln1984')}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() =>
							window.open('https://jnas-drum-machine.netlify.app/')
						}
						className='image fit'>
						<img
							className='portfolio-image'
							src={drumMachine}
							alt='Drum Machine'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://jnas-drum-machine.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A drum machine created with Babel compiled React, JavaScript,
						Bootstrap, and SASS/SCSS.
					</p>
					<a
						onClick={() =>
							window.open('https://github.com/jamesnascimento1994/drum-machine')
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
										'https://mysterious-fortress-74020.herokuapp.com/'
									)
								}>
								Markdown Preview
							</a>
						</h2>
						<a onClick={() => window.open('https://youtu.be/N826LEGevzU')}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() =>
							window.open('https://mysterious-fortress-74020.herokuapp.com/')
						}
						className='image fit'>
						<img
							className='portfolio-image'
							src={markdownPreview}
							alt='Markdown Preview'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://mysterious-fortress-74020.herokuapp.com/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						A markdown preview app. Built with JavaScript, React, CSS,
						Bootstrap, and Marked.
					</p>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/markdown-preview'
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
									window.open('hhttps://quotes-at-random.netlify.app/')
								}>
								Quotes at Random
							</a>
						</h2>
						<a onClick={() => window.open('https://youtu.be/QiUhcOO8FeA')}>
							YouTube Demo
						</a>
					</header>
					<a
						onClick={() => window.open('https://quotes-at-random.netlify.app/')}
						className='image fit'>
						<img
							className='portfolio-image'
							src={quotesAtRandom}
							alt='Quotes at Random'
						/>
					</a>

					<h5>
						<a
							onClick={() =>
								window.open('https://quotes-at-random.netlify.app/')
							}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						An app that generates random quotes. Built with HTML, CSS,
						JavaScript, Bootstrap, and jQuery
					</p>
					<a
						onClick={() =>
							window.open(
								'https://github.com/jamesnascimento1994/quotesAtRandom'
							)
						}
						className='repo-link-button'>
						GitHub Repository Link
					</a>
				</div>
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
					<p className='app-info'>
						A healthcare application designed to make vaccine scheduling simple.
						This was created for a hackathon and I worked with two other
						developers and three UX designers. This app was built with HTML,
						CSS, JavaScript, React, and Bootstrap.
					</p>
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
					<p className='app-info'>
						A code challenging app to test your JavaScript skills! Created for a
						hackathon and was built with HTML, CSS, and JavaScript.
					</p>
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
					<p className='app-info'>
						A ping pong game with Runescape style CSS. I made this for a
						hackathon and the other programming languages I used were HTML and
						JavaScript.
					</p>
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
					<p className='app-info'>
						A voting app to inspire young people to vote. This was created for a
						hackathon and I worked with two other developers and four UX
						designers. This was built with HTML, CSS, JavaScript, React, jQuery,
						and bootstrap.
					</p>
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
					<p className='app-info'>
						An application that allows you to create a list of your favorite
						video games and their soundtracks. I worked with three other
						developers. This is a full-stack application. Built with MongoDB,
						Express.js, React.js, and Node.js.
					</p>
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
					<p className='app-info'>
						An app made to show my favorite bass players and their genres! This
						is full-stack and was built with HTML, CSS, JavaScript, React,
						bootstrap, Python, and Django.
					</p>
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
								onClick={() => window.open('https://rush-itoonz.netlify.app/')}>
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
						onClick={() => window.open('https://rush-itoonz.netlify.app/')}
						className='image fit'>
						<img
							className='portfolio-image'
							src={rushiToonz}
							alt='Rush iToonz'
						/>
					</a>

					<h5>
						<a onClick={() => window.open('https://rush-itoonz.netlify.app/')}>
							Click Here to view Deployed App
						</a>
					</h5>
					<p className='app-info'>
						An application displaying the discography by one of my favorite
						bands, RUSH! Built with HTML, CSS, JavaScript, and React.
					</p>
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
					<p className='app-info'>
						A flash card game to test your knowledge of car brands and models.
						The first application I have ever created and deployed. Built with
						HTML, CSS, and JavaScript.
					</p>
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
