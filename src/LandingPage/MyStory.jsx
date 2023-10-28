import AboutItem from '../Components/AboutItem';
import Tieros from '../assets/tieros.png';
import Heart from '../assets/heart.svg?react';
import Theatre from '../assets/curtains.png';
import Diploma from '../assets/diploma.png';
import Code from '../assets/code.png';
import Hand from '../assets/hand.png';
import Nerd from '../assets/nerd.png';
import Paint from '../assets/paint.png';
import Idea from '../assets/idea.png';
import ReactIcon from '../assets/ReactIcon.png';
import Design from '../assets/Design.png';
const MyStory = () => (
    <section id='mystory' className='flex flex-col items-center'>
        <h1 className='text-center mb-16'>My Story</h1>
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
                imageSrc={Tieros}
                bgColor='bg-pink'
            />
            <AboutItem
                bgColor={'bg-blue'}
                imageSrc={Nerd}
                text='2013 - I am building art & social science education, combining Theatre and Sociology.'
            />
            <AboutItem
                text='2015 - Graduated from theatre, learning “empathy” unknowingly paved the way for my success in UX design.'
                imageSrc={Theatre}
                bgColor={'bg-purple'}
            />
            <AboutItem
                imageSrc={Diploma}
                bgColor={'bg-yellow'}
                text='2016 - Tiera is a big girl now, so am I, enhancing my social sciences background with Political Science Masters.'
            />
            <AboutItem
                imageSrc={Code}
                bgColor={'bg-green'}
                text="2019 - Mm how do you make websites? I've taken up a new hobby of collecting HTML/CSS/JS certificates"
            />
            <AboutItem
                imageSrc={Idea}
                bgColor={'bg-reddish'}
                text='2020 - Combine web tech & social sciences: Got into Digital Humanities Phd Programme.'
            />
            <AboutItem
                imageSrc={ReactIcon}
                bgColor={'bg-blue'}
                text='2021 - People say there is a way cooler thing in web dev, lets dive into React. '
            />
            <AboutItem
                imageSrc={Hand}
                bgColor={'bg-purple'}
                text='2022 - Be a frontend developer: DONE! '
            />
            <AboutItem
                imageSrc={Paint}
                bgColor='bg-pink'
                text='2023 - I am having a great time on this design tasks! Heey, new discovery found: I am a UI/UX Design lover!'
            />
            <AboutItem
                imageSrc={Design}
                bgColor={'bg-yellow'}
                text='2023 - Challenge accepted: Be what you love, be UI/UX Designer.'
            />
        </div>
    </section>
);
export default MyStory;
