import AboutItem from '../Components/AboutItem';

const MyStory = () => (
    <div className='flex flex-col items-center'>
        <h1>My Story</h1>
        <div className='flex flex-col gap-5 relative'>
            <AboutItem text='2011 - Tiera came to my life' />
            <AboutItem text='2013 - I am building art & social science education, combining Theatre and Sociology.' />
            <AboutItem text='2015 - Graduated from theatre, learning “empathy” unknowingly paved the way for my success in UX design.' />
            <AboutItem text='2016 - Tiera is a big girl now, so am I, enhancing my social sciences background with Political Science Masters.' />
            <AboutItem text='2019 - Mm how do you create all those websites? Heey, got a new hobby and collecting all those HTML / CSS / JS certificates!' />
            <AboutItem text='2020 - I am really into web tech, and social sciences. Wait a sec! I have a great idea, lets combine them! Got into Digital Humanities Phd Programme.' />
            <AboutItem text='2021 - People say there is a way cooler thing in web dev, lets dive into React. ' />
            <AboutItem text='2022 - Be a frontend developer: DONE! ' />
            <AboutItem text='2023 - I am having a great time on this design tasks! Heey, new discovery found: I am a UI/UX Design lover!' />
            <AboutItem text='2023 - Challenge accepted: DESIGN CHAPTER IS HERE!' />
        </div>
    </div>
);
export default MyStory;
