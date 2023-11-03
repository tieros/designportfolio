import AboutItem from '../Components/AboutItem';
import Tieros from '../assets/tieros.png';
import Heart from '../assets/heart.svg?react';
import Theatre from '../assets/MaskHappy.svg';
import Diploma from '../assets/Certificate.svg';
import Code from '../assets/Code.svg';
import Hand from '../assets/HandsClapping.svg';
import Nerd from '../assets/GraduationCap.svg';
import Paint from '../assets/PaintBrush.svg';
import Idea from '../assets/sun.svg';
import ReactIcon from '../assets/Atom.svg';
import Design from '../assets/Palette.svg';
import AnimatedCvSVG from '../Components/AnimatedCvSvg';
const MyStory = () => {
    return (
        <section id='mystory' className='flex flex-col items-center relative'>
            <h1 className='text-center mb-16'>My Story</h1>
            <a
                href='/CV.pdf'
                target='_blank'
                rel='noopener noreferrer'
                className='absolute top-[2%] lg:top-[5%] right-0 lg:right-[8%]'
            >
                <AnimatedCvSVG />
            </a>
            <div className='flex flex-col gap-5 relative'>
                <AboutItem
                    text={
                        <div className='inline-flex items-center gap-2'>
                            <span className='action-text'>
                                2011 - Tiera came to my life
                            </span>
                            <Heart className='w-5' />
                        </div>
                    }
                    bgColor='bg-pink'
                >
                    <img src={Tieros} />
                </AboutItem>
                <AboutItem
                    bgColor={'bg-blue'}
                    text='2013 - I am building art & social science education, combining Theatre and Sociology.'
                >
                    <img src={Nerd} />
                </AboutItem>
                <AboutItem
                    text='2015 - Graduated from theatre, learning “empathy” unknowingly paved the way for my success in UX design.'
                    bgColor={'bg-purple'}
                >
                    <img src={Theatre} />
                </AboutItem>
                <AboutItem
                    bgColor={'bg-yellow'}
                    text='2016 - Tiera is a big girl now, so am I, enhancing my social sciences background with Political Science Masters.'
                >
                    <img src={Diploma} />
                </AboutItem>
                <AboutItem
                    bgColor={'bg-green'}
                    text="2019 - Mm how do you make websites? I've taken up a new hobby of collecting HTML/CSS/JS certificates"
                >
                    <img src={Code} />
                </AboutItem>
                <AboutItem
                    bgColor={'bg-reddish'}
                    text='2020 - Combine web tech & social sciences: Got into Digital Humanities Phd Programme.'
                >
                    <img src={Idea} />
                </AboutItem>
                <AboutItem
                    bgColor={'bg-blue'}
                    text='2021 - People say there is a way cooler thing in web dev, lets dive into React. '
                >
                    <img src={ReactIcon} />
                </AboutItem>
                <AboutItem
                    bgColor={'bg-purple'}
                    text='2022 - Be a frontend developer: DONE! '
                >
                    <img src={Hand} />
                </AboutItem>
                <AboutItem
                    bgColor='bg-pink'
                    text='2023 - I am having a great time on this design tasks! Heey, new discovery found: I am a UI/UX Design lover!'
                >
                    <img src={Paint} />
                </AboutItem>
                <AboutItem
                    bgColor={'bg-yellow'}
                    text='2023 - Challenge accepted: Be what you love, be UI/UX Designer.'
                >
                    <img src={Design} />
                </AboutItem>
            </div>
        </section>
    );
};
export default MyStory;
