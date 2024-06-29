import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import balusir from "../assets/images/cscup/Screenshot 2024-04-15 at 04-15-18 CS cup Report.pdf.png";
import vadamvali from "../assets/images/cscup/Screenshot 2024-04-15 at 04-16-00 CS cup Report.pdf.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import { MdArrowRight,MdArrowLeft } from "react-icons/md";
import cstitle from '../assets/images/image 39.svg';
import './styles/cscup.css'
import Footer  from '../components/Footer';
import img1 from "../assets/images/cscup/Screenshot 2024-04-15 at 04-15-30 CS cup Report.pdf.png";
import winner from "../assets/images/cscup/Screenshot 2024-04-15 at 04-16-11 CS cup Report.pdf.png";

function CsCup() {
  const [selectedImage, setSelectedImage] = useState(0);
  const images = [img1, vadamvali];
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
    <div className='cs-full max-w-full overflow-hidden'>
      <Navbar textColor="white" />
      <div className='bg-gradient-to-b pt-40 pb-16 min-h-screen' style={{ background: '' }}>
        <div className='flex flex-row justify-center text-[#ffffff] font-bold'>
          <img src={cstitle} alt="DotSlash Title" className="mx-auto mt-6 w- h-16" />
        </div>
        
        <p className="text-white p-20 text-lg w-full flex justify-center items-center text-center">

          After a thrilling four-year hiatus, the CS CUP 2024 was officially inaugurated on January 29th, 2024, amidst a symphony of cheers and applause. Head of Department Balu John, along with the esteemed department representative Gokul G Menon, graced the occasion with their presence, igniting the flames of competition with their inspiring words.The inauguration ceremony dazzled with the unveiling of the CS CUP 2024 logo, a beacon of unity and competition. As a football soared through the air, finding its mark in the goalpost, the journey of sporting excellence officially began, setting the stage for a week filled with spirited competitions and unparalleled sportsmanship.
        </p>
        <div className="flex flex-col-reverse xl:flex-row items-center justify-center xl:justify-start">
          
          <div className="md:w-3/4">
            {/* Paragraph */}
            <p className="text-white p-10 xl:p-20 text-lg flex justify-center items-center text-center md:justify-start">
              

              <br />
              The excitement kicked off even before the formal inauguration, as participants dove headfirst into the realm of online gaming competitions. From the thrilling E-Football showdown to the intense BGMI TDM Tournament, Valorant battles, and strategic Chess clashes, the virtual arena was ablaze with talent and determination. But the thrill didn't stop there! The physical contests took center stage, showcasing the raw strength and agility of our participants. From the Push-Up and Arm Wrestling competitions to the adrenaline-pumping Badminton, Table Tennis, and Carroms tournaments, every moment was a testament to the indomitable spirit of our athletes.
              And who could forget the electrifying Football showdown, the heart-pounding Basketball and Volleyball matches, and the nostalgic Gully Cricket battles that brought out the inner child in all of us? The fields echoed with the sounds of victory and the joy of teamwork, reminding us of the true essence of sportsmanship.

            </p>
          </div>
          <div className="md:m-10 p-16 md:p-0 mx-16 md:w-1/2 px-5">
            {/* Image */}
            <img src={balusir} alt="Image" className="w-full md:w-auto" />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-center xl:justify-start">
          <div className="md:m-4 p-16 md:p-0 mx-16 md:w-1/2 px-5">
            {/* Image */}
            <img src={winner} alt="Image" className="w-full md:w-auto" />
          </div>
          <div className="md:w-3/4">
            {/* Paragraph */}
            <p className="text-white p-10 xl:p-20 text-lg flex justify-center items-center text-center md:justify-end">
              


              As the sun set on this exhilarating week of competition, it was the fourth-year students who emerged victorious, clinching the coveted CS CUP with their unparalleled talent and dedication. But let's not forget the incredible performances of our third-year students, who secured the second position with their unwavering resolve and skill.And amidst the cheers and celebrations, one name shone brighter than the rest - Aswin Gigo Jacob, honored as the CS Cup'24 Icon for his spectacular performance throughout the week, inspiring us all with his passion and commitment to excellence.
              <br />
              CS CUP 2024 was more than just a sporting event - it was a celebration of unity, camaraderie, and the indomitable spirit of the CET Trivandrum's Computer Science and Engineering Department. As we bid farewell to this unforgettable journey, let's cherish the memories and lessons learned, and look forward to the next chapter of our sporting adventure!
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
          <p className='text-white text-xl'>Visit <a href='https://cs-cup-points-table.vercel.app/' className='underline italic font-semibold'> CS-Cup </a> for more</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CsCup;
