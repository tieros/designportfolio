import HeroLogo from './assets/herosparkylogo.png';
import HeroButtons from './assets/herobuttons.png';
import HeroShowcase from './assets/heroshowcase.png';
import TitleDecor from './assets/titledecor.svg?react';
import BrandingLogo from './assets/sparkylogobranding.png';
import BrandingBrowserMock from './assets/brandingbrowsermock.png';
import Illustrations from './assets/Illustrations.png';
import ButtonComponents from './assets/buttoncomponents.png';
import './Sparky.css';
import ChallengeCard from './ChallengeCard';
import TypoImg1 from './assets/typoimg1.png';
import TypoImg2 from './assets/typoimg2.png';
import DashComponents from './assets/dashcomponents.png';
import CookiesModal from './assets/cookiesmodal.png';
import ThankYou from './assets/thankyousparky.png';
import { useEffect } from 'react';

const Sparky = () => {
    useEffect(() => {
        // Scroll to the top of the page when it loads
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='sparky-container'>
            <div className='hero flex flex-col items-center m-auto'>
                <img alt='sparky logo' src={HeroLogo} />
                <img alt='sparky logo' src={HeroButtons} />
            </div>
            <img
                src={HeroShowcase}
                alt='showing hero and dashboard design of Sparky'
                className='showcase-img'
            />
            <div className='flex flex-col items-center px-[9.5%] py-[7%] gap-8'>
                <div className='title-container'>
                    <TitleDecor />
                    <h2>challenges</h2>
                </div>
                <h4 className='max-w-[770px] text-center'>
                    Here are the the specific constraints and wishes outlined by
                    the client, which served as guiding principles throughout
                    the design journey.
                </h4>
                <div className='flex flex-wrap justify-center gap-8 lg:p-8'>
                    <ChallengeCard
                        title={'Engaging Illustrations'}
                        content={
                            'The client sought engaging, cartoonish illustrations that bring a sense of playfulness to the design.'
                        }
                    />
                    <ChallengeCard
                        title={'Approachable Aesthetics'}
                        content={
                            'The design needed to strike a balance between being fun and approachable without coming across as overly childish or like a "toy factory." It should appeal to a wide audience, including developers and potential users.'
                        }
                    />

                    <ChallengeCard
                        title={'Brand Consistency'}
                        content={
                            "Maintain brand consistency across the dashboard and landing page, striking a balance between a playful tone and the representation of the client's services and values"
                        }
                    />
                    <ChallengeCard
                        title={'Professionalism'}
                        content={
                            'Despite the fun and friendly approach, the client emphasized the importance of maintaining a level of professionalism to instill trust in potential users and clients.'
                        }
                    />
                    <ChallengeCard
                        title={'Funny & Friendly Language'}
                        content={
                            'The language used in the design should be infused with humor and friendliness, creating a warm and inviting atmosphere for users while maintaining a professional tone.'
                        }
                    />
                    <ChallengeCard
                        title={'Unique Visual Identity'}
                        content={
                            'The client wanted a design that stood out from the crowd, showcasing a unique visual identity that would make a memorable impression on users.'
                        }
                    />
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='title-container px-[9.5%]'>
                    <TitleDecor />
                    <h2>branding</h2>
                </div>
                <div className='flex items-center branding-wrapper px-[9.5%] py-[9.5%] lg:py-0 flex-wrap sm:flex-nowrap flex-col-reverse sm:flex-row'>
                    <p className='basis-1/2'>
                        I chose the Luckiest Guy font family for the logo text
                        to match the playful, cartoonish design desired by the
                        client. Its bold and whimsical style complements the
                        project&apos;s humorous tone and pairs seamlessly with
                        the wing-like illustrations, subtly conveying speed and
                        efficiency.
                    </p>
                    <img
                        src={BrandingLogo}
                        alt='sparky logo'
                        className='basis-1/2 w-[50%]'
                    />
                </div>
                <img
                    alt='image showing browser mokcup'
                    src={BrandingBrowserMock}
                />
            </div>
            <div className='flex flex-col px-[9.5%] py-[7%] gap-8'>
                <div className='title-container'>
                    <TitleDecor />
                    <h2>illustrations</h2>
                </div>
                <img src={Illustrations} alt='illustrations used in sparky' />
                <p className='text-[18px] lg:text-[32px] text-center'>
                    These amazing fall guys are heroes of the landing page of
                    Sparky: check the artists{' '}
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        className='underline'
                        href='https://www.figma.com/community/file/894115916957785363'
                    >
                        here
                    </a>
                </p>
            </div>
            <div className='flex flex-col px-[9.5%] py-[7%] gap-8'>
                <div className='title-container'>
                    <TitleDecor />
                    <h2>colors</h2>
                </div>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <div className='bg-[#1a1a1a] rounded-xl font-bold text-white p-[50px]'>
                        #1A1A1A
                    </div>
                    <div className='bg-[#F3BF38] rounded-xl p-[50px] font-bold'>
                        #F3BF38
                    </div>
                    <div className='bg-[#F4797F] rounded-xl p-[50px] font-bold'>
                        #F4797F
                    </div>
                    <div className='bg-[#6FADBB] rounded-xl p-[50px] font-bold'>
                        #6FADBB
                    </div>
                    <div className='bg-[#9A53D3] rounded-xl p-[50px] font-bold'>
                        #9A53D3
                    </div>
                </div>
            </div>
            <div className='flex flex-col px-[9.5%] py-[7%] gap-8'>
                <div className='title-container'>
                    <TitleDecor />
                    <h2>typography </h2>
                </div>
                <h5>
                    Recognizing the distinct requirements of the landing page
                    and dashboard, I employed different font families for each.
                    The landing page prioritized playfulness and eye-catching
                    appeal, calling for a vibrant font. In contrast, the
                    dashboard focused on readability and cleanliness, leading to
                    the selection of a font optimized for clarity.
                </h5>
                <img
                    className='self-center w-[80%] mt-[2%]'
                    src={TypoImg1}
                    alt='image showing usage of different font families throughout the app'
                />
                <img
                    className='mt-[2%]'
                    src={TypoImg2}
                    alt='image showing usage of different font families throughout the app'
                />
            </div>
            <div className='flex flex-col gap-8  py-[7%] '>
                <div className='title-container px-[9.5%]'>
                    <TitleDecor />
                    <h2>components </h2>
                </div>
                <h5 className='px-[9.5%]'>
                    The components in both the landing page and dashboard were
                    designed to adhere to the overarching brand identity while
                    accommodating specific needs. For instance, buttons maintain
                    a consistent brand vibe for visual cohesion, but they
                    feature subtle distinctions to match their respective
                    functions and contexts.
                </h5>
                <img
                    className='self-center w-[80%] mt-[2%]'
                    src={ButtonComponents}
                    alt='image showing usage of different buttons throughout the app'
                />
                <img
                    className='mt-[4%]'
                    src={DashComponents}
                    alt='image showing usage of components'
                />
            </div>
            <div className='flex flex-col px-[9.5%] py-[7%] gap-8'>
                <div className='title-container'>
                    <TitleDecor />
                    <h2>cookies modal </h2>
                </div>
                <img src={CookiesModal} alt='cookies modal' />
            </div>
            <div className='flex flex-col px-[9.5%] py-[7%] gap-8'>
                <div className='title-container'>
                    <TitleDecor />
                    <h2>landing page </h2>
                </div>
                <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    width='100%'
                    height='550'
                    src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5WXpQcbnI7eq4ydQ0Iy8Ag%2FSparky%3Fpage-id%3D177%253A9514%26type%3Ddesign%26node-id%3D177-9515%26viewport%3D468%252C423%252C0.46%26t%3DFnHGEXnG2ICL284U-1%26scaling%3Dscale-down-width%26mode%3Ddesign'
                    allowFullScreen
                ></iframe>
            </div>
            <div className='flex flex-col px-[9.5%] py-[7%] gap-8'>
                <div className='title-container'>
                    <TitleDecor />
                    <h2>dashboard samples </h2>
                </div>
                <iframe
                    style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }}
                    width='100%'
                    height='550'
                    src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F5WXpQcbnI7eq4ydQ0Iy8Ag%2FSparky%3Fpage-id%3D177%253A10264%26type%3Ddesign%26node-id%3D177-10746%26viewport%3D468%252C423%252C0.16%26t%3DR57CSwfGQIKjOBCo-1%26scaling%3Dcontain%26mode%3Ddesign'
                    allowfullscreen
                ></iframe>
            </div>
            <div className='flex flex-col px-[9.5%] py-[7%] gap-8'>
                <img
                    alt='thank you for your time'
                    src={ThankYou}
                    className='w-[60%] self-end'
                />
            </div>
        </div>
    );
};

export default Sparky;
