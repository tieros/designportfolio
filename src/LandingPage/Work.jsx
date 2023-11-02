import Button from '../Components/Button';
import Tag from '../Components/Tag';
import Paybud from '../assets/PayBud.png';
import Lumea from '../assets/Lumea.png';
import Sparky from '../assets/Sparky.png';
import ShineLine from '../assets/shineline.svg?react';

import { useNavigate } from 'react-router-dom';
const Work = () => {
    const navigate = useNavigate();

    return (
        <section
            id='work'
            className='flex flex-col items-center work-section gap-8 lg:gap-16'
        >
            <div className='relative w-full flex justify-center h-[97px] sm:h-[110px] lg:h-[150px] gap-3'>
                <div className='absolute top-[-20%] left-[15%] sm:left-[25%] lg:left-[30%] 2xl:left-[40%] w-10 sm:w-14 lg:w-16'>
                    <ShineLine />
                </div>
                <h1>Work</h1>
            </div>
            <div className='flex flex-col gap-12 lg:gap-32'>
                <div className='flex justify-center lg:gap-6'>
                    <div className='hidden lg:flex basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                        <img
                            src={Paybud}
                            className='hidden lg:flex absolute w-[350px] top-[-30px] left-[100px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef]  border-black border-2 shadow-tag lg:border-none lg:shadow-none lg:bg-bg rounded-lg p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
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
                            src={Lumea}
                            className='hidden lg:flex absolute w-[500px] top-[-30px] left-[10px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef] border-black border-2 shadow-tag lg:border-none lg:shadow-none lg:bg-bg rounded-lg p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
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
                            className='hidden lg:flex absolute w-[600px] top-[50px] left-[-10px]'
                            alt='paybud screenshot'
                        />
                    </div>
                    <div className='bg-[#f7f7ef]  border-black border-2 shadow-tag lg:border-none lg:shadow-none lg:bg-bg rounded-lg  p-10 basis-full lg:basis-2/4 flex flex-col lg:px-[60px] gap-10'>
                        <div className='flex gap-3'>
                            <Tag bgColor='bg-yellow'>Case Study</Tag>
                            <Tag bgColor='bg-green'>Branding</Tag>
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
            {/* <div className='max-w-[619px] pt-10 flex h-[167px] gap-2 relative'>
                <h5>Check other design work</h5>
                <div className=' svg-container absolute left-[-30%] bottom-[-10%]'>
                    <svg
                        width='120'
                        height='130'
                        viewBox='0 0 130 130'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        ref={arrowRef}
                    >
                        <mask
                            id='mask'
                            maskUnits='objectBoundingBox'
                            maskContentUnits='objectBoundingBox'
                        >
                            <rect x='0' y='0' width='0' height='1' fill='white'>
                                <animate
                                    attributeName='width'
                                    from='0'
                                    to='1'
                                    dur='800ms'
                                    begin='0s'
                                    fill='freeze'
                                />
                            </rect>
                        </mask>

                        <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M24.0948 49.5508C24.4487 50.6845 24.7479 51.6629 24.9033 52.1808C25.8413 55.3345 29.1217 62.885 29.6137 68.9046C29.9907 73.4971 28.7505 77.2147 24.5177 78.2564C20.6706 79.2031 16.786 76.8637 13.3445 72.6482C5.93792 63.5756 0.321149 45.9194 0.00175015 40.1472C-0.0327794 39.5171 0.447754 38.979 1.07792 38.9445C1.70521 38.91 2.24327 39.3905 2.2778 40.0206C2.58569 45.5598 8.00111 62.4965 15.1113 71.2066C17.891 74.6106 20.8662 76.8062 23.9739 76.0407C27.0412 75.2869 27.6139 72.4209 27.3406 69.0917C26.8629 63.2332 23.6315 55.9014 22.7164 52.8311C22.1438 50.9061 19.7527 43.6261 19.698 42.9528C19.6289 42.1097 20.2303 41.8277 20.4346 41.75C20.5929 41.6896 21.4014 41.4393 21.905 42.3457C29.0929 55.2655 49.0654 70.116 70.3414 76.035C91.4303 81.9021 113.866 78.9527 126.262 56.1834C126.564 55.6309 127.258 55.4266 127.81 55.7259C128.363 56.028 128.567 56.7215 128.265 57.2739C115.276 81.131 91.8245 84.3797 69.7313 78.2334C51.1112 73.054 33.5041 61.17 24.0948 49.5508ZM126.459 57.8237C123.97 58.8423 121.524 59.9357 118.955 60.7616C112.109 62.9628 104.53 63.8002 97.4257 62.5341C96.8042 62.4219 96.3926 61.8291 96.502 61.2105C96.6142 60.5889 97.207 60.1775 97.8256 60.2868C104.568 61.4925 111.761 60.6782 118.256 58.5891C121.196 57.6424 123.976 56.3389 126.845 55.2081C126.989 55.1534 128.22 54.6239 128.511 54.5836C129.187 54.4858 129.53 54.8771 129.665 55.0786C129.78 55.2455 129.878 55.4728 129.886 55.7778C129.892 56.0282 129.791 56.5058 129.521 57.1158C128.661 59.0725 125.999 63.3484 125.636 64.0966C121.478 72.6714 119.05 81.347 116.264 90.4167C116.077 91.0181 115.439 91.3577 114.837 91.1735C114.236 90.9894 113.899 90.3505 114.083 89.7491C116.903 80.5643 119.375 71.7823 123.585 63.1039C123.832 62.5888 125.36 59.812 126.459 57.8237Z'
                            fill='black'
                            mask={isInViewport ? 'url(#mask)' : null}
                        />
                    </svg>
                </div>
                <Button className={'h-[62px] bg-reddish'}>
                    <a
                        href='https://www.behance.net/elifsudesign'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Take Me
                    </a>
                </Button>
            </div> */}
        </section>
    );
};
export default Work;
