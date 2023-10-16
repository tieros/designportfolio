import PropTypes from 'prop-types';
const IconContainer = ({ bgColor, children }) => (
    <div
        className={`w-16 h-16 flex justify-center items-center rounded-full border border-[#133834] shadow-iconContainer hover:shadow-iconContainerHover ${bgColor}`}
    >
        {children}
    </div>
);

IconContainer.propTypes = {
    children: PropTypes.node,
    bgColor: PropTypes.string,
};

export default IconContainer;
