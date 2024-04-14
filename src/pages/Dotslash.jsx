import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import image1 from '../assets/images/apples.jpg';
import { MdArrowRight, MdArrowLeft } from "react-icons/md";
import dotslashTitle from '../assets/images/dotslashTitle.svg';
import img1 from "../assets/images/dotslash/1.png";
import img2 from "../assets/images/dotslash/2.png";
import img3 from "../assets/images/dotslash/3.png";
import img4 from "../assets/images/dotslash/4.png";
import img5 from "../assets/images/dotslash/5.png";
import img6 from "../assets/images/dotslash/6.png";
import img7 from "../assets/images/dotslash/7.png";
import img8 from "../assets/images/dotslash/8.png";
import img9 from "../assets/images/dotslash/9.png";
import './styles/dotslash.css';
import Footer from '../components/Footer';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const intervalDuration = 3000; // Change this value to adjust the interval duration

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedImage((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalDuration);

    return () => clearInterval(intervalId);
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
      <div className='bg-gradient-to-b pt-40 pb-16 min-h-screen' style={{ background: '' }}>
        <div className='flex flex-row justify-center text-[#ffffff] font-bold'>
          <img src={dotslashTitle} alt="DotSlash Title" className="mx-auto mt-6 w- h-16" />
        </div>
        
        <p className="text-white p-20 text-lg w-full flex justify-center items-center text-center">

          

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, assumenda corrupti nesciunt earum ratione iste necessitatibus aspernatur repellat distinctio, quis non quod, harum modi sit reiciendis fugiat illo animi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur unde debitis, illo quas error non aperiam ex cum deleniti aliquam cupiditate nobis provident ipsam delectus illum possimus laborum sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quos quasi tempore, iste perspiciatis placeat porro deleniti, doloribus minus rem suscipit vel libero voluptatem. Quia velit dolor voluptas iure ad!
        </p>
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:justify-start">
          
          <div className="md:w-3/4">
            {/* Paragraph */}
            <p className="text-white p-10 xl:p-20 text-lg flex justify-center items-center text-center md:justify-start">
             

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, assumenda corrupti nesciunt earum ratione iste necessitatibus aspernatur repellat distinctio, quis non quod, harum modi sit reiciendis fugiat illo animi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur unde debitis, illo quas error non aperiam ex cum deleniti aliquam cupiditate nobis provident ipsam delectus illum possimus laborum sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quos quasi tempore, iste perspiciatis placeat porro deleniti, doloribus minus rem suscipit vel libero voluptatem. Quia velit dolor voluptas iure ad!

            </p>
          </div>
          <div className="md:m-10 p-16 md:p-0 mx-16 md:w-1/2 px-5">
            {/* Image */}
            <img src={img1} alt="Image" className="w-full md:w-auto" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start">
          <div className="md:m-4 p-16 md:p-0 mx-16 md:w-1/2 px-5">
            {/* Image */}
            <img src={img9} alt="Image" className="w-full md:w-auto" />
          </div>
          <div className="md:w-3/4">
            {/* Paragraph */}
            <p className="text-white p-10 xl:p-20 text-lg flex justify-center items-center text-center md:justify-end">
              


              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, assumenda corrupti nesciunt earum ratione iste necessitatibus aspernatur repellat distinctio, quis non quod, harum modi sit reiciendis fugiat illo animi ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur unde debitis, illo quas error non aperiam ex cum deleniti aliquam cupiditate nobis provident ipsam delectus illum possimus laborum sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quos quasi tempore, iste perspiciatis placeat porro deleniti, doloribus minus rem suscipit vel libero voluptatem. Quia velit dolor voluptas iure ad!
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
          <p className='text-white text-xl'>Visit <a href='https://www.dotslashcet.tech/' className='underline italic'>Dotslash</a> for more</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
