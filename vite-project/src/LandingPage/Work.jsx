import Button from '../Components/Button';
import Tag from '../Components/Tag';
import Paybud from '../assets/PayBud.png';
import Lumea from '../assets/Lumea.png';
import Sparky from '../assets/Sparky.png';
const Work = () => (
    // <div className='max-w-[1440px] flex flex-col justify-center m-auto'>
    //     <h1 className='text-5xl lg:text-9xl text-center'>Work</h1>
    //     <div className='hidden lg:flex flex-col gap-12 px-[100px]'>
    //         <div className='flex gap-10'>
    //             <div className='p-[22px] w-full h-[470px] rounded-[18px] border-black border-[2px] lg:border-[3px] bg-green'>
    //                 <div className='flex flex-col gap-4'>
    //                     <Tag>Redesign</Tag>

    //                     <div className=' rounded-[7px] inline-flex'>
    //                         <Tag className='bg-yellow'>Case Study</Tag>
    //                     </div>
    //                 </div>
    //                 <Button>Click ME</Button>
    //             </div>
    //             <div className='w-full flex justify-center items-center'>
    //                 <div className='max-w-[385px] flex flex-col gap-8 font-Poppins'>
    //                     <h3 className='font-semibold text-5xl'>Lumea App</h3>
    //                     <p className='text-xl'>
    //                         Enhanced the Philips Lumea epilation tracking app
    //                         with a fresh and gender inclusive design, ensuring a
    //                         clean and user-friendly experience.
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='flex gap-10'>
    //             <div className='w-full flex justify-center items-center'>
    //                 <div className='max-w-[385px] flex flex-col gap-8 font-Poppins'>
    //                     <h3 className='font-semibold text-5xl'>Notex</h3>
    //                     <p className='text-xl'>
    //                         Designed Notex, a flexible note-taking app that
    //                         empowers users to customize their toolbars,
    //                         streamlining focus and eliminating the need to
    //                         switch between multiple apps.
    //                     </p>
    //                 </div>
    //             </div>
    //             <div className='w-full h-[470px] rounded-[18px] border-black border-[2px] lg:border-[3px] bg-reddish'>
    //                 <div className='flex flex-col gap-4'>
    //                     <div className='bg-pink rounded-[7px] inline-flex'>
    //                         <Tag>Redesign</Tag>
    //                     </div>
    //                     <div className='bg-yellow rounded-[7px] inline-flex'>
    //                         <Tag>Case Study</Tag>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         <div className='flex gap-10'>
    //             <div className='w-full h-[470px] rounded-[18px] border-black border-[2px] lg:border-[3px] bg-yellow'>
    //                 <div className='flex flex-col gap-4'>
    //                     <div className='bg-pink rounded-[7px] inline-flex'>
    //                         <Tag>Redesign</Tag>
    //                     </div>
    //                     <div className='bg-yellow rounded-[7px] inline-flex'>
    //                         <Tag>Case Study</Tag>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className='w-full flex justify-center items-center'>
    //                 <div className='max-w-[385px] flex flex-col gap-8 font-Poppins'>
    //                     <h3 className='font-semibold text-5xl'>Sparky</h3>
    //                     <p className='text-xl'>
    //                         Created Sparky, a captivating design challenge that
    //                         harmonized the client&apos;s desire for a
    //                         cartoonish, playful aesthetic in the landing page
    //                         with a clean and user-friendly dashboard, all while
    //                         ensuring consistent experience.
    //                     </p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className='flex flex-col items-center gap-60'>
        <h1>Work</h1>
        <div className='flex'>
            <div className='basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                <img
                    src={Paybud}
                    className='absolute w-[350px] top-[-30px] left-[100px]'
                    alt='paybud screenshot'
                />
            </div>
            <div className='basis-2/4 flex flex-col px-[60px] gap-10'>
                <div className='flex gap-3'>
                    <Tag bgColor='bg-yellow'>Case Study</Tag>
                    <Tag bgColor='bg-green'>Branding</Tag>
                </div>
                <div className='flex flex-col gap-5'>
                    <h4 className='font-Poppins font-semibold text-5xl'>
                        PayBud App
                    </h4>
                    <p className='font-Poppins text-xl'>
                        Mobile app design where users can send and receive money
                        among friends, with digital payment. Checkout the
                        branding, flows, wireframes and prototypes.
                    </p>
                </div>
                <Button>Enter PayBud World</Button>
            </div>
        </div>
        <div className='flex'>
            <div className='basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                <img
                    src={Lumea}
                    className='absolute w-[500px] top-[-30px] left-[10px]'
                    alt='paybud screenshot'
                />
            </div>
            <div className='basis-2/4 flex flex-col px-[60px] gap-10'>
                <div className='flex gap-3'>
                    <Tag bgColor='bg-yellow'>Case Study</Tag>
                    <Tag bgColor='bg-pink'>Redesign</Tag>
                </div>
                <div className='flex flex-col gap-5'>
                    <h4 className='font-Poppins font-semibold text-5xl'>
                        Lumea App
                    </h4>
                    <p className='font-Poppins text-xl'>
                        Enhanced the Philips Lumea epilation tracking app with a
                        fresh and gender inclusive design, ensuring a clean and
                        user-friendly experience.
                    </p>
                </div>
                <Button>Enter Lumea World</Button>
            </div>
        </div>
        <div className='flex'>
            <div className='basis-2/4 bg-[#f7f7ef] rounded-lg relative'>
                <img
                    src={Sparky}
                    className='absolute w-[600px] top-[50px] left-[-10px]'
                    alt='paybud screenshot'
                />
            </div>
            <div className='basis-2/4 flex flex-col px-[60px] gap-10'>
                <div className='flex gap-3'>
                    <Tag bgColor='bg-yellow'>Case Study</Tag>
                    <Tag bgColor='bg-pink'>Redesign</Tag>
                </div>
                <div className='flex flex-col gap-5'>
                    <h4 className='font-Poppins font-semibold text-5xl'>
                        Sparky
                    </h4>
                    <p className='font-Poppins text-xl'>
                        Enhanced the Philips Lumea epilation tracking app with a
                        fresh and gender inclusive design, ensuring a clean and
                        user-friendly experience.
                    </p>
                </div>
                <Button>Enter Sparky World</Button>
            </div>
        </div>
        <div className='max-w-[380px]'>
            <Button>Check Other Design Work</Button>
        </div>
    </div>
);
export default Work;
