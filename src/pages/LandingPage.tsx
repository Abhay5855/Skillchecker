import React from 'react';
import UseCase from '../components/landing/UseCase';
import Hero from '../components/landing/Hero';
import Navbar from '../components/landing/Navbar';
import HowItWorks from '../components/landing/HowItWorks';
import Demo from '../components/landing/Demo';
import Footer from '../components/landing/Footer';

const LandingPage = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<HowItWorks />
			<UseCase />
			<Demo />
			<Footer />
		</>
	);
};

export default LandingPage;
