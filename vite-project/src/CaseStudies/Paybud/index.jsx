import HeroLogo from './assets/heropaybudlogo.svg?react';
import HeroImg from './assets/heroimg.png';
import Moodboard from './assets/moodboard.png';
import { useState, useEffect } from 'react';
import './Paybud.css';
import SideFuncs from './assets/sidefuncs.png';
import LogoMobileShow from './assets/logoonmobile.png';
import LogoOutline from './assets/logooutline.png';
import LogoBlack from './assets/logoblack.png';
import LogoGrid from './assets/icongrid.png';
import LogoShapes from './assets/logoshapes.png';
import IconSet from './assets/iconset.png';
import Persona from './assets/persona.png';
import UserFlow from './assets/OnboardingFlow.png';
import BrowserIcon from './assets/browsericonpaybud.png';
import ComponentImg from './assets/components.png';
import ComponentsShow from './assets/componentshow.png';
import ThankYou from './assets/thankyou.png';
import ImageSlider from './ImageSlider';
const Paybud = () => {
    const [activeMainFunc, setActiveMainFunc] = useState(1);

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
            const parallaxMock = document.querySelector('.parallax-mock');
            const moodBoard = document.querySelector('.moodboard');

            if (parallaxMock) {
                parallaxMock.style.transform = `translateY(${scroll * 0.3}px)`;
            }
            if (moodBoard) {
                moodBoard.style.transform = `translateY(${scroll * -0.1}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scroll]);

    return (
        <>
            <section className={`parallax-container bg-black`}>
                <div className='flex justify-center h-[100vh] items-center'>
                    <HeroLogo className='w-[30vw]' />
                    <img
                        src={HeroImg}
                        className='w-[230px] sm:w-[500px] lg:w-[700px] parallax-mock'
                    />
                </div>
                <div className={`moodboard p-[5%] flex flex-col gap-[1em]`}>
                    <h2 className='text-bg'>| Moodboard</h2>
                    <img src={Moodboard} className='w-[70vw]' />
                </div>
            </section>

            <section className='bg-[#F2F2F2] p-[5%]'>
                <h2>| What Does PayBud Do?</h2>
                <div className='flex gap-4 flex-wrap sm:flex-nowrap'>
                    <div className='flex basis-1/2 gap-4 flex-col items-center mt-[80px]'>
                        <div className='flex w-full sm:w-[400px] justify-between'>
                            <button
                                className={
                                    activeMainFunc == 1
                                        ? 'activeFunc func-button'
                                        : `func-button`
                                }
                                onClick={() => setActiveMainFunc(1)}
                            >
                                Send
                            </button>
                            <button
                                className={
                                    activeMainFunc == 2
                                        ? 'activeFunc func-button'
                                        : `func-button`
                                }
                                onClick={() => setActiveMainFunc(2)}
                            >
                                Request
                            </button>
                            <button
                                className={
                                    activeMainFunc == 3
                                        ? 'activeFunc func-button'
                                        : `func-button`
                                }
                                onClick={() => setActiveMainFunc(3)}
                            >
                                Pay
                            </button>
                        </div>
                        <div className='bg-[#ffffffe3] rounded-lg p-4 w-full sm:w-[400px]'>
                            {activeMainFunc == 1 ? (
                                <p className='func-desc'>
                                    Easily send money to your buds.
                                </p>
                            ) : activeMainFunc == 2 ? (
                                <p className='func-desc'>
                                    Request money from your buds.
                                </p>
                            ) : (
                                <p className='func-desc'>Pay with one tap.</p>
                            )}
                        </div>
                    </div>
                    <div className='basis-1/2 w-[500px] overflow-hidden m-auto flex justify-center'>
                        <div
                            className='image-container'
                            style={{
                                backgroundPosition: `-${
                                    (activeMainFunc - 1) * 300
                                }px 0`,
                            }}
                        ></div>
                    </div>
                </div>
            </section>

            <section className='bg-[#F2F2F2] p-[5%]'>
                <h2>| What you can also make with PayBud...</h2>
                <img
                    src={SideFuncs}
                    alt='image showing all side functions of the app.'
                />
            </section>

            <section className='bg-[#F2F2F2] p-[5%] relative'>
                <h2>| Logo</h2>
                <div className='flex flex-col lg:flex-row gap-12'>
                    <img
                        src={LogoGrid}
                        className='w-[150px] lg:w-[300px] h-full'
                    />
                    <div className='flex flex-col gap-4'>
                        <img
                            className='w-[150px] lg:w-[300px]'
                            src={LogoOutline}
                        />
                        <img
                            className='w-[150px] lg:w-[300px]'
                            src={LogoBlack}
                        />
                    </div>
                </div>
                <img
                    src={LogoMobileShow}
                    className='absolute right-0 top-0 w-[500px]'
                />
            </section>

            <div className='bg-[#F2F2F2] flex justify-center'>
                {/* <div className='video-container'>
                    <img className='frame' src={Frame} alt='Frame Image' />
                    <video autoPlay loop muted>
                        <source src={SmallAnimation} type='video/mp4' />
                    </video>
                </div> */}
                <img src={LogoShapes} className='w-[500px] z-10' />
            </div>

            <section className='bg-[#F2F2F2] p-[5%] flex flex-wrap lg:flex-nowrap gap-[10vw]'>
                <div className='flex flex-col gap-4'>
                    <h2>| Colors</h2>
                    <div className='flex flex-col gap-4 p-[2%]'>
                        <h4>Brand Colors</h4>
                        <div className='flex gap-4'>
                            <div className='color-cont bg-[#111111] text-white'>
                                #11111
                            </div>
                            <div className='color-cont bg-[#EAFFE3] text-black'>
                                #EAFFE3
                            </div>
                            <div className='color-cont bg-[#DBD0FB] text-black'>
                                #DBD0FB
                            </div>
                            <div className='color-cont bg-[#EAFFE3] text-black'>
                                #EAFFE3
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-[2%]'>
                        <h4>Neutral Helpers</h4>
                        <div className='flex gap-4'>
                            <div className='color-cont bg-[#E3DFCC] text-black'>
                                #E3DFCC
                            </div>
                            <div className='color-cont bg-[#F0EDDE] text-black'>
                                #F0EDDE
                            </div>
                            <div className='color-cont bg-[#F7F6F1] text-black'>
                                #F7F6F1
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2 p-[2%]'>
                        <h4>Succes / Error / Warning States</h4>
                        <div className='flex gap-4'>
                            <div className='color-cont bg-[#F1F7E2] text-black'>
                                #F1F7E2
                            </div>
                            <div className='color-cont bg-[#F7E2E2] text-black'>
                                #F7E2E2
                            </div>
                            <div className='color-cont bg-[#F7F4E2] text-black'>
                                #F7F4E2
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-[10vw]'>
                    <div className='flex flex-col gap-12'>
                        <h2>| Typography</h2>
                        <div className='flex flex-col items-center gap-4'>
                            <h3 className='text-4xl'>Open Sans</h3>
                            <p className='uppercase'>
                                a b c d e f g h i j k l m n o p r s t u v w x y
                                z
                            </p>
                            <p className=''>
                                a b c d e f g h i j k l m n o p r s t u v w x y
                                z
                            </p>
                            <p>1 2 3 4 5 6 7 8 9</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2>| Icons</h2>
                        <img alt='icon set image' src={IconSet} />
                    </div>
                </div>
            </section>

            <section className='bg-[#F2F2F2] relative flex gap-10 flex-wrap lg:flex-nowrap'>
                <div className='p-[2%] basis-1/3'>
                    <h2>| Persona</h2>
                    <img
                        alt='image showing Persona'
                        src={Persona}
                        className='w-[450px]'
                    />
                </div>
                <div className='basis-2/3 pt-[2%]'>
                    <h2>| Signup Flow</h2>
                    <img
                        src={UserFlow}
                        className='w-[90vw] h-auto lg:w-[900px] lg:h-[650px]'
                    />
                </div>
            </section>

            <section className='bg-[#F2F2F2] flex justify-center'>
                <img
                    src={BrowserIcon}
                    alt='browser icon mockup'
                    className='w-[80vw]'
                />
            </section>
            <section className='bg-[#F2F2F2] wireframe-section'>
                <h2>| Wireframes</h2>
            </section>

            <section className='bg-[#F2F2F2] p-[2%]'>
                <h2 className='py-[2%]'>| Components</h2>
                <div className='flex flex-wrap lg:flex-nowrap justify-center'>
                    <div className='flex basis-1/2 flex-col justify-center items-center gap-8'>
                        <div className='flex components-headers-wrapper'>
                            <h3>Make so many things with</h3>
                            <h4>one component</h4>
                        </div>

                        <img
                            src={ComponentImg}
                            alt='components'
                            className='max-w-[350px]'
                        />
                    </div>
                    <div className='flex basis-1/2'>
                        <img src={ComponentsShow} alt='components' />
                    </div>
                </div>
            </section>
            <ImageSlider />
            <img src={ThankYou} alt='thank you!' />
        </>
    );
};

export default Paybud;
