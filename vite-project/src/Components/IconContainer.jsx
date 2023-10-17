import PropTypes from 'prop-types';
const IconContainer = ({ bgColor, children }) => (
    <div
        className={`icon-container z-20 w-11 h-11 sm:w-16 sm:h-16 flex justify-center items-center rounded-full border-2 border-[#133834] shadow-iconContainer hover:shadow-iconContainerHover ${bgColor}`}
    >
        {children}
    </div>
);

IconContainer.propTypes = {
    children: PropTypes.node,
    bgColor: PropTypes.string,
};

export default IconContainer;
