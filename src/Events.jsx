import React, { useRef } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Event1 from './assets/images/hexcet.jpg';
import Event2 from './assets/images/codeclash.jpg';

const events = [
  {
    id: 1,
    image: Event1,
    title: 'Event 1',
    description: 'This is the description of event 1',
    registrationButton: 'Register',
  },
  {
    id: 2,
    image: Event2,
    title: 'Event 2',
    description: 'This is the description of event 2',
    registrationButton: 'Register',
  },
  {
    id: 3,
    image: Event1,
    title: 'Event 1',
    description: 'This is the description of event 1',
    registrationButton: 'Register',
  },
  {
    id: 4,
    image: Event2,
    title: 'Event 2',
    description: 'This is the description of event 2',
    registrationButton: 'Register',
  },
  {
    id: 5,
    image: Event1,
    title: 'Event 1',
    description: 'This is the description of event 1',
    registrationButton: 'Register',
  },
  {
    id: 6,
    image: Event2,
    title: 'Event 2',
    description: 'This is the description of event 2',
    registrationButton: 'Register',
  },
];

function Events() {
  const swiperRef = useRef(null);

  React.useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        initialSlide: 1,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
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
      });
      const nextButton = swiperRef.current.querySelector('.swiper-button-next');
      const prevButton = swiperRef.current.querySelector('.swiper-button-prev');

      if (nextButton && prevButton) {
        nextButton.addEventListener('click', () => swiper.slideNext());
        prevButton.addEventListener('click', () => swiper.slidePrev());
      }
    }
  }, []);

  return (
    <div>
      <div className="text-3xl text-center mb-4">EVENTS</div>
      <div className="swiper-container w-11/12" ref={swiperRef} style={{ padding: '0 30px', overflow: 'hidden' }}>
        <div className="swiper-wrapper">
          {events.map((event) => (
            <div className="swiper-slide p-4 rounded-lg w-full max-w-[400px]" key={event.id}>
              <div className="flex flex-col items-center  bg-[#C5C6C7] p-10 rounded-lg">
                <img className="mb-4 w-full bg-transparent  object-contain" src={event.image} alt={event.title} />
                <h2 className="text-center bg-transparent text-lg mb-2">{event.title}</h2>
                <p className="text-center bg-transparent text-sm mb-2">{event.description}</p>
                <button className="text-white w-full bg-[#525252] rounded-lg py-2 hover:bg-[#000000] transition-colors">
                  {event.registrationButton}
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next bg-transparent text-[#525252] mr-10"></div>
        <div className="swiper-button-prev bg-transparent text-[#525252] ml-10"></div>
      </div>
    </div>
  );
}

export default Events;
