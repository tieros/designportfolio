import Hero from './Hero';
import Work from './Work';
import MyStory from './MyStory';
import Contact from './Contact';
import Footer from './Footer';
import Noise from '../assets/noise.png';
import Logo from '../assets/redlogo.svg?react';
const LandingPage = () => (
    <div className='custom-container'>
        <img src={Noise} className='noise-image mix-blend-screen' />
        <header className='flex justify-end sm:justify-center items-center sm:relative m-auto sticky top-0 bg-bg z-30 md:py-2 lg:py-6'>
            <div className='absolute left-0'>
                <Logo />
            </div>
            <nav className='flex gap-10 font-Poppins text-md sm:text-xl p-4'>
                <a href='#work'>Work</a>
                <a href='#mystory'>My Story</a>
                <a href='#contact'>Contact</a>
            </nav>
        </header>
        <div className='flex flex-col lg:gap-28'>
            <Hero />
            <Work id='work' />
            <MyStory id='mystory' />
            <Contact id='contact' />
            <Footer />
        </div>
    </div>
);
export default LandingPage;
