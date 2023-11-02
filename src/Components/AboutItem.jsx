import PropTypes from 'prop-types';

const AboutItem = ({ text, children, bgColor }) => {
    return (
        <div
            className={`custom-hover-effect origin-left flex items-center rounded-3xl 
            }`}
        >
            <div className='shadow-tag flex items-center justify-center rounded-full bg-white border-black border-2'>
                <div
                    className={`bg-contain bg-no-repeat w-10 h-10 rounded-full flex justify-center items-center ${bgColor}`}
                >
                    {children}
                </div>
            </div>
            <div className='ml-5 font-Poppins action-text w-full whitespace-normal flex flex-wrap'>
                {text}
            </div>
        </div>
    );
};

AboutItem.propTypes = {
    text: PropTypes.node,
    children: PropTypes.node,
    bgColor: PropTypes.string,
};

export default AboutItem;
