import Hero from './Hero';
import Work from './Work';
import MyStory from './MyStory';
import Contact from './Contact';
import Footer from './Footer';
import Noise from '../assets/noise.png';
import Logo from '../assets/redlogo.svg?react';
import NavUnderline from '../assets/navunderline.svg?react';
const LandingPage = () => (
    <div className='custom-container'>
        <img src={Noise} className='noise-image mix-blend-screen' />
        <header className='flex justify-end sm:justify-center items-center sm:relative m-auto sticky top-0 bg-bg z-30 md:pt-2 lg:pt-6'>
            <div className='hidden sm:block absolute left-0'>
                <a href='#home'>
                    <Logo />
                </a>
            </div>
            <nav className='flex gap-2 sm:gap-10 justify-between sm:justify-center font-Poppins text-sm sm:text-base lg:text-xl p-4  w-full whitespace-nowrap'>
                <a href='#home' className='sm:hidden'>
                    <Logo />
                </a>
                <a href='#work' className='nav-item flex flex-col items-center'>
                    Work
                    <NavUnderline />
                </a>
                <a
                    href='#mystory'
                    className='nav-item flex flex-col items-center'
                >
                    My Story
                    <NavUnderline />
                </a>
                <a
                    href='#contact'
                    className='nav-item flex flex-col items-center'
                >
                    Contact
                    <NavUnderline />
                </a>
            </nav>
        </header>
        <div className='flex flex-col lg:gap-10'>
            <Hero id='home' />
            <Work id='work' />
            <MyStory id='mystory' />
            <Contact id='contact' />
            <Footer />
        </div>
    </div>
);
export default LandingPage;
