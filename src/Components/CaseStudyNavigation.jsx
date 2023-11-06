import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from './Button';
import BackArrow from '../assets/backarrow.svg?react';

const CaseStudyNavigation = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const navigate = useNavigate();

    const workPages = [
        {
            name: 'Paybud',
            url: '/work/paybud',
            imageSrc: '/paybud.webp',
        },
        {
            name: 'Sparky',
            url: '/work/sparky',
            imageSrc: '/sparky.webp',
        },
        {
            name: 'Lumea',
            url: '/work/lumea',
            imageSrc: '/lumea.webp',
        },
    ];

    const otherWorkPages = workPages.filter((page) => page.url !== currentPath);

    return (
        <div className='flex flex-col lg:p-20 gap-16 items-center sm:p-10'>
            <div className='flex gap-10 flex-wrap sm:flex-nowrap self-center w-full justify-evenly'>
                {otherWorkPages.map((page) => (
                    <Link
                        key={page.url}
                        to={page.url}
                        className='flex flex-col justify-center items-center rounded-[16px] p-10 case-study-card lg:w-[840px]'
                    >
                        <div className='w-[210px] h-[300px] lg:w-[320px] lg:h-[400px] flex justify-center items-center'>
                            <img
                                src={page.imageSrc}
                                alt={page.name}
                                className={`w-full h-max ${
                                    page.name === 'Paybud' && '!w-[70%]'
                                }`}
                            />
                        </div>
                        <Button
                            className={
                                '!text-black !max-w-[250px] !bg-bg hover:!bg-black hover:!text-bg'
                            }
                        >
                            See {page.name}
                        </Button>
                    </Link>
                ))}
            </div>
            <Button
                className={'!max-w-[250px] flex gap-4 sm:self-end'}
                onClick={() => navigate('/')}
            >
                <BackArrow /> Back to Home
            </Button>
        </div>
    );
};

export default CaseStudyNavigation;
