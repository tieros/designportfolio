import HeroLogo from './assets/herosparkylogo.png';
import HeroButtons from './assets/herobuttons.png';
import HeroShowcase from './assets/heroshowcase.png';
import TitleDecor from './assets/titledecor.svg?react';
import './Sparky.css';
import ChallengeCard from './ChallengeCard';
const Sparky = () => {
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
            <div className='challenges flex flex-col items-center px-[9.5%] py-[7%] gap-8'>
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
        </div>
    );
};

export default Sparky;
