import IconContainer from '../Components/IconContainer';
import ContactPhone from '../assets/phonepng.png';

import LinkedIn from '../assets/linkedin.svg?react';
import Mail from '../assets/mail.svg?react';
import Behance from '../assets/behance.svg?react';
import Dribble from '../assets/dribble.svg?react';

const Contact = () => (
    <section
        id='contact'
        className='flex flex-col items-center relative mb-20 lg:mb-80'
    >
        <span className='p-4 text-[#EEEDD9] rotate-[15deg] lg:rotate-[-25deg] absolute top-1/2 left-[-10%] text-lg lg:text-4xl whitespace-nowrap overflow-hidden w-[400px] sm:w-[900px] lg:w-[1500px]'>
            User Interface | User Experience | Web | Mobile | Research |
            Branding | User Flow | Journey Map | User Interface | User
            Experience | Web | Mobile | Research | Branding |
        </span>
        <span className='p-4 text-[#EEEDD9] rotate-[-15deg] lg:rotate-[25deg] absolute top-1/2 left-[-10%] text-lg lg:text-4xl whitespace-nowrap overflow-hidden w-[400px] sm:w-[900px] lg:w-[1500px]'>
            Web | Mobile | Research | Branding | User Flow | Journey Map |
            Branding | User Experience | Web | Mobile | Research | Branding |
        </span>
        <h1 className='pb-10'>Contact</h1>
        <img
            className='absolute left-[5%] lg:top-[10%] lg:left-[10%] w-[90px] lg:w-[169px]'
            src={ContactPhone}
            alt='phone-illustration'
        />
        <div className='w-[292px] sm:w-[487px] flex flex-col items-center text-center rounded-full gap-8 z-20 '>
            <h5 className=' bg-bg p-4 sm:p-7 lg:p-12'>
                Some platforms you can reach out to me, check on my work, and
                say me hi!
            </h5>
            <div className='flex gap-8'>
                <IconContainer bgColor={'bg-reddish'}>
                    <a href='mailto:sutanyeri@gmail.com'>
                        <Mail />
                    </a>
                </IconContainer>
                <IconContainer bgColor={'bg-[#3BB3BD]'}>
                    <a href='https://www.linkedin.com/in/elifsutanyeri/'>
                        <LinkedIn />
                    </a>
                </IconContainer>
                <IconContainer bgColor={'bg-yellow'}>
                    <a href='https://www.behance.net/elifsudesign'>
                        <Behance />
                    </a>
                </IconContainer>
                <IconContainer bgColor={'bg-pink'}>
                    <a href='https://www.behance.net/elifsudesign'>
                        <Dribble />
                    </a>
                </IconContainer>
            </div>
        </div>
    </section>
);

export default Contact;
