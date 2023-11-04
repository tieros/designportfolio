import HeroDesktopImage from '../assets/HeroImage.png';
import MobileHeroImage from '../assets/MobileHero.jpg';
import Arrow from '../assets/heroarrow.svg?react';
const Hero = () => (
    <div className='flex justify-center relative' id='home'>
        <div className='flex flex-col justify-center max-w-[800px] sm:gap-4 !2xl:gap-8'>
            <img
                src={MobileHeroImage}
                alt='Image of Elif and Tiera'
                className='sm:hidden m-auto w-full'
            />
            <h1
                id='mainTitle'
                className='font-Lalezar text-center sm:text-left mb-5'
            >
                I love ui/ux design
            </h1>
            <div className='font-Poppins max-w-[600px] flex flex-col gap-4 px-3 sm:px-0'>
                <p>
                    As I create digital experiences, my sketchbook comes alive
                    with adventures alongside my doggie girl Tiera.
                </p>
                <p>Welcome to my creative world!</p>
            </div>
            <Arrow className='sm:hidden self-center w-20' />
        </div>
        <div className='hero-arrow-svg-container'>
            <Arrow className='hidden lg:block absolute bottom-0 left-[40%] items-end h-[100px] self-end' />
        </div>
        <img
            src={HeroDesktopImage}
            alt='Image of Elif and Tiera'
            className='hidden sm:flex sm:w-[318px] lg:w-[500px]'
        />
    </div>
);

export default Hero;
