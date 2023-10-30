import IconContainer from '../Components/IconContainer';
import LinkedIn from '../assets/linkedin.svg?react';
import Mail from '../assets/mail.svg?react';
import Behance from '../assets/behance.svg?react';
import Dribble from '../assets/dribble.svg?react';
import Doggie from '../assets/doggie.svg?react';

const Contact = () => (
    <section
        id='contact'
        className='flex flex-col items-center relative mb-20 lg:mb-40'
    >
        <h1 className='pb-10'>Contact</h1>
        <div className='flex relative w-full flex-col-reverse lg:flex-row items-center gap-8 lg:gap-0'>
            <div className='basis-1/2 w-[292px] sm:w-[487px] flex flex-col items-center justify-center text-center rounded-full gap-8 md:px-[5%]'>
                <h5 className=' bg-bg p-4 sm:p-7 lg:p-12'>
                    Some platforms you can reach out to me, check on my work,
                    and say me hi!
                </h5>
                <div className='flex gap-8'>
                    <IconContainer bgColor={'bg-reddish'}>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='mailto:sutanyeri@gmail.com'
                        >
                            <Mail />
                        </a>
                    </IconContainer>
                    <IconContainer bgColor={'bg-[#3BB3BD]'}>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.linkedin.com/in/elifsutanyeri/'
                        >
                            <LinkedIn />
                        </a>
                    </IconContainer>
                    <IconContainer bgColor={'bg-yellow'}>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.behance.net/elifsudesign'
                        >
                            <Behance />
                        </a>
                    </IconContainer>
                    <IconContainer bgColor={'bg-pink'}>
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='https://www.dribble.com/elifsudesign'
                        >
                            <Dribble />
                        </a>
                    </IconContainer>
                </div>
            </div>
            <div className='basis-1/2 flex flex-col justify-end contact-doggie-wrapper'>
                <Doggie className='doggie-svg' />
                <div className='email-wrapper'>sutanyeri@gmail.com</div>
            </div>
        </div>
    </section>
);

export default Contact;
