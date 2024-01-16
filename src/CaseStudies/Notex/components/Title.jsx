import { string } from 'prop-types';

const Title = ({ children, className }) => {
    return (
        <div className='flex flex-col w-max gap-0 lg:gap-2'>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl ${className}`}>
                {children}
            </h2>
            <div className='w-full h-[3px] rounded-lg bg-[#0B0E0B]'></div>
        </div>
    );
};
export default Title;

Title.propTypes = {
    children: string,
    className: string,
};
