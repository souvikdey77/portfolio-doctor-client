import React from 'react';
import HeroPic from '../assets/DoctorPic.jpg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { Link } from 'react-scroll';
import './Home.css';

function Home() {
    return (
        <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-white animate-charcter'>ObGyn - Laparoscopic Surgeon</h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        Dr. Sabari Dey is a highly accomplished and experienced Obstetrician, Aesthetic
                        Gynaecologist, and Laparoscopic Surgeon with more than 15 years of experience
                        in her field. After completing her Bachelor&#39;s degree in medicine from Maulana
                        Azad Medical College, one of the most prestigious medical colleges in India, she
                        pursued her passion for gynaecology by working on various government projects.
                    </p>
                    <div>
                        <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio
                            <span className='group-hover:rotate-90 duration-300'>
                                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroPic} alt='profile' className='rounded-1xl mx-auto w-1/2 md:w-1/2' />
                </div>
            </div>
        </div>
    )
}

export default Home