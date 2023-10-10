const Tag = ({ children, bgColor }) => (
    <div
        className={`cursor-default min-w-max inline-flex px-4 py-2 rounded-[7px] text-base font-Poppins font-medium xl:text-base border-black border-[2px] xl:border-[3px] shadow-tag ${bgColor}`}
    >
        {children}
    </div>
);

export default Tag;
