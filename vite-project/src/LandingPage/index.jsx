import Hero from './Hero';
import { Link } from 'react-router-dom';
import Work from './Work';
import MyStory from './MyStory';
const LandingPage = () => (
    <div className='custom-container'>
        <header className='flex justify-center relative lg:w-{1440px] max-w-[1440px] m-auto'>
            <div className='absolute left-[5%]'>Logo</div>
            <nav className='flex gap-10 font-Poppins text-xl p-4'>
                <Link>Work</Link>
                <Link>My Story</Link>
                <Link>Contact</Link>
            </nav>
        </header>
        <Hero />
        <Work />
        <MyStory />
    </div>
);
export default LandingPage;
