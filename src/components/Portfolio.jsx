import React from 'react';
import IMG1 from '../assets/img1.jpeg';
import IMG2 from '../assets/img2.jpeg';
import IMG3 from '../assets/img3.jpeg';
import IMG4 from '../assets/img4.jpg';

function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: IMG1
        },
        {
            id: 2,
            src: IMG2
        },
        {
            id: 3,
            src: IMG3
        },
        {
            id: 4,
            src: IMG4
        }
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Services</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                            {/* <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div> */}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Portfolio