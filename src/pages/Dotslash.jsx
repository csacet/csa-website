import React, { useState, useEffect, useRef } from 'react';
import Navbar from "../components/Navbar";
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import dotslashTitle from '../assets/images/dotslashTitle.svg';
import img1 from "../assets/images/dotslash/1.jpg";
import img2 from "../assets/images/dotslash/2.jpg";
import img3 from "../assets/images/dotslash/3.jpg";
import img4 from "../assets/images/dotslash/4.jpg";
import img5 from "../assets/images/dotslash/5.jpg";
import img6 from "../assets/images/dotslash/6.jpg";
import img7 from "../assets/images/dotslash/7.jpg";
import img8 from "../assets/images/dotslash/8.jpg";
import img9 from "../assets/images/dotslash/9.jpg";
import './styles/dotslash.css';
import Footer from '../components/Footer';

function Gallery() {
  const ref = useRef(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const intervalDuration = 3000; // Change this value to adjust the interval duration
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isScrolling) {
        setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, intervalDuration);

    // Clean up interval on component unmount
    return () => clearInterval(intervalId);
  }, [isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (index) => {
    setSelectedImage(index);
  };

  const handleNext = () => {
    setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className='dotslash-full max-w-full overflow-hidden'>
      <Navbar textColor="white" />
      <div className='bg-gradient-to-b pt-40 pb-16 min-h-screen'>
        <div className='flex flex-row justify-center text-[#ffffff] mx-10 font-bold'>
          <img src={dotslashTitle} alt="DotSlash Title" className=" m-auto mt-6 w- h-16" />
        </div>
        <p className="text-white p-20 text-lg w-full flex justify-center items-center text-center">
          Relive the excitement of Dotslash, the annual extravaganza from the Computer Science & Engineering Department at the College of Engineering, Trivandrum! Explore the workshops, competitions, and project exhibitions that showcased student innovation and technology. Dotslash has left a legacy of fostering continuous learning and skill development in the computer science community.
        </p>
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:justify-start">
          <div className="md:w-3/4">
            <p className="text-white p-10 xl:p-20 text-lg flex justify-center items-center text-center md:justify-start">
              Dotslash, the annual tech fest by the Computer Science and Engineering Department at College of Engineering, Trivandrum, kicked off with Professor Balu John unveiling the event logo. Gokul G Menon highlighted its significance, promising workshops and competitions to nurture innovation. Dotslash provided a platform for students to exhibit talents and engage in collaborative learning in computer science and engineering.
            </p>
          </div>
          <div className="md:m-10 p-16 md:p-0 mx-16 md:w-1/2 px-5">
            <img src={img1} alt="Image" className="w-full md:w-auto" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start">
          <div className="md:m-4 p-16 md:p-0 mx-16 md:w-1/2 px-5">
            <img src={img9} alt="Image" className="w-full md:w-auto" />
          </div>
          <div className="md:w-3/4">
            <p className="text-white p-10 xl:p-20 text-lg flex justify-center items-center text-center md:justify-end">
              Dot Slash, the techno-cultural fest of College of Engineering Trivandrum's Department of Computer Science and Engineering, returned after 4 years with Dot Slash 23 on December 8th-9th, 2023. Inaugurated by Dr. Savier J S, the event featured talk sessions by startup leaders, workshops, games, and 'Dot Slash for Juniors' aimed at introducing coding to school students. The fest concluded with "Dot Night" and Day 2 included workshops, competitions, and Frost Code hackathon, reviving the department's spirit and igniting student interest in technology.
            </p>
          </div>
        </div>
        <div className='text-[41px] font-semibold text-center mt-6 text-[#ffffff]'>Gallery</div>
        <div className='flex flex-row justify-center mt-10'>
          <button onClick={handlePrev} className='mx-24 rounded-full max-w-6 self-center'>
            <MdArrowLeft className='text-2xl text-[#1D2C66] bg-white rounded-full' />
          </button>
          {images.map((image, index) => (
            
            <img
              key={index}
              src={image}
              alt={'Image ' + (index + 1)}
              style={{
                height: '400px',
                width: selectedImage === index ? '400px' : '100px',
                border: selectedImage === index ? '1px solid white' : '1px solid white',
                margin: '0 5px',
                cursor: 'pointer',
                transition: 'width 0.5s',
                objectFit:  selectedImage === index ? '' : 'cover',
                objectPosition: selectedImage === index ? '' : '25% 25%',
              }}
              className='rounded-md'
              onClick={() => handleClick(index)}
            />
          ))}
          <button onClick={handleNext} className='mx-24 rounded-full max-w-6 self-center'>
            <MdArrowRight className='text-2xl text-[#1D2C66] bg-white rounded-full' />
          </button>
        </div>
        <div className='mt-10 text-center'>
          <p className='text-white text-xl'>Visit <a href='https://www.dotslashcet.tech/' className='underline italic font-semibold'>Dotslash</a> for more</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
