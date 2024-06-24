import Upcoming from '../components/Upcoming';
import ShortHero from '../components/ShortHero';
import PastEvents from '../components/PastEvents';

const EventsPage = ({ eventsArchive, upcomingEvents }) => {
  return (
    <div>
      <ShortHero>
        EventsPage
        <Upcoming upcomingEvents={upcomingEvents} />
      </ShortHero>
      <PastEvents showAllEvents={true} pastEvents={eventsArchive} />
    </div>
  );
};

export default EventsPage;
