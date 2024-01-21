import HeroLogo from './assets/herologo.svg?react';
import HeroImage from './assets/NotexHero.webp';
import './notex.css';
import Title from './components/Title';
import Card from './components/Card';
import Personas from './assets/personas.webp';
import CompAnalysis from './assets/companalysis.webp';
import PieChart from './assets/piechart.png';
import Branding from './assets/branding.webp';
import ProcessLine from './assets/ProcessLine.svg?react';
import GeneralIcon from './assets/generalicon.svg?react';
import ProductiveIcon from './assets/productiveicon.svg?react';
import DesignIcon from './assets/designicon.svg?react';
import CodeIcon from './assets/codeicon.svg?react';
import ColorsTypographyDesktop from './assets/colorsyypographydesktop.webp';
import ColorsTypographyMobile from './assets/ColorsTypographyMobile.webp';
import Hifi1 from './assets/hifi1.webp';
import Hifi2 from './assets/hifi2.webp';
import Feature1Desktop from './assets/feature1desktop.webp';
import Feature1Mobile from './assets/feature1mobile.webp';
import Feature2Desktop from './assets/feature2desktop.webp';
import Feature2Mobile from './assets/feature2mobile.webp';
import Feature3 from './assets/feature3.webp';
import Feature4 from './assets/feature4.webp';
import { useEffect } from 'react';

