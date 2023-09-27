import HeroUnderline from '../assets/HeroUnderline.png';
import HeroDesktopImage from '../assets/HeroImage.png';
import MobileHeroImage from '../assets/MobileHero.png';
const Hero = () => (
    <>
        <img
            src={MobileHeroImage}
            alt='Image of Elif and Tiera'
            width={390}
            height={291}
            className='sm:hidden m-auto'
        />
        <div className='m-[12px] flex items-center max-w-[1440px] lg:m-auto md:justify-between lg:justify-center'>
            <div className='font-Lalezar text-[72px] sm:text-[86px] lg:text-[96px] flex flex-col justify-center w-full items-center lg:items-start lg:px-[3%] lg:max-w-[717px] md:max-w-[400px]'>
                <div className='flex flex-col items-center'>
                    <h1>I design</h1>
                    <img
                        src={HeroUnderline}
                        alt='underline decoration'
                        width={140}
                        height={100}
                        className='mt-[-20px]'
                    />
                </div>
                <h1 className='sm:ml-[2em]'>&</h1>
                <div className='sm:ml-[3em]'>
                    <h1>develop</h1>
                </div>
                <p className='font-Poppins text-lg'>
                    Hi, I&apos;m Elif, a UI/UX designer and frontend developer.
                    As I create digital experiences, my sketchbook comes alive
                    with adventures alongside my doggie girl Tiera. Welcome to
                    my creative world!
                </p>
            </div>

            <img
                src={HeroDesktopImage}
                alt='Image of Elif and Tiera'
                className='hidden sm:block md:w-[318px] lg:w-[550px] lg:h-[720px]'
            />
        </div>
    </>
);
export default Hero;
