import { useState, useEffect, useRef } from 'react';

// Debounce function to limit the rate of execution of a function
function debounce(func, wait) {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        const later = function () {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const MainFunctions = () => {
    const [activeMainFunc, setActiveMainFunc] = useState(1);

    const containerRef = useRef();

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            const handleHorizontalScroll = (e) => {
                if (e.deltaY === 0) {
                    // Scroll is horizontal
                    if (e.deltaX > 0 && activeMainFunc < 3) {
                        // Scrolled/swiped to the right (unless it's the last element)
                        setActiveMainFunc((prev) => (prev < 3 ? prev + 1 : 3));
                    } else if (e.deltaX < 0 && activeMainFunc > 1) {
                        // Scrolled/swiped to the left (unless it's the first element)
                        setActiveMainFunc((prev) => (prev > 1 ? prev - 1 : 1));
                    }
                }
            };

            // Debounce the event handler to handle one scroll event at a time
            const debouncedScrollHandler = debounce(
                handleHorizontalScroll,
                200,
            );

            container.addEventListener('wheel', debouncedScrollHandler, {
                passive: false,
            });

            return () => {
                container.removeEventListener('wheel', debouncedScrollHandler);
            };
        }
    }, [activeMainFunc]);

    return (
        <section className='bg-[#F2F2F2] p-[5%]'>
            <h2>| What Does PayBud Do?</h2>
            <div className='flex gap-4 flex-wrap sm:flex-nowrap'>
                <div className='flex basis-full sm:basis-1/2 gap-4 flex-col items-center lg:mt-[80px]'>
                    <div className='flex w-full sm:w-[400px] justify-between'>
                        <button
                            className={
                                activeMainFunc === 1
                                    ? 'activeFunc func-button'
                                    : 'func-button'
                            }
                            onClick={() => setActiveMainFunc(1)}
                        >
                            Send
                        </button>
                        <button
                            className={
                                activeMainFunc === 2
                                    ? 'activeFunc func-button'
                                    : 'func-button'
                            }
                            onClick={() => setActiveMainFunc(2)}
                        >
                            Request
                        </button>
                        <button
                            className={
                                activeMainFunc === 3
                                    ? 'activeFunc func-button'
                                    : 'func-button'
                            }
                            onClick={() => setActiveMainFunc(3)}
                        >
                            Pay
                        </button>
                    </div>
                    <div className='rounded-lg p-4 w-full sm:w-[400px]'>
                        {activeMainFunc === 1 ? (
                            <p className='func-desc'>
                                Easily send money to your buds.
                            </p>
                        ) : activeMainFunc === 2 ? (
                            <p className='func-desc'>
                                Request money from your buds.
                            </p>
                        ) : (
                            <p className='func-desc'>Pay with one tap.</p>
                        )}
                    </div>
                </div>
                <div
                    ref={containerRef}
                    className='basis-full sm:basis-1/2 w-[500px] overflow-x-scroll m-auto flex justify-center'
                >
                    <div
                        className='image-container'
                        style={{
                            backgroundPosition: `-${
                                (activeMainFunc - 1) * 300
                            }px 0`,
                        }}
                    ></div>
                </div>
            </div>
        </section>
    );
};

export default MainFunctions;
