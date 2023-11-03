import PropTypes from 'prop-types';

const Button = ({ children, className, onClick }) => (
    <button
        className={`action-text w-full flex py-[16px] px-[40px] items-center 
      
        bg-[#222222] text-bg
    justify-center rounded-lg  border-2 lg:border-[3px] 
   font-Poppins font-medium text-xl shadow-large border-black 
   max-w-[400px] lg:max-w-[500px]
     hover:shadow-none ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

export default Button;
