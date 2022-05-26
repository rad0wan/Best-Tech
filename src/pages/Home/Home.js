import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BussinessSummary';
import Navbar from '../shared/Navbar';
import OurParts from './OurParts';
import Reviews from './Reviews';
import AboutUs from './AboutUs';
import Feature from './Feature';
import Footer from '../shared/Footer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurParts></OurParts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <AboutUs></AboutUs>
            <Feature></Feature>
            <Footer></Footer>
        </div>
    );
};

export default Home;