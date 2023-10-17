import Button from '../Components/Button';
import Tag from '../Components/Tag';
import Paybud from '../assets/PayBud.png';
import Lumea from '../assets/Lumea.png';
import Sparky from '../assets/Sparky.png';
import ShineLine from '../assets/shineline.svg?react';
import ArrowLine from '../assets/arrowline.svg?react';

import { useNavigate } from 'react-router-dom';
const Work = () => {
    const navigate = useNavigate();

    return (
        <section
            id='work'
            className='flex flex-col items-center work-section lg:gap-16'
        >
            <div className='inline-flex items-end h-[97px] sm:h-[110px] lg:h-[150px]'>
                <ShineLine className='self-start w-10 sm:w-14 lg:w-16' />
                <h1>Work</h1>
            </div>
            <div className='flex flex-col gap-20 lg:gap-32'>
                <div className='flex justify-center lg:gap-8'>
                    <div className='hidden lg:flex basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Paybud}
                            className='hidden lg:flex absolute w-[350px] top-[-30px] left-[100px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] lg:bg-bg rounded-lg p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
                        <div className='flex gap-3'>
                            <Tag bgColor='bg-yellow'>Case Study</Tag>
                            <Tag bgColor='bg-green'>Branding</Tag>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <img
                                src={Paybud}
                                alt='paybud screenshot'
                                className='lg:hidden sm:w-[70%] self-center'
                            />
                            <h4 className='font-Poppins font-semibold'>
                                PayBud App
                            </h4>
                            <p className='font-Poppins'>
                                Mobile app design where users can send and
                                receive money among friends, with digital
                                payment. Checkout the branding, flows,
                                wireframes and prototypes.
                            </p>
                        </div>
                        <Button className='!py-2 sm:!py-4 self-center'>
                            Enter PayBud World
                        </Button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='hidden lg:flex lg:basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Lumea}
                            className='hidden lg:flex absolute w-[500px] top-[-30px] left-[10px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] lg:bg-bg rounded-lg p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
                        <div className='flex gap-3'>
                            <Tag bgColor='bg-yellow'>Case Study</Tag>
                            <Tag bgColor='bg-pink'>Redesign</Tag>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <img
                                src={Lumea}
                                alt='lumea screenshot'
                                className='lg:hidden sm:w-[70%] self-center'
                            />
                            <h4 className='font-Poppins font-semibold'>
                                Lumea App
                            </h4>
                            <p className='font-Poppins'>
                                Enhanced the Philips Lumea epilation tracking
                                app with a fresh and gender inclusive design,
                                ensuring a clean and user-friendly experience.
                            </p>
                        </div>
                        <Button className='!py-2 sm:!py-4 self-center'>
                            Enter Lumea World
                        </Button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='hidden lg:flex lg:basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Sparky}
                            className='hidden lg:flex absolute w-[600px] top-[50px] left-[-10px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] lg:bg-bg rounded-lg  p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
                        <div className='flex gap-3'>
                            <Tag bgColor='bg-yellow'>Case Study</Tag>
                            <Tag bgColor='bg-pink'>Redesign</Tag>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <img
                                src={Sparky}
                                alt='sparky screenshot'
                                className='lg:hidden'
                            />
                            <h4 className='font-Poppins font-semibold'>
                                Sparky
                            </h4>
                            <p className='font-Poppins'>
                                Enhanced the Philips Lumea epilation tracking
                                app with a fresh and gender inclusive design,
                                ensuring a clean and user-friendly experience.
                            </p>
                        </div>
                        <Button
                            className='!py-2 sm:!py-4 self-center'
                            onClick={() => navigate('/work/sparky')}
                        >
                            Enter Sparky World
                        </Button>
                    </div>
                </div>
            </div>
            <div className='max-w-[619px] pt-10 flex h-[167px] gap-2'>
                <ArrowLine />
                <Button className={'h-[62px] bg-reddish'}>
                    Check Other Design Work
                </Button>
            </div>
        </section>
    );
};
export default Work;
