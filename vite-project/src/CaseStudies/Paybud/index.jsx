import HeroLogo from './assets/heropaybudlogo.svg?react';
import HeroImg from './assets/heroimg.png';
import Moodboard from './assets/moodboard.png';
import { useState, useEffect } from 'react';
import './Paybud.css';

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
            } else if (moodBoard) {
                moodBoard.style.transform = `translateY(${scroll * -0.6}px )`;
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
                    <img src={HeroImg} className='w-[700px] parallax-mock' />
                </div>
                <div className={`moodboard p-[5%] flex flex-col gap-[1em]`}>
                    <h2 className='text-bg'>| Moodboard</h2>
                    <img src={Moodboard} className='w-[70vw]' />
                </div>
            </section>

            <section className='bg-[#F2F2F2]'>
                <h2>| What Does PayBud Do?</h2>
                <div className='flex gap-4'>
                    <button
                        className={
                            activeMainFunc == 1
                                ? 'activeFunc text-3xl py-4 px-6'
                                : `text-3xl py-4 px-6`
                        }
                        onClick={() => setActiveMainFunc(1)}
                    >
                        Send
                    </button>
                    <button
                        className={
                            activeMainFunc == 2
                                ? 'activeFunc text-3xl py-4 px-6'
                                : `text-3xl py-4 px-6`
                        }
                        onClick={() => setActiveMainFunc(2)}
                    >
                        Request
                    </button>
                    <button
                        className={
                            activeMainFunc == 3
                                ? 'activeFunc text-3xl py-4 px-6'
                                : `text-3xl py-4 px-6`
                        }
                        onClick={() => setActiveMainFunc(3)}
                    >
                        Pay
                    </button>
                </div>
                {activeMainFunc == 1 ? (
                    <p>Easily send money.</p>
                ) : activeMainFunc == 2 ? (
                    <p>Request Money.</p>
                ) : (
                    <p>Pay.</p>
                )}
            </section>
        </>
    );
};

export default Paybud;
