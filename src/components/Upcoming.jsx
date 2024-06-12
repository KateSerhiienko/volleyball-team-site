import PropTypes from 'prop-types';
import { FaMapMarker, FaTrophy } from 'react-icons/fa';

const Upcoming = ({ upcomingEvents }) => {
  const getNearestEvents = () => {
    const today = new Date();

    const parseDate = (dateString) => {
      const parts = dateString.split('.');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
      return new Date(year, month, day);
    };

    const isPastEvent = (eventDate) => {
      const eventDateTime = parseDate(eventDate);
      return eventDateTime < today;
    };

    const filteredEvents = upcomingEvents
      .filter((event) => !isPastEvent(event.date))
      .sort((a, b) => parseDate(a.date) - parseDate(b.date));

    return filteredEvents.slice(0, 2);
  };

  const nearestEvents = getNearestEvents();

  return (
    <div className="text-right text-white drop-shadow-black">
      {nearestEvents && nearestEvents.length > 1 ? (
        <>
          <h2 className="mb-1 font-bold">
            {nearestEvents.length > 0 ? 'Upcoming events:' : 'Upcoming event:'}
          </h2>
          {nearestEvents.map((event, index) => (
            <div className="mb-4  text-right" key={index}>
              <div>
                <div>
                  <FaTrophy className="inline pb-1 mr-1" />
                  <span className=" w-auto mb-1">{event.title}</span>
                </div>
                <p className="brightness-50">
                  {event.date} {event.time}
                </p>
                <div className="text-sm brightness-50">
                  <FaMapMarker className="inline pb-1 mr-1 text-sm" />
                  <span>{event.place}</span>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p>
          Stay tuned for our upcoming events! We&apos;re eagerly preparing for
          exciting competitions. Meanwhile, we&apos;re looking forward to your
          invitations for upcoming tournaments.
        </p>
      )}
    </div>
  );
};

Upcoming.propTypes = {
  upcomingEvents: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string,
      place: PropTypes.string,
    })
  ),
};

export default Upcoming;
