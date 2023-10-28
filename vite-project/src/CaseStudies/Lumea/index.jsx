import './Lumea.css';
import DesignThinkingDiamond from './assets/designthinkingdiamond.png';
import PersonaJourneyMap from './assets/personajourneymap.png';
import PhilipsLogo from './assets/PhilipsLogo.png';
import KeyTakeAways from './assets/keytakeaways.png';
import GenderProblems from './assets/genderproblems.png';
import LumeaMan from './assets/lumeaman.png';
import LumeaWoman from './assets/lumeawoman.png';
import TypographyImage from './assets/typography.png';
import Flow1 from './assets/flow1.png';
import Flow2 from './assets/flow2.png';
import Flaw1 from './assets/flaw1.png';
import Flaw2 from './assets/flaw2.png';
import Solution1 from './assets/sol1.png';
import Solution2 from './assets/sol2.png';
import LumeaScreens from './assets/lumeascreens.png';
import Findings from './assets/findings.png';
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

            <section className='flex flex-col items-center'>
                <h3 className='text-center'>DESIGN THINKING PROCESS</h3>
                <img src={DesignThinkingDiamond} />
            </section>

            <section className='flex flex-col gap-20'>
                <div className='flex flex-col items-center gap-10'>
                    <div className='flex flex-col items-center'>
                        <h2>1. DISCOVER</h2>
                        <h5 className='w-[80%]'>
                            I started with examining the current design of Lumea
                            app to identify if it follows 10 main goals of
                            mobile UX:
                        </h5>
                    </div>

                    <div className='flex flex-wrap justify-center gap-4 w-[80%]'>
                        <div className='ux-tag'>Easy To Use</div>
                        <div className='ux-tag'>Easy To Learn</div>
                        <div className='ux-tag'>Emotionally Compelling</div>
                        <div className='ux-tag'>Easy To Comprehend</div>
                        <div className='ux-tag'>Attention Respecting</div>
                        <div className='ux-tag'>Inclusivity</div>
                        <div className='ux-tag'>Accessibility</div>
                        <div className='ux-tag'>Sociability</div>
                    </div>
                </div>
                <div className='flex flex-col'>
                    <h3 className='self-start'>Persona & Journey Map</h3>
                    <img
                        src={PersonaJourneyMap}
                        alt='persona and journey map'
                    />
                </div>
            </section>
            <section className='flex flex-col items-center gap-6'>
                <h2>2. DEFINE</h2>
                <h3 className='text-center'>
                    Key Takeaways From Research Phase
                </h3>
                <img src={KeyTakeAways} alt='key take aways image' />
                <div className='gender-section py-[5%]'>
                    <h3 className='lg:!mb-0'>The Gender Problem</h3>
                    <div className='flex items-center flex-col lg:flex-row'>
                        <p className='basis-1/2'>
                            Philips Lumea offers various models, including one
                            for men in select regions. However, the app&apos;s
                            design assumes Lumea use is exclusive to women, seen
                            in its female-focused icons and imagery. This
                            unintentional bias needs addressing through
                            gender-inclusive iconography for a better user
                            experience.
                        </p>
                        <img
                            className='basis-1/2 max-w-[300px] lg:max-w-[600px]'
                            src={GenderProblems}
                        />
                    </div>
                    <div className='flex flex-wrap md:flex-no-wrap highlight-wrapper'>
                        <div className='md:basis-1/2 basis-full flex justify-center gap-4'>
                            <img
                                src={LumeaWoman}
                                alt='lumea product packaging for woman'
                                className='w-[103px] h-[74px] lg:w-[207px] lg:h-[148px]'
                            />
                            <img
                                src={LumeaMan}
                                alt='lumea product packaging for man'
                                className='w-[106px] h-[84px] lg:w-[212px] lg:h-[168px]'
                            />
                        </div>
                        <p className='md:basis-1/2 basis-full'>
                            Comparing pages designed for women and men reveals
                            traditional gender stereotypes in color choices.
                            Such color coding makes one think as if the device
                            can just be used by women.
                        </p>
                        <p className='mt-[16px]'>
                            Furthermore, the excessive use of pink in the app
                            undermines its sophistication and cleanliness.
                            Overuse of pink diminishes the app&apos;s visual
                            maturity. Shifting towards a balanced and neutral
                            color palette can convey professionalism and avoid
                            unintentional gender bias.
                        </p>
                    </div>
                </div>
            </section>

            <section className='flex flex-col gap-3'>
                <h2 className='text-center'>3. DEVELOP</h2>
                <h3>Colors</h3>
                <div className='highlight-wrapper !p-[2%] !rounded-[10px] lg:w-max'>
                    Preferred nectarine color palette to create “smooth”,
                    “warm”, and “soft” feeling.
                </div>
                <h5 className='py-[2%] color-sub-header'>Brand Colors</h5>
                <div className='flex justify-evenly lg:justify-start lg:gap-12 mb-4'>
                    <div className='color-container'>
                        <div className='color-shape bg-[#FF9B89]'></div>
                        <h4>Primary</h4>
                        <h5>#FF9B89</h5>
                    </div>
                    <div className='color-container'>
                        <div className='color-shape bg-[#FFCDB2]'></div>
                        <h4>Light</h4>
                        <h5>#FFCDB2</h5>
                    </div>
                    <div className='color-container'>
                        <div className='color-shape bg-[#BC5746]'></div>
                        <h4>Dark</h4>
                        <h5>#BC5746</h5>
                    </div>
                    <div className='color-container'>
                        <div className='color-shape bg-[#F8EBE5]'></div>
                        <h4>Neutral</h4>
                        <h5>#F8EBE5</h5>
                    </div>
                </div>
                <h5 className='py-[2%] color-sub-header'>
                    Typography and Neutrals
                </h5>
                <div className='flex justify-evenly lg:justify-start lg:gap-12 whitespace-nowrap mb-4'>
                    <div className='color-container'>
                        <div className='color-shape bg-[#230D07]'></div>
                        <h4>Dark Text</h4>
                        <h5>#230D07</h5>
                    </div>
                    <div className='color-container'>
                        <div className='color-shape bg-[#7F7D7D]'></div>
                        <h4>Dark Gray</h4>
                        <h5>#7F7D7D</h5>
                    </div>
                    <div className='color-container'>
                        <div className='color-shape bg-[#AAAAAA]'></div>
                        <h4>Gray</h4>
                        <h5>#AAAAAA</h5>
                    </div>
                    <div className='color-container'>
                        <div className='color-shape bg-[#FAF8F8] border-black border'></div>
                        <h4>Whiteish</h4>
                        <h5>#FAF8F8</h5>
                    </div>
                </div>
                <div>
                    <h3 className='mt-8'>Typography</h3>
                    <p className='max-w-[668px] py-[2%] text-sm lg:text-lg'>
                        Due to the licensing constraints of Neue Frutiger World
                        font which is used in Philips branding, I opted for
                        Montserrat as a suitable alternative for the purpose of
                        this showcase.
                    </p>
                    <img
                        alt='typography showing image used Montserrat'
                        src={TypographyImage}
                    />
                </div>
            </section>
            <section className='flow-section'>
                <h3 className='text-center'>Flows</h3>
                <p>
                    The current user flow is redundant and lacks user control,
                    especially during sign-up and treatment saving, which
                    involves over ten compulsory steps. Users can&apos;t skip or
                    go back, limiting their control.
                </p>
                <img
                    src={Flow1}
                    alt='image showing previous flow for signup task'
                />
                <p>
                    To create better user experience, simplifying steps is a
                    must, especially for distinguishing new and familiar users.
                    In the new flow, there are multiple &quot;SKIP&quot;
                    options, allowing users to return to fields later. Instead
                    of over ten steps, users can now save a session in just
                    three steps.
                </p>
                <img
                    src={Flow2}
                    alt='image showing redesigned flow for signup task'
                />
            </section>
            <section className='flex flex-col gap-10'>
                <h2 className='text-center'>SCREEN COMPARISIONS</h2>
                <div className='flex flex-col gap-20 lg:gap-32'>
                    <div className='flex flex-col gap-8 lg:gap-16'>
                        <div className='light-tag !font-semibold max-w-max'>
                            Save Treatment Problems
                        </div>
                        <img
                            alt='UX problems showing on save treatment task'
                            src={Flaw1}
                        />
                    </div>
                    <div className='flex flex-col gap-8 lg:gap-16'>
                        <div className='light-tag !font-semibold max-w-max'>
                            Save Treatment Solutions
                        </div>
                        <img
                            alt='UX solutions showing on save treatment task'
                            src={Solution1}
                        />
                    </div>
                    <div className='flex flex-col gap-8 lg:gap-16'>
                        <div className='light-tag !font-semibold max-w-max'>
                            Tips & Tricks Problems
                        </div>
                        <img
                            alt='UX problems showing on tips & tricks screens'
                            src={Flaw2}
                        />
                    </div>
                    <div className='flex flex-col gap-8 lg:gap-16'>
                        <div className='light-tag !font-semibold max-w-max'>
                            Tips & Tricks Solutions
                        </div>
                        <img
                            alt='UX problems showing on save treatment task'
                            src={Solution2}
                        />
                    </div>
                </div>
            </section>
            <section className='mt-10'>
                <h2 className='text-center'>SCREENS</h2>
                <img alt='redesigned app screens' src={LumeaScreens} />
            </section>

            <section>
                <h2 className='text-center'>4. TEST</h2>
                <h5>
                    I have conducted a task-based usability test to assess the
                    efficiency and user satisfaction across gender lines in the
                    redesigned interface. This study involved five diverse
                    participants, with three identifying as women and two as
                    men.
                </h5>
                <div className='flex flex-wrap lg:flex-nowrap gap-10 w-full my-10'>
                    <div className='test-card bg-[#FFCDB2]'>
                        <h6>Research Goals:</h6>
                        <p>
                            Evaluate the effectiveness of the new design in
                            reducing the time needed to complete tasks. Assess
                            if the previous UX flaws was successfully solved or
                            not. Examine user experience based on gender and
                            gather feedback on emotional responses and overall
                            satisfaction.
                        </p>
                    </div>
                    <div className='test-card bg-[#F8EBE5]'>
                        <h6>Tasks:</h6>
                        <p>
                            1.Sign-Up: Participants were asked to create an
                            account using the new design. 2.Treatment Saving:
                            Participants were instructed to save a treatment
                            using the redesigned interface.
                        </p>
                    </div>
                    <div className='test-card bg-[#FF9B89]'>
                        <h6>Data Collection:</h6>
                        <p>
                            Recorded the time taken by each participant to
                            complete both tasks for both old and new designs.
                            Conducted post-task interviews to delve into
                            participants&apos; feelings, frustrations, and
                            overall satisfaction during the process.
                        </p>
                    </div>
                </div>
                <img src={Findings} alt='image showing findings of research' />
            </section>
        </div>
    );
};

export default LumeaCaseStudy;
