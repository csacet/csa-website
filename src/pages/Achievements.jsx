import React, { useRef, useState, useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import Event1 from '../assets/images/achievements.jpg';
import Event2 from '../assets/images/achievements.jpg';
import s1 from '../assets/images/achievements/s1crop.jpeg';
import s1b2 from '../assets/images/achievements/s1b2crop.jpeg';
import s7 from '../assets/images/achievements/s7crop.jpeg';
import s8 from '../assets/images/achievements/s8toppers.jpg';
import Navbar from '../components/Navbar';
import './styles/achievements.css';
import Footer from '../components/Footer';

const studentEvents = [
  {
    id: 1,
    image: s1,
    Name: 'S1 B1 Toppers',
    Year: '2023-2024',
    description: '',
  },
  {
    id: 2,
    image: s1b2,
    Name: 'S1 B2 Toppers',
    Year: '2023-2024',
    description: '',
  },
  {
    id: 3,
    image: s7,
    Name: 'S7 Toppers',
    Year: '2023-2024',
    description: '',
  },
  {
    id: 4,
    image: s8,
    Name: 'S8 Toppers',
    Year: '2023-2024',
    description: '',
  },
];

const facultyEvents = [
  {
    id: 1,
    image: Event1,
    Name: 'Devil Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  },
  {
    id: 2,
    image: Event2,
    Name: 'Jane Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  },
  {
    id: 3,
    image: Event1,
    Name: 'John Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  },
  {
    id: 4,
    image: Event2,
    Name: 'Jane Hugh',
    Year: '2022-2023',
    description: 'Faculty',
  }
];

function Events() {
  const swiperRef = useRef(null);
  const [showStudentEvents, setShowStudentEvents] = useState(true);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        initialSlide: 1,
        effect: 'coverflow',
        loop: true,
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          0: {
            slidesPerView: 1,
          }
        }
      });
    }
  }, []);

  const handleStudentClick = () => {
    setShowStudentEvents(true);
  };

  const handleFacultyClick = () => {
    setShowStudentEvents(false);
  };

  const openModal = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className='achievements min-h-screen bg-pattern bg-repeat '>
      <Navbar textColor="black" />
      <div className='p-10 pt-44 items-center flex flex-col'>
        <div className="text-4xl sm:text-5xl lg:text-6xl text-center mb-4 font-bold">Achievements</div>
        <div className='items-center m-0 flex flex-row justify-center'>
          <button className={`text-xl sm:text-2xl font-semibold w-fit ${showStudentEvents ? 'text-black ' : 'text-gray-500'}`} onClick={handleStudentClick}>Student</button>
          
        </div>
        <div className='mx-4 mt-7 relative flex flex-row justify-center swiper-container space-x-4 sm:mx-24'>
          <button className="bg-transparent rounded-full text-[#525252] max-w-6 self-center" onClick={() => swiperRef.current.swiper.slidePrev()}>
            <FaAngleLeft className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
          <div className="swiper-container" ref={swiperRef} style={{ padding: '0 ', overflow: 'hidden' }}>
            <div className="swiper-wrapper my-4">
              {(showStudentEvents ? studentEvents : facultyEvents).map((event) => (
                <div
                  className="swiper-slide bg-transparent items-center w-[380px] h-[350px] rounded-3xl relative expand-container transition-all duration-300 hover:scale-110"
                  key={event.id}
                  onClick={() => openModal(event)}
                >
                  <div className="absolute m-auto left-0 right-0 z-10">
                    <img className="w-[300px] m-auto bg-transparent h-[279px] rounded-3xl" src={event.image} alt={event.Year} />
                    <h2 className="text-center bg-transparent text-black font-medium text-base">{event.Name}</h2>
                    <h2 className="text-center bg-transparent text-[#7A8193] text-xs font-normal">{event.Year}</h2>
                    <p className="text-center bg-transparent text-[#7A8193] font-normal text-xs">{event.description}</p>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
          </div>
          <button className="rounded-full max-w-6 self-center" onClick={() => swiperRef.current.swiper.slideNext()}>
            <FaAngleRight className='text-2xl text-[#ffffff] bg-[#B3BBD8] rounded-full' />
          </button>
        </div>
      </div>
      {selectedEvent && isLargeScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50" onClick={handleOverlayClick}>
          <div className="relative bg-white p-4 rounded-lg w-6/12 items-center flex flex-col justify-center  mx-auto">
            <button
              className="absolute right-[10px] top-[10px] w-fit text-gray-500 hover:text-gray-700 "
              onClick={closeModal}
            >
              <AiOutlineClose className="text-2xl" />
            </button>
            <div className="flex flex-col items-center ">
              <img className="w-6/12 rounded-lg h-auto" src={selectedEvent.image} alt={selectedEvent.Name} />
              <h2 className="text-center text-2xl font-bold mt-4">{selectedEvent.Name}</h2>
              <h3 className="text-center text-lg text-gray-700">{selectedEvent.Year}</h3>
              
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Events;
