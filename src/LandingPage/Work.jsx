import Button from '../Components/Button';
import Tag from '../Components/Tag';
import Paybud from '/paybud.webp';
import Lumea from '/lumea.webp';
import Sparky from '/sparky.webp';
import ShineLine from '../assets/shineline.svg?react';
import Notex from '../assets/NotexThumb.webp';

import { useNavigate } from 'react-router-dom';
const Work = () => {
    const navigate = useNavigate();

    return (
        <section
            id='work'
            className='flex flex-col items-center work-section gap-8 lg:gap-16'
        >
            <div className='relative w-full flex justify-center h-[97px] sm:h-[110px] lg:h-[150px] gap-3'>
                <div className='absolute top-[-30%] left-[10%] sm:left-[25%] lg:left-[30%] 2xl:left-[40%] w-10 sm:w-14 lg:w-16'>
                    <ShineLine />
                </div>
                <h1>Work</h1>
            </div>
            <div className='flex flex-col gap-12 lg:gap-32 px-4'>
                <div className='flex justify-center lg:gap-6'>
                    <div className='hidden lg:flex basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Paybud}
                            className='hidden lg:flex absolute w-[350px] top-[-30px] left-[80px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] max-w-full border-[#dcdcdc] border lg:border-none lg:bg-bg rounded-lg p-6 lg:p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
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
                            <div className='flex gap-3 justify-end flex-wrap'>
                                <Tag bgColor='bg-yellow'>Case Study</Tag>
                                <Tag bgColor='bg-green'>Branding</Tag>
                                <Tag bgColor='bg-blue'>Mobile App</Tag>
                            </div>
                        </div>
                        <Button
                            className='!py-2 sm:!py-4 self-center'
                            onClick={() => navigate('/work/paybud')}
                        >
                            Enter PayBud World
                        </Button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='hidden lg:flex lg:basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Notex}
                            className='hidden lg:flex absolute w-[700px] top-[50px] left-0'
                            alt='notex screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] max-w-full border-[#dcdcdc] border lg:border-none lg:bg-bg rounded-lg p-6 lg:p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
                        <div className='flex flex-col gap-5'>
                            <img
                                src={Notex}
                                alt='notex screenshot'
                                className='lg:hidden'
                            />
                            <h4 className='font-Poppins font-semibold'>
                                Notex
                            </h4>
                            <p className='font-Poppins'>
                                Notex is a conceptual notetaking app that
                                simplifies the notetaking experience by
                                addressing the common issue of non-customizable
                                and crowded toolbars in existing apps.
                            </p>
                            <div className='flex gap-3 justify-end flex-wrap'>
                                <Tag bgColor='bg-blue'>Web App</Tag>
                                <Tag bgColor='bg-pink'>Product Design</Tag>
                                <Tag bgColor='bg-yellow'>Case Study</Tag>
                            </div>
                        </div>
                        <Button
                            className='!py-2 sm:!py-4 self-center'
                            onClick={() => navigate('/work/notex')}
                        >
                            Enter Notex World
                        </Button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='hidden lg:flex lg:basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Lumea}
                            className='hidden lg:flex absolute w-[580px] bottom-0 left-[10px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] max-w-full border-[#dcdcdc] border lg:border-none lg:bg-bg rounded-lg p-6 lg:p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
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
                            <div className='flex gap-3 justify-end flex-wrap'>
                                <Tag bgColor='bg-yellow'>Case Study</Tag>
                                <Tag bgColor='bg-purple'>Redesign</Tag>
                                <Tag bgColor='bg-blue'>Mobile App</Tag>
                            </div>
                        </div>
                        <Button
                            className='!py-2 sm:!py-4 self-center'
                            onClick={() => navigate('/work/lumea')}
                        >
                            Enter Lumea World
                        </Button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='hidden lg:flex lg:basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Sparky}
                            className='hidden lg:flex absolute w-[700px] top-[50px] left-0'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] max-w-full border-[#dcdcdc] border lg:border-none lg:bg-bg rounded-lg p-6 lg:p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
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
                                Sparky, a web app design that harmonized the
                                client&apos;s desire for a cartoonish, playful
                                aesthetic in the landing page with a clean and
                                user-friendly dashboard, all while ensuring
                                consistent experience.
                            </p>
                            <div className='flex gap-3 justify-end flex-wrap'>
                                <Tag bgColor='bg-blue'>Web App</Tag>
                                <Tag bgColor='bg-pink'>Dashboard</Tag>
                                <Tag bgColor='bg-purple'>Landing Page</Tag>
                            </div>
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
        </section>
    );
};
export default Work;
