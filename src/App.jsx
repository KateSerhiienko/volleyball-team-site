import Navbar from './components/Navbar';
import Upcoming from './components/Upcoming';
import Hero from './components/Hero';
import Events from './components/Events';
import Team from './components/Team';
import Contacts from './components/Contacts';

const App = () => {
  const data = {
    upcomingEvents: [
      {
        title:
          'Sächsische Hochschulmeisterschaften im Beachvolleyball Männer und Frauen',
        date: '09.07.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
      {
        title: 'Sächsische Hochschulmeisterschaften im Beachvolleyball mixed',
        date: '10.07.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
      {
        title:
          'Sächsische Hochschulmeisterschaften im Beachvolleyball Männer und Frauen',
        date: '13.06.2024',
        time: '09:00',
        place: 'Dresden, Sportanlage des Dresdner SSV',
      },
    ],
    teamMembers: [
      {
        name: 'Hans Müller',
        position: 'Coach',
        img: '/team_members/hans_muller.jpeg',
      },
      {
        name: 'Friedrich Becker',
        position: 'Captain',
        img: '/team_members/friedrich_becker.jpeg',
      },
      {
        name: 'Klaus Wagner',
        position: 'Setter',
        img: '/team_members/klaus_wagner.jpeg',
      },
      {
        name: 'Jürgen Schmidt',
        position: 'Libero',
        img: '/team_members/jurgen_schmidt.jpeg',
      },
      {
        name: 'Ursula Fischer',
        position: 'Outside Hitter',
        img: '/team_members/ursula_fischer.jpeg',
      },
      {
        name: 'Monika Weber',
        position: 'Opposite Hitter',
        img: '/team_members/monika_weber.webp',
      },
      {
        name: 'Helga Hoffmann',
        position: 'Middle Blocker',
        img: '/team_members/helga_hoffmann.jpeg',
      },
      {
        name: 'Heinz Schäfer',
        position: 'Team Mascot',
        img: '/team_members/heinz_schafer.jpeg',
      },
      {
        name: 'Brigitte Wolf',
        position: 'Statistician',
        img: '/team_members/brigitte_wolf.jpeg',
      },
      {
        name: 'Günther Meyer',
        position: 'Assistant Coach',
        img: '/team_members/gunther_meyer.jpeg',
      },
      {
        name: 'Erika Bauer',
        position: 'Water Boy/Girl',
        img: '/team_members/erika_bauer.jpeg',
      },
      {
        name: 'Gertrud Keller',
        position: 'Cheerleader',
        img: '/team_members/gertrud_keller.jpeg',
      },
      {
        name: 'Rainer Koch',
        position: 'Bench Warmer',
        img: '/team_members/rainer_koch.webp',
      },
      {
        name: 'Dieter Richter',
        position: 'Ace Server',
        img: '/team_members/dieter_richter.jpeg',
      },
      {
        name: 'Elfriede Klein',
        position: 'Fan Club President',
        img: '/team_members/elfriede_klein.webp',
      },
      {
        name: 'Gisela Frank',
        position: 'Court Jester',
        img: '/team_members/gisela_frank.webp',
      },
    ],
  };

  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero>
          <Upcoming upcomingEvents={data.upcomingEvents} />
        </Hero>
        <Events />
        <Team teamMembers={data.teamMembers} />
      </main>

      <footer>
        <Contacts />
      </footer>
    </>
  );
};

export default App;
