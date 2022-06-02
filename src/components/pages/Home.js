import React from 'react'
import '../../App.css';
import ContentSection from '../ContentSection';
import Footer from '../Footer';
import FractalPage from '../fractalPage';

function Home () {
    return (
        <>
            <FractalPage />
            <ContentSection />
            <Footer />
        </>
    );
}

export default Home;