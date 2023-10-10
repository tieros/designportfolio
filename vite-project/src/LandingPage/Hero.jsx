import HeroDesktopImage from '../assets/HeroImage.png';
import MobileHeroImage from '../assets/MobileHero.png';
const Hero = () => (
    <div className='flex justify-center'>
        <div className='flex flex-col justify-center max-w-[800px] gap-4 sm:gap-0'>
            <img
                src={MobileHeroImage}
                alt='Image of Elif and Tiera'
                className='sm:hidden m-auto w-full'
            />
            <h1 className='font-Lalezar'>I love ui/ux design</h1>
            <div className='font-Poppins max-w-[600px] flex flex-col gap-4'>
                <p>
                    As I create digital experiences, my sketchbook comes alive
                    with adventures alongside my doggie girl Tiera.
                </p>
                <p>Welcome to my creative world!</p>
            </div>
        </div>
        <img
            src={HeroDesktopImage}
            alt='Image of Elif and Tiera'
            className='hidden sm:flex sm:w-[318px] lg:w-[550px]'
        />
    </div>
);

export default Hero;
