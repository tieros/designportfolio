import IconContainer from '../Components/IconContainer';
import Instagram from '../assets/instagram.svg?react';
import Twitter from '../assets/Twitter.svg?react';
import Picture from '../assets/footerimage.png';
import Heart from '../assets/heart.svg?react';
const Footer = () => (
    <div
        className='relative flex flex-wrap sm:flex-nowrap footer-bg 
    w-full sm:w-[765px] sm:h-[376px] lg:w-[1152px] lg:h-[458px] 2xl:w-[1252px] 2xl:-h[458px]
    justify-around py-[5%]'
    >
        <div className='flex flex-col justify-center sm:justify-start items-start p-4 gap-3 lg:gap-12 lg:p-9'>
            <div className='flex flex-col gap-3 lg:gap-8 font-Poppins font-medium text-xl sm:text-2xl lg:text-4xl'>
                <a href='#work'>Work</a>
                <a href='#mystory'>My Story</a>
            </div>
            <div className='flex gap-3 lg:gap-8'>
                <a href='https://www.instagram.com/elifsdesignspace/'>
                    <IconContainer bgColor={'bg-pink'}>
                        <Instagram />
                    </IconContainer>
                </a>
                <a href='https://twitter.com/elifsudesign'>
                    <IconContainer bgColor={'bg-bg'}>
                        <Twitter />
                    </IconContainer>
                </a>
            </div>
        </div>
        <img
            src={Picture}
            alt='picture of me and my dog Tiera'
            className='self-end w-[153px] h-[198px]
            sm:w-[338px] sm:h-[409px]
            lg:w-[517px] lg:h-[635px] sm:ml-auto'
        />
        <div className='font-Poppins sm:justify-center justify-end lg:justify-end font-light text-[8px] sm:text-xs text-center flex flex-col max-w-[60vw] lg:max-w-[330px] sm:px-2 lg:p-9'>
            <span>
                I am sure you see the “made with love” thing, but I guarantee
                this website is made with love, so much love.
            </span>
            <hr className='bg-black my-1'></hr>
            <div className='inline-flex justify-center items-center'>
                <span> All rights are reserved and protected by Tiera.</span>
                <Heart className='w-4' />
            </div>
        </div>
    </div>
);

export default Footer;