const Notex = () => {
    useEffect(() => {
        // Scroll to the top of the page when it loads
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className='notex-container'>
            <section className='hero-container w-full lg:h-[60vh] flex pt-[2%] flex-col lg:flex-row'>
                <div className='basis-1/2 flex flex-col gap-10 lg:gap-20 lg:ml-[28px] p-10 lg:p-0'>
                    <div className='hero-tag lg:w-max inline-flex max-w-max'>
                        Product Design
                    </div>
                    <HeroLogo className='lg:self-center lg:mt-[16%] w-[80%] md:w-full' />
                </div>
                <div className='w-full relative h-full'>
                    <img
                        src={HeroImage}
                        alt='notex hero display image'
                        className='p-2 lg:absolute lg:top-[5vh] lg:right-0 w-full h-auto'
                    />
                </div>
            </section>
            <section className='flex text-[#0b0e0b] flex-col'>
                <div className='flex gap-6 lg:gap-20 p-10 items-center flex-col lg:flex-row p-[7vw]'>
                    <div className='basis-2/3 flex flex-col gap-6'>
                        <Title>Project Overview</Title>
                        <p>
                            Notex is a conceptual notetaking app that simplifies
                            the notetaking experience by addressing the common
                            issue of non-customizable and crowded toolbars in
                            existing apps. Notex empowers users by allowing them
                            to personalize their toolbars to match their
                            specific needs and access their personalized tools
                            with a single click. Whether it&apos;s selecting
                            modes for design, coding, productivity, or generic
                            notetaking, Notex ensures a clean and efficient UI
                            by eliminating unnecessary tools, catering to each
                            user&apos;s unique requirements.
                        </p>
                    </div>
                    <div className='h-max basis-1/3 shadow-[0_4px_16px_0_rgba(90,114,91,0.23)] rounded-[6px] py-10 px-9 bg-[rgba(226,233,227,0.35)]'>
                        Users can focus on what matters most —writing—without
                        the hassle of switching between apps or the need to
                        explore numerous templates.
                    </div>
                </div>
                <div className='flex flex-wrap gap-10 w-full justify-center'>
                    <Card className={'project-overview-card-container'}>
                        <div className='project-overview-card'>
                            <h5>Simple & Minimal</h5>
                            <span>
                                Simple and plain design, ensuring uncluttered
                                and basic user interface.
                            </span>
                        </div>
                    </Card>
                    <Card className={'project-overview-card-container'}>
                        <div className='project-overview-card'>
                            <h5>User Friendly</h5>
                            <span>
                                Primary focus is to provide an easy-to-use
                                experience, making notetaking effortless.
                            </span>
                        </div>
                    </Card>
                    <Card className={'project-overview-card-container'}>
                        <div className='project-overview-card'>
                            <h5>Highly Customizable</h5>
                            <span>
                                Notex lets you tailor your toolbar, ensuring you
                                keep only what you need while maintaining a
                                clear, streamlined workspace.
                            </span>
                        </div>
                    </Card>
                    <Card className={'project-overview-card-container'}>
                        <div className='project-overview-card'>
                            <h5>Single Purpose</h5>
                            <span>
                                Notex is exclusively designed for notetaking (no
                                PMP, no template), keeping your focus on the
                                essentials.
                            </span>
                        </div>
                    </Card>
                </div>
            </section>
            <section className='design-process-container'>
                <Title>Deliverables Through Process</Title>
                <div className='flex flex-wrap gap-12 justify-center p-10 relative'>
                    <ProcessLine className='absolute z-10 hidden lg:block' />
                    <Card className={'z-20 lg:min-w-[240px]'}>
                        <div className='design-process-card'>
                            <h4>1. Empathize</h4>
                            <span>User Interviews</span>
                        </div>
                    </Card>
                    <Card className={'z-20 lg:min-w-[240px]'}>
                        <div className='design-process-card'>
                            <h4>2. Define</h4>
                            <div className='flex flex-col gap-2'>
                                <span>Persona</span>
                                <span>Competitor Analysis</span>
                            </div>
                        </div>
                    </Card>
                    <Card className={'z-20 lg:min-w-[240px]'}>
                        <div className='design-process-card'>
                            <h4>3. Ideate</h4>
                            <span>Card Sorting</span>
                        </div>
                    </Card>
                    <Card className={'z-20 lg:min-w-[240px]'}>
                        <div className='design-process-card'>
                            <h4>4. Design & Prototype</h4>
                            <div className='flex flex-col gap-2'>
                                <span>Branding</span>
                                <span>Low & High Fidelity Wireframes</span>
                            </div>
                        </div>
                    </Card>
                    <Card className={'z-20 lg:min-w-[240px]'}>
                        <div className='design-process-card'>
                            <h4>5. Test</h4>
                            <span>Usability Testing</span>
                        </div>
                    </Card>
                </div>
            </section>
            <section className='flex flex-col items-center gap-10 lg:gap-20'>
                <Title>Who are &quot;users&quot;?</Title>
                <div className='flex flex-col items-center gap-6'>
                    <p>
                        I conducted 7 user interviews in the discovery phase,
                        aiming to grasp habits, needs, and pain points without
                        suggesting features. I minimized interference to truly
                        understand challenges in note-taking. Users from diverse
                        occupations were chosen to uncover varied needs. Sample
                        questions from my draft:
                    </p>
                    <div className='flex flex-col items-center gap-4 lg:mt-10'>
                        <div className='inline-flex gap-4'>
                            <div className='interview-question-container'>
                                What notetaking app(s) are you currently using?
                            </div>
                            <div className='interview-question-container'>
                                Do you use cross-platform?
                            </div>
                        </div>
                        <div className='inline-flex gap-4'>
                            <div className='interview-question-container'>
                                Any frustrations or limitations on current app?
                            </div>
                            <div className='interview-question-container'>
                                What led you to choose this app over others?
                            </div>
                        </div>
                        <div className='inline-flex gap-4'>
                            <div className='interview-question-container'>
                                How do you organize your notes in the app?
                            </div>
                            <div className='interview-question-container'>
                                How do you use note apps in your daily life?
                            </div>
                        </div>
                        <div className='inline-flex gap-4'>
                            <div className='interview-question-container'>
                                How important is security and privacy to you?
                            </div>
                            <div className='interview-question-container'>
                                Do you often collaborate on noteaking?
                            </div>
                        </div>
                        <div className='inline-flex gap-4'>
                            <div className='interview-question-container'>
                                Is sharing notes important?
                            </div>
                            <div className='interview-question-container'>
                                Any specific use cases?
                            </div>
                        </div>
                    </div>
                    <div className='flex my-10 justify-center items-center gap-6 flex-col lg:flex-row'>
                        <div className='basis-1/2 p-4 max-w-[600px]'>
                            <img
                                src={PieChart}
                                alt='pie chart showing occupation percentage of users attended in interview'
                            />
                        </div>

                        <div className='basis-1/2 bg-[#e7e7e4] rounded-[6px] px-3 py-8 h-max max-w-[500px]'>
                            To enhance the analysis of user needs and better
                            understand the context of use, I opted to include
                            users from various occupations and sectors.
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='flex flex-col gap-5 items-center text-center'>
                    <Title>Define Problems</Title>
                    <p className='define-text'>
                        Through insights gathered from user interviews, I have
                        identified key problem areas within the notetaking
                        experience: <br></br>
                        <br></br>- Users are disrupted by the need to switch
                        between multiple applications.<br></br> -Current
                        notetaking apps struggle with performance, occupying
                        substantial memory space due to non-crucial features.
                        <br></br> -Limited customization options within existing
                        notetaking tools hinder personalization and user
                        adaptability.
                    </p>
                    <h3 className='mt-5 m-auto'>
                        User interviews shaped my personas.
                    </h3>
                </div>

                <img
                    src={Personas}
                    alt='3 different persona for notex UX research'
                    className='mb-6 lg:mb-0'
                />
                <div className='flex px-[5vw] justify-center flex-col lg:flex-row'>
                    <div className='max-w-[600px] flex flex-col basis-1/2 lg:w-[60%] gap-6 justify-center p-[2%]'>
                        <h4 className='text-2xl font-semibold'>
                            Competitor Analysis
                        </h4>
                        <p>
                            For the competitor analysis, I have selected
                            prominent notetaking brands, including Notion,
                            OneNote, and Evernote, which were derived from both
                            top-used apps in the market and valuable insights
                            gathered through in-depth user interviews. Results
                            of user interviews showed native mobile notetaking
                            apps (like Apple Notes, Samsung Notes) were being
                            used for daily tasks often. However, those apps were
                            not included in competitor analysis because they are
                            meant to be for just “small notes” like shopping
                            list, draft email body etc, while notex will be used
                            more in large notetaking purposes like educational
                            class notes, business notes etc.
                        </p>
                    </div>
                    <div className='basis-1/2 w-full max-w-[800px]'>
                        <img alt='competitor analysis' src={CompAnalysis} />
                    </div>
                </div>
            </section>
            <section className='flex flex-col items-center gap-10'>
                <Title>Ideate Solutions</Title>
                <div className='inline-flex gap-6 lg:mt-8 problems-cont'>
                    <div className='custom-flex-container'>
                        <div className='custom-flex-header'>
                            <h2 className='custom-heading'>Problems:</h2>
                            <h2 className='custom-heading'>Solutions:</h2>
                        </div>
                        <div className='custom-flex-body'>
                            <div className='flex'>
                                <div className='custom-box'>
                                    Not customizable
                                </div>
                                <div className='custom-flex-grow-box'>
                                    Fully customizable toolbar, providing users
                                    the flexibility to choose predefined using
                                    modes or create their own.
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='custom-box'>
                                    Switching between apps
                                </div>
                                <div className='custom-flex-grow-box'>
                                    Users now have control within Notex,
                                    allowing to use the app to create simple
                                    to-do lists or advanced charts.
                                </div>
                            </div>
                            <div className='flex'>
                                <div className='custom-box'>
                                    Not lightweight
                                </div>
                                <div className='custom-flex-grow-box'>
                                    Users can focus what they need, notetaking,
                                    without unnecessary features like templates
                                    and project management.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <h4 className='text-lg lg:text-2xl my-6 lg:my-16 max-w-[60%] text-center'>
                        I created four distinct user modes—General, Productive,
                        Code, and Design—based on insights from user interviews
                        and the problem definition phase. Through card sorting,
                        I organized the essential tools for each mode, and
                        subsequently, I conducted a test to ensure that the
                        designated tools effectively address user needs.
                    </h4>
                    <div className='flex flex-wrap gap-4 md:gap-10 md:px-[24px] lg:gap-16 justify-center'>
                        <div className='user-mode-col bg-[rgba(210,224,227,0.50)]'>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <GeneralIcon className='column-icon' />
                                <h6>General</h6>
                            </div>
                            <ul>
                                <li>Hierarchy</li>
                                <li>Tags</li>
                                <li>Font Weight</li>
                                <li>Alignment</li>
                                <li>Font Colour</li>
                                <li>Fill</li>
                                <li>Highlight</li>
                                <li>Image</li>
                                <li>List</li>
                                <li>Link</li>
                                <li>Task-todo</li>
                                <li>Table</li>
                                <li>Callout</li>
                                <li>Dictate</li>
                            </ul>
                        </div>
                        <div className='user-mode-col bg-[rgba(217,227,210,0.50)]'>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <ProductiveIcon className='column-icon' />
                                <h6>Productive</h6>
                            </div>
                            <ul>
                                <li>Hierarchy</li>
                                <li>Tags</li>
                                <li>Font Weight</li>
                                <li>Alignment</li>
                                <li>Font Colour</li>
                                <li>Fill</li>
                                <li>Highlight</li>
                                <li>Image</li>
                                <li>List</li>
                                <li>Link</li>
                                <li>Task-todo</li>
                                <li>Table</li>
                                <li>Chart</li>
                                <li>Callout</li>
                                <li>Attach Doc</li>
                                <li>Quote</li>
                                <li>Dictate</li>
                            </ul>
                        </div>
                        <div className='user-mode-col bg-[rgba(236,230,180,0.50)]'>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <DesignIcon className='column-icon' />
                                <h6>Design</h6>
                            </div>
                            <ul>
                                <li>Hierarchy</li>
                                <li>Tags</li>
                                <li>Font Weight</li>
                                <li>Alignment</li>
                                <li>Font Colour</li>
                                <li>Fill</li>
                                <li>Highlight</li>
                                <li>Image</li>
                                <li>Shapes</li>
                                <li>Draw</li>
                                <li>List</li>
                                <li>Link</li>
                                <li>Task-todo</li>
                                <li>Table</li>
                                <li>Callout</li>
                                <li>Attach Doc</li>
                                <li>Quote</li>
                                <li>Dictate</li>
                            </ul>
                        </div>
                        <div className='user-mode-col bg-[rgba(223,210,227,0.50)]'>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <CodeIcon className='column-icon' />
                                <h6>Code</h6>
                            </div>
                            <ul>
                                <li>Hierarchy</li>
                                <li>Font Weight</li>
                                <li>Alignment</li>
                                <li>Font Colour</li>
                                <li>Fill</li>
                                <li>Highlight</li>
                                <li>Code</li>
                                <li>Image</li>
                                <li>List</li>
                                <li>Link</li>
                                <li>Task-todo</li>
                                <li>Table</li>
                                <li>Callout</li>
                                <li>Dictate</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className='flex flex-col items-center'>
                <Title>Design Phase</Title>
                <div className='lg:px-16 px-6 gap-6'>
                    <Title className={'text-xl lg:text-3xl mt-[7vw]'}>
                        Logo & Branding
                    </Title>
                    <p className='my-5 lg:my-10'>
                        The Notex branding logo is a blend of &rsquo;note&rsquo;
                        and &rsquo;flex&rsquo; representing the core principle
                        of flexibility in note customization.The unique
                        combination of greenish and pastel tones, paired with
                        soothing nude backgrounds, is a deliberate choice aimed
                        at enhancing the ease on the eyes. These carefully
                        selected colors are more than just visually appealing;
                        they contribute to a comfortable and immersive user
                        experience.
                    </p>
                    <img
                        alt='branding and logo images with mockups'
                        src={Branding}
                    />
                </div>
                <div className='lg:px-16 px-6 flex flex-col gap-6 mt-[7vw]'>
                    <Title className={'text-xl lg:text-3xl mt-6'}>
                        Colors & Typography
                    </Title>
                    <img
                        alt='image showing colors and typography usage'
                        src={ColorsTypographyDesktop}
                        className='hidden md:block'
                    />
                    <img
                        alt='image showing colors and typography usage'
                        src={ColorsTypographyMobile}
                        className='md:hidden'
                    />
                </div>
            </section>
            <section className='flex flex-col items-center gap-8'>
                <Title>High Fidelity Wireframes</Title>
                <img src={Hifi1} alt='high fidelity wireframe' />
                <img src={Hifi2} alt='high fidelity wireframe' />
            </section>
            <section className='flex flex-col items-center gap-6 lg:gap-16 features-section'>
                <Title>Features</Title>
                <div className='flex gap-6 flex-col mb-4'>
                    <h4 className='feature-title'>
                        1. Highly Personalized Toolbars
                    </h4>
                    <p className='lg:hidden text-base'>
                        Tailor your note-taking experience by choosing from
                        predefined modes or creating your own, complete with a
                        personalized toolbar. Streamline your workflow by
                        eliminating unnecessary elements.
                    </p>
                    <img
                        src={Feature1Desktop}
                        alt='feature showing personalized toolbars'
                        className='hidden lg:block'
                    />
                    <img
                        src={Feature1Mobile}
                        alt='feature showing personalized toolbars'
                        className='lg:hidden'
                    />
                    <p className='lg:hidden text-base mt-[-24px]'>
                        Easily modify mode settings on the fly, saving
                        preferences either for the entire mode or specifically
                        for the current note.
                    </p>
                </div>
                <div className='flex gap-6 flex-col mb-4'>
                    <h4 className='feature-title'>
                        2. Flexible Toolbar Placement
                    </h4>
                    <p>
                        Enjoy the freedom to use the toolbar wherever it suits
                        you best. Whether you prefer it at the top, bottom, or
                        side of your screen, Notex allows you to customize your
                        workspace for optimal productivity.
                    </p>
                    <img
                        src={Feature2Desktop}
                        alt='feature showing users can move toolbar'
                        className='hidden lg:block'
                    />
                    <img
                        src={Feature2Mobile}
                        alt='feature showing users can move toolbar'
                        className='lg:hidden'
                    />
                </div>
                <div className='flex gap-6 flex-col mb-4'>
                    <h4 className='feature-title'>
                        3. Keeping Track of Time With Tags & Reminders
                    </h4>
                    <p>
                        Effortlessly manage your schedule within Notex by
                        integrating tags and reminders into your notes. Enhance
                        productivity by adding descriptive tags such as
                        &quot;tight deadline&quot; or &quot;tasks to
                        handle,&quot;providing quick insights into the urgency
                        or nature of your notes. Additionally, leverage the
                        built-in reminder feature to stay on top of your tasks
                        and deadlines.
                    </p>
                    <img
                        src={Feature3}
                        alt='feature showing tags and reminders'
                    />
                </div>
                <div className='flex gap-6 flex-col mb-4'>
                    <h4 className='feature-title'>4. Ease on Eyes</h4>
                    <p>
                        Notex prioritizes user comfort by incorporating
                        thoughtfully selected color schemes for both dark and
                        light modes, aiming to minimize eye strain during
                        prolonged usage. The focus is on delivering an interface
                        that facilitates extended work hours by minimizing
                        distractions and discomfort, ensuring a smooth and
                        pleasant user experience.
                    </p>
                    <img src={Feature4} alt='feature showing dark mode' />
                </div>
            </section>
            <section className='test-section'>
                <Title>Test: See If It Works</Title>
                <p>
                    During the testing phase of the Notex UI/UX development, a
                    key aspect focused on the clarity and effectiveness of
                    toolbar icons and the satisfaction level with toolbar modes.
                    Users were prompted to provide feedback on the intuitiveness
                    of the icons and whether the available toolbar modes met
                    their needs.
                </p>
                <div className='flex gap-6 flex-wrap lg:flex-nowrap'>
                    <Card>
                        <h4>1. Toolbar Icons Clarity</h4>
                        <li>
                            Initial testing revealed some ambiguity in certain
                            toolbar icons.
                        </li>
                        <li>
                            Users expressed concerns about the clarity of a few
                            icons, highlighting potential confusion during
                            navigation.
                        </li>
                        <li>
                            Iterative adjustments were made to enhance the
                            clarity of icons based on user feedback.
                        </li>
                    </Card>
                    <Card>
                        <h4>2. Toolbar Modes Accuracy </h4>
                        <li>
                            Users were asked to interact with different toolbar
                            modes and provide insights into their effectiveness
                            and satisfaction.
                        </li>
                        <li>
                            Positive feedback indicated that the toolbar modes
                            effectively aligned with users`&apos; expectations
                            and needs.
                        </li>
                        <li>
                            The success of the toolbar modes in meeting user
                            requirements was notable, with no significant
                            iterations needed.
                        </li>
                    </Card>
                </div>
            </section>
        </div>
    );
};

export default Notex;
