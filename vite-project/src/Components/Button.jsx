import PropTypes from 'prop-types';

const Button = ({ children, className }) => (
    <button
        className={`action-text w-full flex py-[16px] px-[40px] items-center 
    justify-center rounded-lg bg-bg border-2 lg:border-[3px] 
   font-Poppins font-medium text-xl text-black shadow-large border-black 
   hover:bg-black hover:text-bg hover:shadow-none ${className}`}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Button;
