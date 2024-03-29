import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-particles-js';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
// import Contacts from './components/Contacts';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Particles
				className='particles-canvas'
				params={{
					particles: {
						number: {
							value: 20,
							density: {
								enable: true,
								value_area: 900,
							},
						},
						shape: {
							type: 'circle',
							stroke: {
								width: 6,
								color: '#c6c6c6',
							},
						},
					},
				}}
			/>
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Portfolio />
			{/* <Contacts /> */}
			<Footer />
		</>
	);
}

export default App;
