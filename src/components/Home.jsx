import React from 'react';
import ImgSlider from './ImgSlider';
import NavBar from './NavBar';
import Viewers from './Viewers';

const Home = () => {
    return (
        <section className=' bg-[url("/src/assets/images/home-background.png")] w-auto h-auto bg-cover bg-repeat-y'>
            <NavBar />
            <ImgSlider />
            <Viewers />
        </section>
    )
}

export default Home;