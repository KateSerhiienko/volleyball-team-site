import PropTypes from 'prop-types';
import { FaMapMarker, FaCalendar, FaTrophy } from 'react-icons/fa';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LastEvent = ({ lastEvent }) => {
  const sliderSettings = {
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    centerMode: true,
    variableWidth: true,
  };

  return (
    <section className="external-container py-8">
      <h2 className="text-center font-accent tracking-widest font-bold">
        <p className="text-lg text-red-600">Last event</p>
        <p className="text-4xl">{lastEvent.title}</p>
      </h2>
      <p className="text-center">
        <span className="mr-1">Place in the tournament: </span>
        <FaTrophy className="inline pb-1 mr-1 text-red-600" />
        <span>{lastEvent.placeInTheTournament}</span>
      </p>
      <p className="mb-4 text-center line-clamp-1 text-red-600 text-sm">
        <FaCalendar className="inline pb-1 mr-1" />
        <span className="mr-2">{lastEvent.date}</span>
        <FaMapMarker className="inline pb-1" />
        <span>{lastEvent.place}</span>
      </p>
      <p className="h-24 line-clamp-4 opacity-60 mb-4">
        {lastEvent.description}
      </p>
      <Slider {...sliderSettings}>
        {Array.from({ length: lastEvent.amountOfPhotos }).map((_, index) => (
          <div key={index}>
            <img
              className="h-60 mx-2"
              src={`/events/event-${lastEvent.date}/event-${lastEvent.date}-${
                index + 1
              }.${lastEvent.photosFormat}`}
              alt={`Event ${lastEvent.title} photo ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

LastEvent.propTypes = {
  lastEvent: PropTypes.shape({
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

export default LastEvent;
