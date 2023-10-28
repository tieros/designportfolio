import './Lumea.css';

import PhilipsLogo from './assets/PhilipsLogo.png';
const LumeaCaseStudy = () => {
    return (
        <div className='lumea-container'>
            <div className='hero-cont flex flex-col gap-[8vw]'>
                <div className='max-w-max'>
                    <img
                        src={PhilipsLogo}
                        alt='philips logo'
                        className='max-w-[300px]'
                    />
                    <h2>Lumea App</h2>
                    <div className='flex flex-col gap-4 max-w-[230px]'>
                        <div className='light-tag'>Redesign</div>
                        <div className='dark-tag'>UI/UX Case Study</div>
                    </div>
                </div>

                <div className='max-w-[1095px] flex gap-10 flex-wrap lg:flex-nowrap'>
                    <div className='flex lg:basis-2/3'>
                        <div className='gap-4 flex flex-col'>
                            <h5 className='hero-sub-header'>
                                Why need redesign?
                            </h5>
                            <p>
                                As an avid Lumea App user, I initially saw its
                                potential for managing my epilation schedule.
                                However, my experience quickly fell short of
                                expectations due to usability issues. User
                                research revealed others faced similar
                                challenges, united in frustration. Delving
                                deeper into the research, I uncovered a larger
                                issue: the app&apos;s gendered design. It
                                perpetuated the stereotype that only women
                                engage in epilation, alienating potential users.
                                My redesign goal shifted to inclusivity and
                                equitable design. By addressing usability and
                                gendered aspects, I aim to create a
                                user-friendly and inclusive Lumea App for
                                managing epilation schedules effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className='flex lg:basis-1/3 content-between flex-wrap justify-center lg:justify-start'>
                        <div className='lumea-sticker lumea-sticker-hero-1'>
                            Make the app gender inclusive
                        </div>
                        <div className='lumea-sticker lumea-sticker-hero-2'>
                            Solve usability problems
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LumeaCaseStudy;
