import { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { FaMapMarker, FaCalendar, FaTrophy } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventCard = ({ event }) => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const mainSlider = useRef(null);
  const thumbsSlider = useRef(null);

  const settingsMain = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    swipe: false,
    asNavFor: thumbsSlider.current,
    beforeChange: (oldIndex, newIndex) => setCurrentPhoto(newIndex),
  };

  const settingsThumbs = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: mainSlider.current,
    focusOnSelect: true,
    centerMode: true,
    centerPadding: '10px',
    swipeToSlide: true,
    arrows: false,
    variableWidth: true,
    beforeChange: (oldIndex, newIndex) => {
      mainSlider.current.slickGoTo(newIndex);
    },
  };

  const handleThumbnailClick = (index) => {
    setCurrentPhoto(index);
  };

  return (
    <>
      <>
        <h2 className="text-center font-accent tracking-widest font-bold">
          <p className="text-4xl">{event.title}</p>
        </h2>
        <p className="text-center">
          <span className="mr-1">Place in the tournament: </span>
          <FaTrophy className="inline pb-1 mr-1 text-red-600" />
          <span>{event.placeInTheTournament}</span>
        </p>
        <p className="mb-4 text-center line-clamp-1 text-red-600 text-sm">
          <FaCalendar className="inline pb-1 mr-1" />
          <span className="mr-2">{event.date}</span>
          <FaMapMarker className="inline pb-1" />
          <span>{event.place}</span>
        </p>
        <p className="h-24 line-clamp-4 opacity-60 mb-4">{event.description}</p>
      </>
      <Slider ref={mainSlider} {...settingsMain} className="slider-for mb-4">
        {Array.from({ length: event.amountOfPhotos }).map((_, index) => (
          <div key={index}>
            <img
              className="w-full h-96 object-contain object-center"
              src={`/events/event-${event.date}/event-${event.date}-${
                index + 1
              }.${event.photosFormat}`}
              alt={`Event ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
      <Slider ref={thumbsSlider} {...settingsThumbs} className="slider-nav">
        {Array.from({ length: event.amountOfPhotos }).map((_, index) => (
          <div key={index} onClick={() => handleThumbnailClick(index)}>
            <div
              className={`w-32 h-20 mx-4 bg-cover bg-center cursor-pointer transition ${
                currentPhoto === index ? 'brightness-100' : ''
              } brightness-50`}
              style={{
                backgroundImage: `url(/events/event-${event.date}/event-${
                  event.date
                }-${index + 1}.${event.photosFormat})`,
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </>
  );
};

EventCard.propTypes = {
  event: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    place: PropTypes.string,
    placeInTheTournament: PropTypes.number,
    amountOfPhotos: PropTypes.number.isRequired,
    coverPhoto: PropTypes.number,
    photosFormat: PropTypes.string.isRequired,
  }).isRequired,
};

export default EventCard;
